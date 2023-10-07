export const selectItems: string[] = [
    'Завтраки и бранчи',
    'Закуски',
    'Салаты',
    'Супы',
    'Горячие блюда',
    'Десерты',
    'Напитки',
];

import { instanceLogged } from '@/shared/api/axios';
import { ProductCategory } from '@/shared/interface';

export const Get = async () => {
    try {
        const getEvent: any = await instanceLogged.get('/products/categories/');
        return getEvent.data;
    } catch (error) {
        return error;
    }
};

export const GetCategoryNames = async () => {
    try {
        const categories = await Get();
        let categoryNames;
        if (Array.isArray(categories)) {
            categoryNames = categories.map((category: ProductCategory) => category.name);
        } else if (typeof categories === 'object') {
            categoryNames = categories.name;
        }
        return categoryNames;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
