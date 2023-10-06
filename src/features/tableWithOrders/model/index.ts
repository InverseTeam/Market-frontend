import { instanceLogged } from '@/shared/api/axios';

export const Get = async () => {
    try {
        const getOrder: any = await instanceLogged.get('/orders/my/');
        return getOrder.data;
    } catch (error) {
        return error;
    }
};
