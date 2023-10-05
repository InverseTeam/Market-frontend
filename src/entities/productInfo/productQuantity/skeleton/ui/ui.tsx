import styles from './ui.module.scss';

export const ProductQuantitySkeleton = () => {
    return (
        <>
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
                <h4 className={styles.textStyle}></h4>
            </div>
        </>
    );
};
