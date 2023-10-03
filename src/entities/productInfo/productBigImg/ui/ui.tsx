import styles from './ui.module.scss';
import { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
export interface ProductBigImgProps {
    newImg?: string | StaticImport | undefined;
    defaultImg: string | StaticImport;
}

export const ProductBigImg: FC<ProductBigImgProps> = ({ newImg, defaultImg }) => {
    return (
        <>
            <article className={styles.cardStyle}>
                <Image
                    src={newImg ? newImg : defaultImg}
                    width={400}
                    height={400}
                    alt="MainProductPhoto"
                />
            </article>
        </>
    );
};
