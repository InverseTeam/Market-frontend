import { instanceLogged } from '@/shared/api/axios';

export const Get = async (id: number) => {
    try {
        const getOrder: any = await instanceLogged.get(`/orders/${id}/`);
        return getOrder.data;
    } catch (error) {
        return error;
    }
};
