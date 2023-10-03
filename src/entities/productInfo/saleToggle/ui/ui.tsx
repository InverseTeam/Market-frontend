'use client';
import styles from './ui.module.scss';
import { ThemeContext, ThemeFactory, Toggle } from '@skbkontur/react-ui';
export const SaleToggle = ({
    checked = false,
    onValueChange,
}: {
    checked?: boolean;
    onValueChange?: ((value: boolean) => void) | undefined;
}) => {
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div className={styles.toggleWrap}>
                    <Toggle checked={checked} onValueChange={onValueChange} size="large">
                        В продаже
                    </Toggle>
                </div>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    toggleBgChecked: '#FF9A42',
});
