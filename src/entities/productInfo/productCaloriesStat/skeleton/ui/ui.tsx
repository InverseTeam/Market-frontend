import styles from './ui.module.scss';

export const ProductCaloriesStatSkeleton = () => {
    return (
        <>
            <div>
                <h3 className={styles.title} style={{ marginBottom: '16px' }}></h3>
                <section className={styles.statSectionWrap}>
                    <span className={styles.columnWrap}>
                        <h4 className={styles.textStyles}></h4>
                    </span>
                    <span className={styles.columnWrap}>
                        <h4 className={styles.textStyles}></h4>
                    </span>
                    <span className={styles.columnWrap}>
                        <h4 className={styles.textStyles}></h4>
                    </span>
                    <span className={styles.columnWrap}>
                        <h4 className={styles.textStyles}></h4>
                    </span>
                </section>
            </div>
        </>
    );
};
