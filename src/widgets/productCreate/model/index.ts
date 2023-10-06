import { instanceLogged } from '@/shared/api/axios';

export const GetShop = async () => {
    try {
        const getEvent: any = await instanceLogged.get('/products/shops/');
        return getEvent.data[0].id;
    } catch (error) {
        return error;
    }
};

export async function findUserCategory(userCategory: string): Promise<string | null> {
    try {
        const response = await await instanceLogged.get('/products/categories/');
        const allCategories = response.data;
        for (const category of allCategories) {
            if (category.name === userCategory) {
                return category.id;
            }
        }
        return null;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        return null;
    }
}

export const UpdateProductCover = async (productId: string, newCover: any) => {
    try {
        const formData = new FormData();
        formData.append('cover', newCover);
        const response = await instanceLogged.put(`/product/${productId}`, formData);

        return response.data;
    } catch (error) {
        return error;
    }
};
