'use client';

import styles from './ui.module.scss';
import { useState, FC } from 'react';
import { Textarea, ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';
import { ProductDescriptionSkeleton } from '../skeleton/ui/ui';
export interface ProductDescriptionProps {
    description?: string | undefined;
    compound?: string | undefined;
    storageConditions?: string | undefined;
    weight?: string | undefined;
    setDescription?: (description: string) => void;
    setCompound?: (compound: string) => void;
    setStorageConditions?: (storageConditions: string) => void;
    setWeight?: (weight: string) => void;
    isChange?: boolean;
    skeleton?: boolean;
}

export const ProductDescription: FC<ProductDescriptionProps> = ({
    description,
    compound,
    storageConditions,
    weight,
    isChange = false,
    skeleton = false,
    setCompound,
    setDescription,
    setStorageConditions,
    setWeight,
}) => {
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div style={{ width: '100%' }}>
                    {skeleton === false && (
                        <h4 className={styles.title} style={{ marginBottom: '16px' }}>
                            О товаре
                        </h4>
                    )}
                    {isChange && skeleton === false ? (
                        <section className={styles.sectionWrap}>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Описание</h5>
                                <Textarea
                                    onValueChange={setDescription}
                                    size="medium"
                                    value={description}
                                    width="100%"
                                    autoResize
                                />
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Состав</h5>
                                <Textarea
                                    onValueChange={setCompound}
                                    size="medium"
                                    value={compound}
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
                                    onValueChange={setStorageConditions}
                                    value={storageConditions}
                                />
                            </span>
                            <span className={styles.blockLayout}>
                                <h5 className={styles.block_title}>Вес/объем</h5>
                                <Input size="medium" onValueChange={setWeight} value={weight} />
                            </span>
                        </section>
                    ) : isChange === false && skeleton === false ? (
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
                    ) : (
                        skeleton && <ProductDescriptionSkeleton />
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
