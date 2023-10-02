'use client';

import styles from './ui.module.scss';
import { useState } from 'react';
import { Textarea, ThemeContext, ThemeFactory } from '@skbkontur/react-ui';
export const ProductTitle = ({
    isChange = false,
    title,
}: {
    isChange?: boolean;
    title: string;
}) => {
    const [textareaValue, setTextareaValue] = useState<string>(title);

    const handleTextareaChange = (value: string) => {
        setTextareaValue(value);
    };
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                {isChange ? (
                    <Textarea
                        onValueChange={(value: string) => handleTextareaChange(value)}
                        size="medium"
                        value={textareaValue}
                        width="100%"
                        autoResize
                    />
                ) : (
                    <h1 className={styles.textStyles}>{title}</h1>
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
});
