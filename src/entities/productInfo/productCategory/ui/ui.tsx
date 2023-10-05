'use client';
import { useState, useEffect } from 'react';
import styles from './ui.module.scss';
import { ThemeContext, ThemeFactory, Select } from '@skbkontur/react-ui';
import { ProductCategoryTypes } from '@/shared/interface';
import { GetCategoryNames } from '../data';

export const ProductCategory = ({
    productCategory,
    setProductCategory,
}: {
    productCategory?: string;
    setProductCategory?: (value: string) => void;
}) => {
    const [selectItems, setSelectItems] = useState<ProductCategoryTypes[]>([]);
    useEffect(() => {
        const getEvent = async () => {
            const fetchEvent: ProductCategoryTypes[] = await GetCategoryNames();
            setSelectItems(fetchEvent);
        };
        getEvent();
    }, []);

    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                    <h4 className={styles.textStyle}>Категория товара</h4>
                    <Select
                        value={productCategory}
                        onValueChange={setProductCategory}
                        placeholder="Выбрать категорию"
                        items={selectItems}
                        size="medium"
                    />
                </div>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    inputBorderColorFocus: '#FF9A42',
    borderColorFocus: '#FF9A42',
    inputFontSizeMedium: '24px',
    menuItemHoverBg: '#FF9A42',
});
