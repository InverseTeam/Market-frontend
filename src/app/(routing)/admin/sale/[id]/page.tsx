import { ProductPreviewPage } from '@/widgets/productPreview';

export default function Page({ params }: { params: { id: number } }) {
    return (
        <>
            <ProductPreviewPage params={params} />
        </>
    );
}
