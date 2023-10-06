import { ProductChangePage } from '@/widgets/productChange';

export default function Page({ params }: { params: { id: number } }) {
    return (
        <>
            <ProductChangePage isPageChange params={params} />
        </>
    );
}
