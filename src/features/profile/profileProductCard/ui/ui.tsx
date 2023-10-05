import styles from './ui.module.scss';
import { InverseProductCardData, InverseProductCardTypes } from '../data';
import Image from 'next/image';

export const InverseProductsCard = () => {
    return (
        <>
            <article className={styles.cards__wrap}>
                {InverseProductCardData.map((data: InverseProductCardTypes) => (
                    <div key={data.id} className={styles.card}>
                        <header className={styles.card_header}>
                            <Image src={data.icon} alt={data.title} width={40} height={40} />
                            <h3 className={styles.header_title}>{data.title}</h3>
                        </header>
                        <main className={styles.card_main}>{data.description}</main>
                    </div>
                ))}
            </article>
        </>
    );
};
