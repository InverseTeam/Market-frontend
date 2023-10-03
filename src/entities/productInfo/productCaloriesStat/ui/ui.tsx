'use client';

import styles from './ui.module.scss';
import { useState } from 'react';
import { ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';
export const ProductCaloriesStat = ({
    isChange = false,
    kcal,
    squirrels,
    fats,
    carbohydrates,
}: {
    isChange?: boolean;
    kcal: string;
    squirrels: string;
    fats: string;
    carbohydrates: string;
}) => {
    const [textAreaKcal, setKcal] = useState<string>(kcal);
    const [textAreaSquirrels, setSquirrels] = useState<string>(squirrels);
    const [textAreaFats, setFats] = useState<string>(fats);
    const [textAreaCarbohydrates, setCarbohydrates] = useState<string>(carbohydrates);
    const handleKcalChange = (value: string) => {
        setKcal(value);
    };

    const handleSquirrelsChange = (value: string) => {
        setSquirrels(value);
    };

    const handleFatsChange = (value: string) => {
        setFats(value);
    };

    const handleCarbohydratesChange = (value: string) => {
        setCarbohydrates(value);
    };
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div>
                    <h3 className={styles.title} style={{ marginBottom: '16px' }}>
                        На 100 граммов
                    </h3>
                    {isChange ? (
                        <section className={styles.statSectionWrap}>
                            <span className={styles.columnWrap}>
                                <Input
                                    onValueChange={(value: string) => handleKcalChange(value)}
                                    value={textAreaKcal}
                                    size="medium"
                                    width="96px"
                                    type="number"
                                />
                                <h5 className={styles.infoStyles}>ккал</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <Input
                                    onValueChange={(value: string) => handleSquirrelsChange(value)}
                                    value={textAreaSquirrels}
                                    size="medium"
                                    width="96px"
                                    type="number"
                                />
                                <h5 className={styles.infoStyles}>белки</h5>
                            </span>
                            <span className={styles.columnWrap}>
                                <Input
                                    onValueChange={(value: string) => handleFatsChange(value)}
                                    value={textAreaFats}
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
                                    onValueChange={(value: string) =>
                                        handleCarbohydratesChange(value)
                                    }
                                    value={textAreaCarbohydrates}
                                />
                                <h5 className={styles.infoStyles}>углеводы</h5>
                            </span>
                        </section>
                    ) : (
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
