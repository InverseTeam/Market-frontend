import { NavBarDesktop } from '@/features/header';
import PrivateRoute from '@/shared/authBlock/privateRouter';
import { Suspense } from 'react';
import Loading from './loading';
import { PageSale } from '@/widgets/onSale';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PrivateRoute>
                <div>
                    <NavBarDesktop />
                    <div
                        style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Suspense fallback={<Loading />}>
                            <main style={{ width: '100%', height: '100vh' }}>{children}</main>
                        </Suspense>
                    </div>
                </div>
            </PrivateRoute>
        </>
    );
}
