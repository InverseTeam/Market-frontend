import { OrderTypes, ProductTypes } from '@/shared/interface';
import styles from './ui.module.scss';
import { OrderItem } from '@/entities/orderItem';

export const OrdersCardInfo = ({ order }: { order: OrderTypes | null }) => {
    return (
        <>
            <article className={styles.card}>
                <header className={styles.header}>
                    4 товара ({order?.total_weight} г.) на сумму{' '}
                    <span className={styles.orange}>{order?.total_price}₽</span>
                </header>
                <main className={styles.main}>
                    {order?.order_products.map((product: any) => {
                        return (
                            <>
                                <OrderItem
                                    key={product.id}
                                    cover={product.product.cover}
                                    name={product.product.name}
                                    price={order.total_price}
                                    quantity={product.product.amount}
                                />
                                <div key={product.id} className={styles.stock}></div>
                            </>
                        );
                    })}
                </main>
            </article>
        </>
    );
};
