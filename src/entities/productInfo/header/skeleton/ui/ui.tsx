import styles from './ui.module.scss';

export const ProductInfoHeaderSkeleton = () => {
    return (
        <>
            <nav className={styles.navWrap}>
                <span className={styles.textStyles}></span>

                <span className={styles.textStyles}></span>

                <span className={styles.textStyles}></span>
            </nav>
        </>
    );
};
