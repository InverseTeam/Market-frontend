import styles from './ui.module.scss';
import { FC } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import DefImg from '../../../../../public/productDefaultImgState/defHoverImg.svg';
export interface ProductBigImgProps {
    newImg?: string | StaticImport | undefined;
}

export const ProductBigImg: FC<ProductBigImgProps> = ({ newImg }) => {
    return (
        <>
            <article className={styles.cardStyle}>
                <Image
                    src={newImg ? newImg : DefImg}
                    width={400}
                    height={400}
                    alt="MainProductPhoto"
                />
            </article>
        </>
    );
};
