'use client';

import { ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';
import styles from './ui.module.scss';
import { ProductQuantitySkeleton } from '../skeleton';
export const ProductQuantity = ({
    quantity,
    setQuantity,
    skeleton = false,
}: {
    quantity?: string;
    setQuantity?: (quantity: string) => void;
    skeleton?: boolean;
}) => {
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                {skeleton ? (
                    <ProductQuantitySkeleton />
                ) : (
                    <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                        <h4 className={styles.textStyle}>Количество порций</h4>
                        <Input
                            onValueChange={setQuantity}
                            value={quantity}
                            size="medium"
                            width="128px"
                            type="number"
                            placeholder="шт."
                        />
                    </div>
                )}
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    inputBorderColorFocus: '#FF9A42',
    borderColorFocus: '#FF9A42',
});
