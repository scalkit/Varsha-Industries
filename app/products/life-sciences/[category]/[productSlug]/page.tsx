import { notFound } from 'next/navigation';
import LifeSciencesProductDetail from '@/components/LifeSciencesProductDetail';
import {
    getLifeSciencesCategoryBySlug,
    getLifeSciencesProductBySlug,
    lifeSciencesProducts,
} from '@/lib/products';

type PageProps = {
    params: Promise<{ category: string; productSlug: string }>;
};

export function generateStaticParams() {
    return lifeSciencesProducts.map((product) => ({
        category: product.category,
        productSlug: product.slug,
    }));
}

export default async function LifeSciencesProductPage({ params }: PageProps) {
    const { category: categorySlug, productSlug } = await params;
    const category = getLifeSciencesCategoryBySlug(categorySlug);
    const product = getLifeSciencesProductBySlug(categorySlug, productSlug);

    if (!category || !product) {
        notFound();
    }

    return <LifeSciencesProductDetail category={category} product={product} />;
}
