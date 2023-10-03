'use client';

import styles from './ui.module.scss';
import { useState, FC } from 'react';
import { Textarea, ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';
export interface ProductDescriptionProps {
    description: string;
    compound: string;
    storageConditions: string;
    weight: string;
    isChange?: boolean;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
    description,
    compound,
    storageConditions,
    weight,
    isChange = false,
}) => {
    const [textAreaDescription, setTextAreaDescription] = useState<string>(description);
    const [textAreaCompound, setTextAreaCompound] = useState<string>(compound);
    const [inputStorageConditions, setInputStorageConditions] = useState<string>(storageConditions);
    const [inputWeight, setInputWeight] = useState<string>(weight);
    const handleTextareaDescriptionChange = (value: string) => {
        setTextAreaDescription(value);
    };
    const handleTextareaCompoundChange = (value: string) => {
        setTextAreaCompound(value);
    };
    const handleInputConditionsChange = (value: string) => {
        setInputStorageConditions(value);
    };
    const handleInputWeightChange = (value: string) => {
        setInputWeight(value);
    };
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div style={{ width: '100%' }}>
                    <h4 className={styles.title} style={{ marginBottom: '16px' }}>
                        О товаре
                    </h4>
                    {isChange ? (
                        <section className={styles.sectionWrap}>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Описание</h5>
                                <Textarea
                                    onValueChange={(value: string) =>
                                        handleTextareaDescriptionChange(value)
                                    }
                                    size="medium"
                                    value={textAreaDescription}
                                    width="100%"
                                    autoResize
                                />
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Состав</h5>
                                <Textarea
                                    onValueChange={(value: string) =>
                                        handleTextareaCompoundChange(value)
                                    }
                                    size="medium"
                                    value={textAreaCompound}
                                    width="100%"
                                    autoResize
                                />
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>
                                    Срок годности, условия хранения
                                </h5>
                                <Input
                                    size="medium"
                                    onValueChange={(value: string) =>
                                        handleInputConditionsChange(value)
                                    }
                                    value={inputStorageConditions}
                                />
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Вес/объем</h5>
                                <Input
                                    size="medium"
                                    onValueChange={(value: string) =>
                                        handleInputWeightChange(value)
                                    }
                                    value={inputWeight}
                                />
                            </span>
                        </section>
                    ) : (
                        <section className={styles.sectionWrap}>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Описание</h5>
                                <p className={styles.textStyle}>{description}</p>
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Состав</h5>
                                <p className={styles.textStyle}>{compound}</p>
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>
                                    Срок годности, условия хранения
                                </h5>
                                <p className={styles.textStyle}>{storageConditions}</p>
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Вес/объем</h5>
                                <p className={styles.textStyle}>{weight}</p>
                            </span>
                        </section>
                    )}
                </div>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    textareaBorderColorFocus: '#FF9A42',
    inputBorderColorFocus: '#FF9A42',
    borderColorFocus: '#FF9A42',
});
