import { FC } from 'react';
import styles from './ui.module.scss';
import { ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';
import { ProductPriceSkeleton } from '../skeleton';

interface ProductPriceProps {
    startPrice?: string;
    setStartPrice?: (startPrice: string) => void;
    currentPrice?: string;
    setCurrentPrice?: (startPrice: string) => void;
    skeleton?: boolean;
}

export const ProductPrice: FC<ProductPriceProps> = ({
    startPrice,
    setCurrentPrice,
    setStartPrice,
    currentPrice,
    skeleton = false,
}) => {
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                {skeleton ? (
                    <ProductPriceSkeleton />
                ) : (
                    <section className={styles.layout}>
                        <div className={styles.blockWrap}>
                            <h4 className={styles.blockTitle}>Цена</h4>
                            <Input
                                value={startPrice}
                                onValueChange={setStartPrice}
                                placeholder="В рублях"
                                type="number"
                                size="medium"
                            />
                        </div>
                        <div className={styles.blockWrap}>
                            <h4 className={styles.blockTitle}>Цена с учетом скидки</h4>
                            <Input
                                value={currentPrice}
                                onValueChange={setCurrentPrice}
                                placeholder="В рублях"
                                type="number"
                                size="medium"
                            />
                        </div>
                    </section>
                )}
            </ThemeContext.Provider>
        </>
    );
};
const myTheme = ThemeFactory.create({
    inputBorderColorFocus: '#FF9A42',
    borderColorFocus: '#FF9A42',
});
