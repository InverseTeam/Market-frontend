import styles from './ui.module.scss';
import { FC } from 'react';
import Image from 'next/image';
export interface OrderItemProps {
    cover?: any;
    name?: string;
    price?: string;
    quantity?: string;
}
const IMGURL = 'https://market.inverse-team.store';
export const OrderItem: FC<OrderItemProps> = ({ cover, name, price, quantity }) => {
    return (
        <>
            <div className={styles.product}>
                <picture className={styles.cover}>
                    <Image
                        className={styles.cover}
                        src={IMGURL + cover}
                        width={70}
                        height={70}
                        alt="ProductCover"
                    />
                </picture>
                <div className={styles.product__info}>
                    <h5 className={styles.product__title}>{name}</h5>
                    <span className={styles.product__description}>
                        <p className={styles.product__price}>{price} ₽</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none">
                            <circle cx="2" cy="2" r="2" fill="#EDCBAD" />
                        </svg>
                        <p className={styles.product__quantity}>{quantity} шт</p>
                    </span>
                </div>
            </div>
        </>
    );
};
