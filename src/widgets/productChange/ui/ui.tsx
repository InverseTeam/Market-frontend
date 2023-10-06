'use client';

import { ProductImgs } from '@/features/productImgs';
import styles from './ui.module.scss';
import { useState, useEffect } from 'react';
import { ProductInfoHeader } from '@/entities/productInfo/header';
import { ProductTitle } from '@/entities/productInfo/productTitle';
import { ProductCaloriesStat } from '@/entities/productInfo/productCaloriesStat';
import { ProductDescription } from '@/entities/productInfo/productDescription';
import { SaleToggle } from '@/entities/productInfo/saleToggle';
import { ProductTypes } from '@/shared/interface';
import { GetProduct } from '../model';
import { ProductCategory } from '@/entities/productInfo/productCategory';
import { ProductPrice } from '@/entities/productInfo/productPrice';
import { ProductQuantity } from '@/entities/productInfo/productQuantity';

export const ProductChangePage = ({
    isPageChange = true,
    params,
}: {
    isPageChange?: boolean;
    params: { id: number };
}) => {
    const [isChange, setIsChange] = useState<boolean>(isPageChange);
    const productID = params?.id;
    const [productData, setProductData] = useState<ProductTypes | null>(null);
    const [productCover, setProductCover] = useState<string>();
    const [productTitle, setProductTitle] = useState<string>('');
    const [productCategory, setProductCategory] = useState<string>();
    const [startPrice, setStartPrice] = useState<string>();
    const [currentPrice, setCurrentPrice] = useState<string>();
    const [isOnSale, setIsOnSale] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<string>();
    const [kcal, setKcal] = useState<string>();
    const [fats, setFats] = useState<string>();
    const [squirrels, setSquirrels] = useState<string>();
    const [carbohydrates, setCarbohydrates] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [compound, setCompound] = useState<string>();
    const [weight, setWeight] = useState<string>();
    const [storageConditions, setStorageConditions] = useState<string>();
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
    const [shop, setShop] = useState<string>();
    const imgURL = 'https://market.inverse-team.store';
    useEffect(() => {
        const getProduct = async () => {
            const fetchEvent: ProductTypes = await GetProduct(productID);
            setProductData(fetchEvent);
        };
        getProduct();
    }, []);

    useEffect(() => {
        if (productData) {
            setProductTitle(productData.name || '');

            setProductCategory(productData.category.name || '');

            setStartPrice(productData.start_price || '');

            setCurrentPrice(productData.current_price || '');

            setIsOnSale(true || false);

            setQuantity(productData.amount || '');

            setKcal(productData.calories || '');

            setFats(productData.fats || '');

            setSquirrels(productData.protein || '');

            setCarbohydrates(productData.carbohydrates || '');

            setDescription(productData.description || '');

            setCompound(productData.compound || '');

            setWeight(productData.weight || '');

            setStorageConditions(productData.expiration || 'Отсутствует');

            setProductCover(imgURL + productData.cover || 'Отсутствует');
        }
    }, [productData]);

    const checkParams =
        productCover &&
        productTitle &&
        productCategory &&
        startPrice &&
        currentPrice &&
        isChange &&
        quantity &&
        kcal &&
        fats &&
        squirrels &&
        carbohydrates &&
        description &&
        compound &&
        weight &&
        storageConditions;

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
                        <ProductImgs
                            pageID={productID}
                            img={productCover}
                            setURLImg={setProductCover}
                            isChange
                        />
                    </span>
                    <span className={styles.productInfoLayout}>
                        <ProductTitle
                            setTitle={setProductTitle}
                            title={productTitle}
                            isChange={isChange}
                        />
                        <ProductCategory
                            productCategory={productCategory}
                            setProductCategory={setProductCategory}
                        />
                        <ProductPrice
                            startPrice={startPrice}
                            setStartPrice={setStartPrice}
                            currentPrice={currentPrice}
                            setCurrentPrice={setCurrentPrice}
                        />
                        <SaleToggle onValueChange={setIsOnSale} checked={isOnSale} />
                        <ProductQuantity setQuantity={setQuantity} quantity={quantity} />
                        <ProductCaloriesStat
                            setFats={setFats}
                            setSquirrels={setSquirrels}
                            carbohydrates={carbohydrates}
                            setCarbohydrates={setCarbohydrates}
                            squirrels={squirrels}
                            kcal={kcal}
                            setKcal={setKcal}
                            fats={fats}
                            isChange={isChange}
                        />
                        <ProductDescription
                            description={description}
                            compound={compound}
                            setCompound={setCompound}
                            weight={weight}
                            setWeight={setWeight}
                            storageConditions={storageConditions}
                            setStorageConditions={setStorageConditions}
                            setDescription={setDescription}
                            isChange={isChange}
                        />
                    </span>
                </div>
            </div>
        </>
    );
};
