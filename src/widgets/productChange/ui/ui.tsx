'use client';

import { ProductImgs } from '@/features/productImgs';
import styles from './ui.module.scss';
import { useState } from 'react';
import { ProductInfoHeader } from '@/entities/productInfo/header';
import { ProductTitle } from '@/entities/productInfo/productTitle';
import { ProductCaloriesStat } from '@/entities/productInfo/productCaloriesStat';
import { ProductDescription } from '@/entities/productInfo/productDescription';
import { SaleToggle } from '@/entities/productInfo/saleToggle';

export const ProductChangePage = ({ isPageChange = true }: { isPageChange?: boolean }) => {
    const [isChange, setIsChange] = useState<boolean>(isPageChange);

    return (
        <>
            <div className={styles.widgetLayout}>
                <header>
                    <ProductInfoHeader
                        productType="В продаже"
                        productCategory="Завтраки и бранчи"
                        productName="Завтрак с красной рыбой и авокадо “Из лавки”"
                    />
                </header>
                <div className={styles.product_wrap}>
                    <span className={styles.imgBlockLayout}>
                        <ProductImgs isChange />
                    </span>
                    <span className={styles.productInfoLayout}>
                        <ProductTitle
                            isChange={isChange}
                            title="Завтрак с красной рыбой и авокадо “Из Лавки”"
                        />
                        <SaleToggle />
                        <ProductCaloriesStat
                            kcal="217.84"
                            squirrels="8.3"
                            fats="14.91"
                            carbohydrates="12.6"
                            isChange={isChange}
                        />
                        <ProductDescription
                            isChange={isChange}
                            weight="260 г."
                            storageConditions="1 день, от +2 °C до +4 °C"
                            compound="Форель радужная, соль морская, соль, экстракт розмарина, авокадо, хлеб (мука пшеничная хлебопекарная высшего сорта, вода, отруби пшеничные, жир растительный, сахар, улучшитель хлебопекарный (эмульгатор (моно- и диглицериды жирных кислот), консервант – пропионат кальция, мука пшеничная хлебопекарная, мука соевая, ферменты, антиокислитель – кислота аскорбиновая), клейковина пшеничная сухая, дрожжи), сыр творожный (творог (молоко, сливки, бактериальная закваска молочнокислых микроорганизмов, молокосвертывающий фермент микробного происхождения), сыворотка молочная сухая, соль, молочный белок, регулятор кислотности лимонная кислота, вода питьевая), томаты черри."
                            description="Лёгкий завтрак, богатый жирами и белками. Слабосолёный лосось и кубики авокадо с поджаренными до хруста ломтиками хлеба и творожным сыром. Это блюдо повара готовят на кухне Лавки прямо перед отправкой заказа."
                        />
                    </span>
                </div>
            </div>
        </>
    );
};
