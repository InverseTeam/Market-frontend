import styles from './ui.module.scss';

export const NavBarLogo = () => {
    return (
        <>
            <div className={styles.navBarLogo}>
                <div className={styles.layout}>
                    <h2 className={styles.inverse}>Inverse</h2>
                    <h2 className={styles.document}>Маркет</h2>
                </div>
            </div>
        </>
    );
};
