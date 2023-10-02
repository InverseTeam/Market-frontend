'use client';

import styles from './ui.module.scss';
import { ThemeContext, ThemeFactory, Input, Button } from '@skbkontur/react-ui';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { instance } from '@/shared/api/axios';
import { getAccessToken } from '@/shared/authBlock/auth';
import { setCookie } from '@/shared/api/setCookie';

export const AuthCard = () => {
    const [buttonLoading, setButtonLoading] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const router = useRouter();
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (inputValues.email.length > 0 && inputValues.password.length > 0) {
            setButtonDisabled(false);
        } else setButtonDisabled(true);
    }, [inputValues.email.length, inputValues.password.length]);

    const handleLoadingStart = () => {
        setTimeout(() => {
            setButtonLoading(false);
        }, 10000);
    };

    const handleButtonClick = async () => {
        setButtonLoading(true);
        try {
            const loginUser = await instance.post('/users/auth/token/login/', {
                email: inputValues.email,
                password: inputValues.password,
            });

            setCookie('accessToken', loginUser.data.auth_token, { expires: 30, path: '/' });
            router.prefetch('/admin/sale');
            const accessToken = getAccessToken();
            if (accessToken) {
                router.push('/admin/sale');
            }
            handleLoadingStart();
        } catch (e) {
            alert('Данные введены неверно или пользователя не существует');
            setButtonLoading(false);
        }
    };

    return (
        <>
            <ThemeContext.Provider value={myTheme}>
                <form className={styles.card}>
                    <header style={{ marginBottom: '24px' }}>
                        <h1 className={styles.inverseLogo}>
                            Inverse.<span className={styles.productName}>Маркет</span>
                        </h1>
                    </header>
                    <main style={{ marginBottom: '24px' }} className={styles.inputLabel}>
                        <Input
                            name="email"
                            placeholder="Почта"
                            style={InputStyles}
                            value={inputValues.email}
                            size="large"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="password"
                            value={inputValues.password}
                            size="large"
                            type="password"
                            onChange={handleInputChange}
                            placeholder="Пароль"
                            style={InputStyles}
                        />
                    </main>
                    <footer className={styles.buttonAuth} style={{ width: '100%', color: '#fff' }}>
                        <Button
                            loading={buttonLoading}
                            disabled={buttonDisabled}
                            style={{ color: '#fff' }}
                            width="100%"
                            onClick={handleButtonClick}
                            size="large"
                            borderless
                            use="primary">
                            Войти
                        </Button>
                    </footer>
                </form>
            </ThemeContext.Provider>
        </>
    );
};

const InputStyles = {
    width: '100%',
    borderRadius: '8px',
};

const myTheme = ThemeFactory.create({
    borderColorFocus: '#FF9A42',
    btnBorderRadiusLarge: '8px',
    btnPrimaryBg: '#FF9A42',
    btnPrimaryHoverBg: '#FF8F2D',
    btnPrimaryActiveBg: '#FF9A42',
    btnPrimaryTextColor: '#fff',
    btnDisabledBg: '#FF9A4299',
    btnDisabledTextColor: '#fff',
});
