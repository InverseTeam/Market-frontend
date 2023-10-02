import styles from './ui.module.scss';

export const ProductCardSkeleton = () => {
    return (
        <>
            <article className={styles.card}>
                <span className={styles.img}></span>
                <dl
                    className={styles.position}
                    style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span className={styles.info}></span>
                    <span className={styles.prod_title}></span>
                </dl>
                <span className={styles.button}></span>
            </article>
        </>
    );
};
