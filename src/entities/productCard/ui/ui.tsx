'use client';

import styles from './ui.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Get } from '../model';
import { ProductCardSkeleton } from '../skeleton';
import { useRouter } from 'next/navigation';
type ProductType = {
    id: number;
    name: string;
    thumbnailUrl: any;
};

export const ProductCard = () => {
    const [productData, setProductData] = useState<ProductType[] | null>(null);
    const router = useRouter();
    useEffect(() => {
        const getEvent = async () => {
            const fetchEvent: any = await Get();
            setProductData(fetchEvent);
        };
        getEvent();
    }, []);

    const skeletonMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <section className={styles.layout}>
                <ul className={styles.list}>
                    {productData
                        ? productData.map((el: any) => (
                              <article
                                  onClick={() => router.push(`/admin/sale/${el.id}`)}
                                  key={el.id}
                                  className={styles.card}>
                                  <Image
                                      className={styles.img}
                                      src={el.thumbnailUrl}
                                      width={130}
                                      height={130}
                                      alt="ProductCard"
                                  />
                                  <dl
                                      style={{
                                          display: 'flex',
                                          flexDirection: 'column',
                                          gap: '4px',
                                      }}>
                                      <span className={styles.prodInfo_position}>
                                          <dd className={styles.info}>
                                              <span className={styles.price}>369 руб.</span>
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="4"
                                                  height="4"
                                                  viewBox="0 0 4 4"
                                                  fill="none">
                                                  <circle cx="2" cy="2" r="2" fill="#E6D1BF" />
                                              </svg>
                                              <span className={styles.quantity}>230 шт</span>
                                          </dd>
                                      </span>
                                      <h4 className={styles.prod_title}>{el.title}</h4>
                                  </dl>
                                  <button
                                      className={styles.btnChange}
                                      onClick={() => router.push(`/admin/sale/${el.id}`)}>
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                          fill="none">
                                          <path
                                              d="M10.3105 15.3322H15.75"
                                              stroke="white"
                                              stroke-width="1.3"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                          />
                                          <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M9.58501 2.84609C10.1667 2.15084 11.2125 2.04889 11.9222 2.6188C11.9614 2.64972 13.2221 3.62909 13.2221 3.62909C14.0017 4.10039 14.244 5.10233 13.762 5.86694C13.7365 5.90789 6.60896 14.8234 6.60896 14.8234C6.37183 15.1192 6.01187 15.2938 5.62718 15.298L2.89765 15.3323L2.28265 12.7292C2.1965 12.3632 2.28265 11.9788 2.51978 11.683L9.58501 2.84609Z"
                                              stroke="white"
                                              stroke-width="1.3"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                          />
                                          <path
                                              d="M8.26562 4.50067L12.3548 7.64102"
                                              stroke="white"
                                              stroke-width="1.3"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                          />
                                      </svg>
                                      Редактировать
                                  </button>
                              </article>
                          ))
                        : skeletonMap.map((index) => <ProductCardSkeleton key={index} />)}
                </ul>
            </section>
        </>
    );
};
