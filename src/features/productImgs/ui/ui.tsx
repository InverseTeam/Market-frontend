'use client';

import styles from './ui.module.scss';
import { ProductSmallImg } from '@/entities/productInfo/productSmallImg';
import { ProductBigImg } from '@/entities/productInfo/productBigImg';
import Photo from '../../../../public/img/loaderLogo.png';
import Photo2 from '../../../../public/prod.png';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { useState } from 'react';
export const ProductImgs = () => {
    const [selectedImg, setSelectedImg] = useState<string | StaticImport>(Photo);

    const handleSmallImgClick = (newImg: string | StaticImport) => {
        setSelectedImg(newImg);
    };

    return (
        <>
            <section className={styles.layout}>
                <span className={styles.smallImgPosition}>
                    <ProductSmallImg
                        img={Photo}
                        onClick={handleSmallImgClick}
                        choose={selectedImg === Photo}
                    />
                    <ProductSmallImg
                        img={Photo2}
                        onClick={handleSmallImgClick}
                        choose={selectedImg === Photo2}
                    />
                </span>
                <span className={styles.bigImgStyles}>
                    <ProductBigImg newImg={selectedImg} defaultImg={Photo} />
                </span>
            </section>
        </>
    );
};
