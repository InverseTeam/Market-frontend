import { NavBarElementProps } from '@/entities/header/navBarElement';
import Goods from '../../../../public/globalIcons/goods.svg';
import Stat from '../../../../public/globalIcons/statistics.svg';
import User from '../../../../public/globalIcons/user.svg';
import Bag from '../../../../public/globalIcons/bag.svg';
export const middleSectionElements: NavBarElementProps[] = [
    {
        id: 0,
        title: 'Товары',
        link: '/admin',
        icon: Goods,
        elements: [
            {
                id: 0,
                title: 'Новый товар',
                link: '/admin/create',
            },
            {
                id: 1,
                title: 'В продаже',
                link: '/admin/sale',
            },
            {
                id: 2,
                title: 'Сняты с продажи',
                link: '/',
            },
            {
                id: 3,
                title: 'Подборки',
                link: '/',
            },
        ],
    },
    {
        id: 1,
        title: 'Статистика',
        link: '/',
        icon: Stat,
    },
    {
        id: 2,
        title: 'Заказы',
        link: '/admin/orders',
        icon: Bag,
    },
];

export const lastSectionElements: NavBarElementProps[] = [
    {
        id: 4,
        title: 'Дмитрий Степанов',
        link: '/',
        icon: User,
    },
];
