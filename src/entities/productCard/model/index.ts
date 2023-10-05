/*
export const Get = async () => {
    try {
        const getEvent: any = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`);
        const data = await getEvent.json();
        //instanceLogged.get('events/not_published/');
        return data;
    } catch (error) {
        return error;
    }
};
*/
import { instanceLogged } from '@/shared/api/axios';
import { ProductCategoryTypes } from '@/shared/interface';

export const GetCateGory = async () => {
    try {
        const getEvent: any = await instanceLogged.get('/products/categories/');
        return getEvent.data;
    } catch (error) {
        return error;
    }
};

export const GetProducts = async (categoryID: number) => {
    try {
        const getEvent: any = await instanceLogged.get(
            `/products/filter?categories=${categoryID}/`,
        );
        return getEvent.data;
    } catch (error) {
        return error;
    }
};

export const FetchProductData = async () => {
    try {
        const categories = await GetCateGory();
        const productsPromises = categories.map(async (category: ProductCategoryTypes) => {
            const productsForCategory = await GetProducts(category.id);
            return { category, products: productsForCategory };
        });
        console.log(productsPromises);
        const productsByCategory = await Promise.all(productsPromises);
        return productsByCategory;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
