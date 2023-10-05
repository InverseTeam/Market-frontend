'use client';

import styles from './ui.module.scss';
import { ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';
import { ProductCaloriesStatSkeleton } from '../skeleton';
export const ProductCaloriesStat = ({
    isChange = false,
    kcal,
    squirrels,
    fats,
    carbohydrates,
    setCarbohydrates,
    setFats,
    setKcal,
    setSquirrels,
    skeleton = false,
}: {
    isChange?: boolean;
    kcal?: string;
    setKcal?: (kcal: string) => void;
    setSquirrels?: (squirrels: string) => void;
    setFats?: (fats: string) => void;
    setCarbohydrates?: (carbohydrates: string) => void;
    squirrels?: string;
    fats?: string;
    carbohydrates?: string;
    skeleton?: boolean;
}) => {
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div>
                    {skeleton ? null : (
                        <h3 className={styles.title} style={{ marginBottom: '16px' }}>
                            На 100 граммов
                        </h3>
                    )}
                    {isChange && skeleton === false ? (
                        <section className={styles.statSectionWrap}>
                            <span className={styles.columnWrap}>
                                <Input
                                    onValueChange={setKcal}
                                    value={kcal}
                                    size="medium"
                                    width="96px"
                                    type="number"
                                />
                                <h5 className={styles.infoStyles}>ккал</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <Input
                                    onValueChange={setSquirrels}
                                    value={squirrels}
                                    size="medium"
                                    width="96px"
                                    type="number"
                                />
                                <h5 className={styles.infoStyles}>белки</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <Input
                                    onValueChange={setFats}
                                    value={fats}
                                    size="medium"
                                    width="96px"
                                    type="number"
                                />
                                <h5 className={styles.infoStyles}>жиры</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <Input
                                    size="medium"
                                    type="number"
                                    width="96px"
                                    onValueChange={setCarbohydrates}
                                    value={carbohydrates}
                                />
                                <h5 className={styles.infoStyles}>углеводы</h5>
                            </span>
                        </section>
                    ) : isChange === false && skeleton === false ? (
                        <section className={styles.statSectionWrap}>
                            <span className={styles.columnWrap}>
                                <h4 className={styles.textStyles}>{kcal}</h4>
                                <h5 className={styles.infoStyles}>ккал</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <h4 className={styles.textStyles}>{squirrels}</h4>
                                <h5 className={styles.infoStyles}>белки</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <h4 className={styles.textStyles}>{fats}</h4>
                                <h5 className={styles.infoStyles}>жиры</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <h4 className={styles.textStyles}>{carbohydrates}</h4>
                                <h5 className={styles.infoStyles}>углеводы</h5>
                            </span>
                        </section>
                    ) : (
                        skeleton && <ProductCaloriesStatSkeleton />
                    )}
                </div>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    inputBorderColorFocus: '#FF9A42',
    borderColorFocus: '#FF9A42',
    inputFontSizeMedium: '24px',
});
