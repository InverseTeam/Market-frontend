import { instanceLogged } from '@/shared/api/axios';
import { ProductCategory } from '@/shared/interface';

export const GetCateGory = async () => {
    try {
        const getEvent: any = await instanceLogged.get('/products/categories/');
        return getEvent.data;
    } catch (error) {
        return error;
    }
};

export const GetProducts = async (categoryID?: number) => {
    try {
        const getEvent: any = await instanceLogged.get(`/products/`);
        return getEvent.data;
    } catch (error) {
        return error;
    }
};

export const FetchProductData = async () => {
    try {
        const categories = await GetCateGory();
        const productsPromises = categories.map(async (category: ProductCategory) => {
            const productsForCategory = await GetProducts(category.id);
            return { category, products: productsForCategory };
        });

        const productsByCategory = await Promise.all(productsPromises);
        return productsByCategory;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
