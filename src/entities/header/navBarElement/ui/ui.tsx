'use client';
import Link from 'next/link';
import styles from './ui.module.scss';
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import DropDown from '../../../../.././public/globalIcons/dropDown.svg';
import { usePathname } from 'next/navigation';
export interface NavBarElementProps {
    id: number;
    title: string;
    link: string | '';
    active?: number | null;
    icon: string | StaticImport;
    elements?:
        | {
              id: number;
              title: string;
              link: string;
              active?: number | null;
          }[]
        | null;
}

export const NavBarElement: FC<NavBarElementProps> = ({
    title,
    link,
    icon,
    elements,
    id,
    active,
}) => {
    const pathname = usePathname();
    const [activeDropDownElementID, setActiveDropDownElementID] = useState<number | null>(null);
    const [dropDownActive, setDropDownActive] = useState<boolean>(false);
    const setActiveDropDownElement = (elementId: number) => {
        setActiveDropDownElementID(elementId);
    };
    const setDropDown = () => {
        if (active === id) {
            setDropDownActive(!dropDownActive);
        }
    };

    useEffect(() => {
        if (active !== id) {
            setDropDownActive(false);
            setActiveDropDownElementID(null);
        }
        const setDropDown = () => {
            if (active === id) {
                setDropDownActive(true);
            }
        };
        if (active === id) {
            setDropDown();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, id]);

    return (
        <>
            <div className={styles.layout}>
                {title === 'Товары' ? (
                    <button
                        style={{
                            backgroundColor:
                                active === id ? 'rgba(255, 216, 170, 0.65)' : 'transparent',
                            width: '100%',
                        }}
                        className={styles.element}
                        onClick={setDropDown}>
                        <span className={styles.elementLayout}>
                            <picture className={styles.leftIcon}>
                                <Image src={icon} width={24} height={24} alt="" />
                            </picture>
                            <p className={styles.title}>{title}</p>
                        </span>
                        <picture className={styles.rightIcon}>
                            {elements && <Image src={DropDown} width={16} height={16} alt="" />}
                        </picture>
                    </button>
                ) : (
                    <Link
                        style={{
                            backgroundColor:
                                active === id ? 'rgba(255, 216, 170, 0.65)' : 'transparent',
                        }}
                        className={styles.element}
                        onClick={setDropDown}
                        href={link}>
                        <span className={styles.elementLayout}>
                            <picture className={styles.leftIcon}>
                                <Image src={icon} width={24} height={24} alt="" />
                            </picture>
                            <p className={styles.title}>{title}</p>
                        </span>
                        <picture className={styles.rightIcon}>
                            {elements && <Image src={DropDown} width={16} height={16} alt="" />}
                        </picture>
                    </Link>
                )}
                <ul className={styles.dropDown}>
                    {dropDownActive &&
                        elements &&
                        elements.map((element) => {
                            const isActive = element.link === pathname;
                            return (
                                <Link
                                    onClick={() => setActiveDropDownElement(element.id)}
                                    key={element.id}
                                    className={styles.element}
                                    href={element.link}>
                                    <p
                                        key={element.id}
                                        style={{
                                            color: isActive ? '#FFA236' : '#222',
                                        }}
                                        className={isActive ? styles.titleActive : styles.title}>
                                        {element.title}
                                    </p>
                                </Link>
                            );
                        })}
                </ul>
            </div>
        </>
    );
};
