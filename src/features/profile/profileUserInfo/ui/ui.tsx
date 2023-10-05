'use client';

import styles from './ui.module.scss';
import Image from 'next/image';
import Email from '../../../../../public/profile/email.svg';
import Work from '../../../../../public/profile/work.svg';
import UserAvatar from '../../../../../public/profile/userAvatar.svg';
import Organization from '../../../../../public/profile/orga.svg';
import { UserTypes } from '@/shared/interface';
import { instanceLogged } from '@/shared/api/axios';
import { useEffect, useState } from 'react';

export const ProfileUserInfo = () => {
    const [userData, setUserData] = useState<UserTypes | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instanceLogged.get('/users/auth/users/me/');
                setUserData(response.data);
            } catch (error) {
                return;
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <header className={styles.wrap}>
                <dt className={styles.user}>
                    <Image src={UserAvatar} width={64} height={64} alt="UserLogo" />
                    <h1 className={styles.user__fullName}>
                        {userData?.lastname} {userData?.firstname} {userData?.surname}
                    </h1>
                </dt>
                <dt className={styles.user__info}>
                    <dl className={styles.user_info_line}>
                        <dd className={styles.user_info_line_head}>
                            <Image
                                style={{ marginLeft: '10px' }}
                                src={Email}
                                width={24}
                                height={24}
                                alt="Email"
                            />
                            <p className={styles.line_title}>Почта:</p>
                        </dd>
                        <p className={styles.line_data}>{userData?.email}</p>
                    </dl>
                    <dl className={styles.user_info_line}>
                        <dd className={styles.user_info_line_head}>
                            <Image
                                style={{ marginLeft: '10px' }}
                                src={Work}
                                width={24}
                                height={24}
                                alt="Email"
                            />
                            <p className={styles.line_title}>Должность:</p>
                        </dd>
                        <p className={styles.line_data}>{userData?.role.name}</p>
                    </dl>
                    <dl className={styles.user_info_line}>
                        <dd className={styles.user_info_line_head}>
                            <Image
                                style={{ marginLeft: '10px' }}
                                src={Organization}
                                width={24}
                                height={24}
                                alt="Organization"
                            />
                            <p className={styles.line_title}>Организация:</p>
                        </dd>
                        <p className={styles.line_data}>{userData?.organization.name}</p>
                    </dl>
                </dt>
            </header>
        </>
    );
};
