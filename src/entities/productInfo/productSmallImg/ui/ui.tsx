import styles from './ui.module.scss';
import { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
export interface ProductSmallImgProps {
    img: string | StaticImport;
    choose?: boolean;
    onClick?: (img: string | StaticImport) => void | undefined;
}

export const ProductSmallImg: FC<ProductSmallImgProps> = ({ img, choose = false, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick(img);
        }
    };
    return (
        <>
            <article
                onClick={handleClick}
                style={{ border: choose ? '2px solid #FFAC4D' : '2px solid rgba(0, 0, 0, 0.08)' }}
                className={styles.cardStyle}>
                <Image src={img} width={100} height={100} alt="ProductPhotos" />
            </article>
        </>
    );
};
