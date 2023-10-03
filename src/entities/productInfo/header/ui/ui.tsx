'use client';
import styles from './ui.module.scss';
import { useRouter } from 'next/navigation';
export const ProductInfoHeader = ({
    productType,
    productCategory,
    productName,
}: {
    productType: string;
    productCategory: string;
    productName: string;
}) => {
    const router = useRouter();
    return (
        <>
            <nav className={styles.navWrap}>
                <span onClick={() => router.back()} className={styles.textStyles}>
                    {productType}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none">
                    <path
                        d="M6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9L6.21967 12.9697Z"
                        fill="#757575"
                    />
                </svg>
                <span className={styles.textStyles}>{productCategory}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none">
                    <path
                        d="M6.21967 12.9697C5.92678 13.2626 5.92678 13.7374 6.21967 14.0303C6.51256 14.3232 6.98744 14.3232 7.28033 14.0303L11.7803 9.53033C12.0732 9.23744 12.0732 8.76256 11.7803 8.46967L7.28033 3.96967C6.98744 3.67678 6.51256 3.67678 6.21967 3.96967C5.92678 4.26256 5.92678 4.73744 6.21967 5.03033L10.1893 9L6.21967 12.9697Z"
                        fill="#757575"
                    />
                </svg>
                <span className={styles.textStyles}>{productName}</span>
            </nav>
        </>
    );
};
