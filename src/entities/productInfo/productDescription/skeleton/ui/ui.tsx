import styles from './ui.module.scss';

export const ProductDescriptionSkeleton = () => {
    return (
        <>
            <div>
                <h4 className={styles.title} style={{ marginBottom: '16px' }}></h4>
                <section className={styles.sectionWrap}>
                    <span className={styles.blockLayout}>
                        <h5 className={styles.block_title}></h5>
                        <p className={styles.textStyle}></p>
                    </span>
                    <span className={styles.blockLayout}>
                        <h5 className={styles.block_title}></h5>
                        <p className={styles.textStyle}></p>
                    </span>
                    <span className={styles.blockLayout}>
                        <h5 className={styles.block_title}></h5>
                        <p className={styles.textStyle}></p>
                    </span>
                    <span className={styles.blockLayout}>
                        <h5 className={styles.block_title}></h5>
                        <p className={styles.textStyle}></p>
                    </span>
                </section>
            </div>
        </>
    );
};
