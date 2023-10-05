'use client';

import { NavBarLogo } from '@/entities/header/navBarLogo';
import styles from './ui.module.scss';
import { FC, useState, useEffect } from 'react';
import { NavBarElement, NavBarElementProps } from '@/entities/header/navBarElement';
import { middleSectionElements, lastSectionElements } from '../data';
import User from '../../../../public/globalIcons/user.svg';
import { instanceLogged } from '@/shared/api/axios';
import { UserTypes } from '@/shared/interface';

export interface NavBarDesktopProps {}

const BASE_URL = '/users/auth/users/me/';

export const NavBarDesktop: FC<NavBarDesktopProps> = () => {
    const [activeElementID, setActiveElementID] = useState<number>(0);
    const [middleSectionData, setMiddleSectionData] =
        useState<NavBarElementProps[]>(middleSectionElements);
    const [user, setUser] = useState<UserTypes | null>(null);
    const [lastSectionData, setLastSectionData] =
        useState<NavBarElementProps[]>(lastSectionElements);

    const getFullName = (): string => {
        if (user) {
            const fullName = `${user.firstname} ${user.lastname}`;
            return fullName.trim();
        }
        return '';
    };

    useEffect(() => {
        setMiddleSectionData((middleSectionElements) =>
            middleSectionElements.map((element) =>
                element.id === activeElementID
                    ? { ...element, active: element.id }
                    : { ...element, active: null },
            ),
        );
        setLastSectionData((lastSectionElements) =>
            lastSectionElements.map((element) =>
                element.id === activeElementID
                    ? { ...element, active: element.id }
                    : { ...element, active: null },
            ),
        );
    }, [activeElementID]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instanceLogged.get(BASE_URL);
                setUser(response.data);
            } catch (error) {
                return;
            }
        };
        fetchData();
    }, []);

    return (
        <header className={styles.header}>
            <span className={styles.layout}>
                <section className={styles.section} style={{ paddingBottom: '12px' }}>
                    <NavBarLogo />
                </section>
                <section>
                    <nav>
                        <ul className={styles.navElements}>
                            {middleSectionData &&
                                middleSectionData.map((navBarElements: NavBarElementProps) => {
                                    return (
                                        <div
                                            onClick={() => setActiveElementID(navBarElements.id)}
                                            key={navBarElements.id}>
                                            <NavBarElement
                                                active={
                                                    navBarElements.id === activeElementID
                                                        ? activeElementID
                                                        : null
                                                }
                                                id={navBarElements.id}
                                                title={navBarElements.title}
                                                link={navBarElements.link}
                                                icon={navBarElements.icon}
                                                elements={navBarElements.elements}
                                            />
                                        </div>
                                    );
                                })}
                        </ul>
                    </nav>
                </section>
            </span>
            <section>
                <nav>
                    <ul className={styles.navElements}>
                        {lastSectionData &&
                            lastSectionData.map((navBarElements: NavBarElementProps) => {
                                return (
                                    <div
                                        onClick={() => setActiveElementID(navBarElements.id)}
                                        key={navBarElements.id}>
                                        <NavBarElement
                                            active={
                                                navBarElements.id === activeElementID
                                                    ? activeElementID
                                                    : null
                                            }
                                            id={4}
                                            title={getFullName()}
                                            link="/admin/profile"
                                            icon={User}
                                            elements={navBarElements.elements}
                                        />
                                    </div>
                                );
                            })}
                    </ul>
                </nav>
            </section>
        </header>
    );
};
