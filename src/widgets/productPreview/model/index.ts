import { instanceLogged } from '@/shared/api/axios';

export const GetProduct = async (id: number) => {
    try {
        const getEvent: any = await instanceLogged.get(`/products/${id}/`);
        return getEvent.data;
    } catch (error) {
        return error;
    }
};
