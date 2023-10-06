'use client';

import { TableWithOrders } from '@/features/tableWithOrders';
import styles from './ui.module.scss';
import { SearchLoupeIcon20Regular } from '@skbkontur/icons/SearchLoupeIcon20Regular';
import { ThemeContext, ThemeFactory, Input } from '@skbkontur/react-ui';

export const Orders = () => {

    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <div className={styles.layout}>
                    <Input
                        leftIcon={<SearchLoupeIcon20Regular />}
                        style={{ width: '320px' }}
                        placeholder="Найти..."
                        size="medium"
                    />
                    <TableWithOrders />
                </div>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    borderColorFocus: '#FF9A42',
    inputBorderRadiusMedium: '5px',
});
