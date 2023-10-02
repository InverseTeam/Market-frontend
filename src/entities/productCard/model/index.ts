import { instanceLogged } from '@/shared/api/axios';

export const Get = async () => {
    try {
        const getEvent: any = await fetch(`https://market.inverse-team.store/api/users/by?id=1`);
        const data = await getEvent.json();
        //instanceLogged.get('events/not_published/');
        return data;
    } catch (error) {
        return error;
    }
};
