import { OrderPreview } from '@/widgets/orderPreview';

export default function Page({ params }: { params: { id: number } }) {
    return (
        <>
            <OrderPreview params={params} />
        </>
    );
}
