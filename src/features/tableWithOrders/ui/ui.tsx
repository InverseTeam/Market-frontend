'use client';
import { useState, useEffect } from 'react';
import styles from './ui.module.scss';
import { ThemeContext, ThemeFactory, Button } from '@skbkontur/react-ui';
import { OrderTypes } from '@/shared/interface';
import { Get } from '../model';
import moment from 'moment';
import { useRouter } from 'next/navigation';
export const TableWithOrders = () => {
    const [orders, setOrders] = useState<OrderTypes[] | null>(null);
    const router = useRouter();
    useEffect(() => {
        const getOrder = async () => {
            const fetchEvent: OrderTypes[] = await Get();
            setOrders(fetchEvent);
        };
        getOrder();
    }, []);
    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <section className={styles.layout}>
                    <table style={{ borderSpacing: '0px 32px' }} width="100%">
                        <tbody className={styles.table__body}>
                            <tr>
                                <td align="left" className={styles.tableHeader}>
                                    Номер заказа
                                </td>
                                <td align="left" className={styles.tableHeader}>
                                    Стоимость
                                </td>
                                <td align="left" className={styles.tableHeader}>
                                    Дата оформления
                                </td>
                                <td align="left" className={styles.tableHeader}>
                                    Адрес доставки
                                </td>
                                <td align="left" className={styles.tableHeader}></td>
                            </tr>
                            {orders?.map((element: OrderTypes) => {
                                const formattedDate = moment(element.order_time).format(
                                    'DD.MM.YY HH:mm',
                                );
                                return (
                                    <tr key={element.id} className={styles.border}>
                                        <td className={styles.bold}>№ {element.id}</td>
                                        <td className={styles.tableElement}>
                                            {element.total_price} ₽
                                        </td>
                                        <td className={styles.tableElement}>{formattedDate}</td>
                                        <td className={styles.tableElement}>
                                            Екатеринбург, п. Большой Исток...
                                        </td>
                                        <td className={styles.tableElement}>
                                            <Button
                                                onClick={() => router.push(`orders/${element.id}`)}
                                                borderless
                                                use="primary"
                                                size="medium">
                                                Подробнее
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </ThemeContext.Provider>
        </>
    );
};

const myTheme = ThemeFactory.create({
    borderColorFocus: '#FF9A42',
    btnPrimaryBorderColor: '#FF9A42',
    btnBorderRadiusMedium: '8px',
    btnPrimaryBg: '#FF9A42',
    btnPrimaryHoverBg: '#FF8F2D',
    btnPrimaryActiveBg: '#FF9A42',
    btnPrimaryTextColor: '#fff',
    btnDisabledBg: '#FF9A4299',
    btnDisabledTextColor: '#fff',
});
