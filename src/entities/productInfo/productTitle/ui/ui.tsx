'use client';

import styles from './ui.module.scss';
import { Textarea, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
import { ProductTitleSkeleton } from '../skeleton';
export const ProductTitle = ({
    isChange = false,
    title,
    setTitle,
    skeleton = false,
}: {
    isChange?: boolean;
    title?: string;
    setTitle?: (title: string) => void;
    skeleton?: boolean;
}) => {
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                {isChange ? (
                    <Textarea
                        onValueChange={setTitle}
                        size="medium"
                        value={title}
                        width="100%"
                        placeholder="Название товара"
                        autoResize
                    />
                ) : title && isChange === false ? (
                    <h1 className={styles.textStyles}>{title}</h1>
                ) : (
                    skeleton && <ProductTitleSkeleton />
                )}
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    textareaBorderColorFocus: '#FF9A42',
    textareaFontSizeMedium: '32px',
    textareaPaddingXMedium: '8px',
    textareaPaddingYMedium: '8px',
    textareaLineHeightMedium: '38px',
});
