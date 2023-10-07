'use client';

import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { ProductTitle } from '@/entities/productInfo/productTitle';
import { ProductCaloriesStat } from '@/entities/productInfo/productCaloriesStat';
import { ProductDescription } from '@/entities/productInfo/productDescription';
import { GetProduct } from '../model';

import { ProductImgs } from '@/features/productImgs';
import { ProductTypes } from '@/shared/interface';
import { ProductInfoHeader } from '@/entities/productInfo/header';
const imgURL = 'https://market.inverse-team.store/';
export const ProductPreviewPage = ({ params }: { params: { id: number } }) => {
    const productID = params?.id;
    const [productData, setProductData] = useState<ProductTypes | null>(null);
    useEffect(() => {
        const getProduct = async () => {
            const fetchEvent: ProductTypes = await GetProduct(productID);
            setProductData(fetchEvent);
        };
        getProduct();
    }, []);

    return (
        <>
            <div className={styles.widgetLayout}>
                <header>
                    <ProductInfoHeader
                        productType="В продаже"
                        productCategory={productData?.category.name}
                        productName={productData?.name}
                    />
                </header>
                <div className={styles.product_wrap}>
                    <span className={styles.imgBlockLayout}>
                        <ProductImgs img={imgURL + productData?.cover} />
                    </span>
                    <span className={styles.productInfoLayout}>
                        <ProductTitle title={productData?.name} />
                        <ProductCaloriesStat
                            kcal={productData?.calories}
                            fats={productData?.fats}
                            squirrels={productData?.protein}
                            carbohydrates={productData?.carbohydrates}
                        />
                        <ProductDescription
                            storageConditions={
                                productData?.expiration ? productData?.expiration : 'Отсутствует'
                            }
                            weight={productData?.weight}
                            compound={productData?.compound}
                            description={productData?.description}
                        />
                    </span>
                </div>
            </div>
        </>
    );
};
