import './globals.scss';
import type { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Inverse Маркет',
    description:
        'Сервис для оптимизации взаимодействия сотрудника с компанией, предоставляющей услуги корпоративного питания',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
