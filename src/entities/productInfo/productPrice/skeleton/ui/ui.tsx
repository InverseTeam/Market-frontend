import styles from './ui.module.scss';

export const ProductPriceSkeleton = () => {
    return (
        <>
            <section className={styles.layout}>
                <div className={styles.blockWrap}>
                    <h4 className={styles.blockTitle}></h4>
                </div>
                <div className={styles.blockWrap}>
                    <h4 className={styles.blockTitle}></h4>
                </div>
            </section>
        </>
    );
};
