import './globals.scss';
import type { Metadata } from 'next';
import LabGrotesque from 'next/font/local';
export const metadata: Metadata = {
    title: 'Inverse Маркет',
    description:
        'Сервис для оптимизации взаимодействия сотрудника с компанией, предоставляющей услуги корпоративного питания',
};

const Lab_Grotesque = LabGrotesque({
    src: [
        {
            path: '../../public/fonts/LabGrotesque-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/LabGrotesque-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/LabGrotesque-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body className={Lab_Grotesque.className}>{children}</body>
        </html>
    );
}
