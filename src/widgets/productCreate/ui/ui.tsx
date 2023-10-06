'use client';
import qs from 'qs';
import styles from './ui.module.scss';
import { useEffect, useState } from 'react';
import { ProductTitle } from '@/entities/productInfo/productTitle';
import { ProductCaloriesStat } from '@/entities/productInfo/productCaloriesStat';
import { ProductDescription } from '@/entities/productInfo/productDescription';
import { SaleToggle } from '@/entities/productInfo/saleToggle';
import { ProductQuantity } from '@/entities/productInfo/productQuantity';
import { ProductCategory } from '@/entities/productInfo/productCategory';
import { CreateImg } from '@/features/createImg';
import { ProductPrice } from '@/entities/productInfo/productPrice';
import { GetShop, findUserCategory } from '../model';
import { instanceLogged } from '@/shared/api/axios';
export const ProductCreatePage = ({ isPageChange = true }: { isPageChange?: boolean }) => {
    const [isChange, setIsChange] = useState<boolean>(isPageChange);
    const [productCover, setProductCover] = useState<File | null>(null);
    const [productTitle, setProductTitle] = useState<string>();
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
    useEffect(() => {
        if (checkParams) {
            setBtnDisabled(false);
        } else setBtnDisabled(true);
    }, [checkParams]);

    const CreateProduct = async () => {
        try {
            const shopID = await GetShop();
            const category = await findUserCategory(productCategory!);
            if (!productCover) return;
            const formData = new FormData();
            formData.append('cover', productCover);
            const POST_DATA = {
                name: productTitle,
                description: description,
                category: category,
                shop: shopID,
                calories: kcal,
                protein: squirrels,
                fats: fats,
                carbohydrates: carbohydrates,
                weight: weight,
                start_price: startPrice,
                current_price: currentPrice,
                amount: quantity,
                compound: compound,
                expiration: storageConditions,
            };
            const response = await instanceLogged.post(
                '/products/create/',
                qs.stringify(POST_DATA),
            );

            await instanceLogged.patch(`/products/${response.data.id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            return error;
        }
    };

    return (
        <>
            <div className={styles.widgetLayout}>
                <div className={styles.product_wrap}>
                    <span className={styles.imgBlockLayout}>
                        <CreateImg
                            onClick={CreateProduct}
                            btnDisabled={btnDisabled}
                            setFile={setProductCover}
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
