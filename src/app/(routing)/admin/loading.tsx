import { LoadingSpinner } from '@/shared/loader';

export default function Loading() {
    const PageStyle = {
        backgroundColor: '#FFFDFB',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <section style={PageStyle}>
            <LoadingSpinner />
        </section>
    );
}
