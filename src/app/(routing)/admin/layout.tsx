import PrivateRoute from '@/shared/authBlock/privateRouter';
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PrivateRoute>
                <main style={{ width: '100%' }}>{children}</main>
            </PrivateRoute>
        </>
    );
}
