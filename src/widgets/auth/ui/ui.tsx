import { AuthCard } from '@/features/authCard';
import styles from './ui.module.scss';

export const Auth = () => {
    return (
        <section className={styles.authSection}>
            <AuthCard />
            <h2 className={styles.authHelper}>
                Используйте Ваш корпоративный аккаунт для авторизации
            </h2>
        </section>
    );
};
