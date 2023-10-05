import { ProfileUserInfo } from '@/features/profile/profileUserInfo';
import styles from './ui.module.scss';
import { InverseProductsCard } from '@/features/profile/profileProductCard';
export const Profile = () => {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.layout}>
                    <header>
                        <h2 style={{ marginBottom: '16px' }} className={styles.page_title}>
                            Личный кабинет
                        </h2>
                        <ProfileUserInfo />
                    </header>
                    <main>
                        <h2
                            style={{ marginBottom: '16px', marginTop: '24px' }}
                            className={styles.page_title}>
                            Другие продукты Inverse
                        </h2>
                        <InverseProductsCard />
                    </main>
                </div>
            </div>
        </>
    );
};
