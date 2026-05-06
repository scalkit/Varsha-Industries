import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import {
    getLifeSciencesCategoryBySlug,
    getLifeSciencesProductsByCategory,
    lifeSciencesCategories,
} from '@/lib/products';

type PageProps = {
    params: Promise<{ category: string }>;
};

export function generateStaticParams() {
    return lifeSciencesCategories.map((category) => ({ category: category.id }));
}

export default async function LifeSciencesCategoryPage({ params }: PageProps) {
    const { category: categorySlug } = await params;
    const category = getLifeSciencesCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    const products = getLifeSciencesProductsByCategory(categorySlug);
    const isBottlesAndCarboys = categorySlug === 'bottles-and-carboys';

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-warm/30 pt-28 pb-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/products#life-sciences" className="hover:text-primary transition-colors">Life Sciences</Link>
                        <ChevronRight className="w-3 h-3 text-primary/30" />
                        <span className="text-secondary">{category.title}</span>
                    </div>

                    <Link href="/products#life-sciences" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Life Sciences
                    </Link>

                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-3">
                            {category.listingTitle || category.title}
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            {category.listingDescription || category.description}
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-6 text-sm font-bold text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide pr-4">
                        <span className="text-gray-400 font-normal mr-2 flex-shrink-0">Refine:</span>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors flex-shrink-0">
                            CAPACITY <ChevronDown className="w-3 h-3" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors flex-shrink-0">
                            MATERIAL <ChevronDown className="w-3 h-3" />
                        </button>
                        <button className="flex items-center gap-1 hover:text-primary transition-colors flex-shrink-0">
                            PACK SIZE <ChevronDown className="w-3 h-3" />
                        </button>
                    </div>
                    <div className="hidden md:block text-sm text-gray-400 flex-shrink-0 ml-4">
                        Showing {products.length} of {products.length} products
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${isBottlesAndCarboys ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-x-8 gap-y-12`}>
                    {products.map((product, index) => (
                        <ScrollReveal key={product.slug} delay={index % (isBottlesAndCarboys ? 3 : 4) * 0.1} width="100%">
                            <Link
                                href={`/products/life-sciences/${categorySlug}/${product.slug}`}
                                className="group block cursor-pointer"
                            >
                                <div className="aspect-[4/5] bg-warm/20 rounded-lg overflow-hidden mb-6 relative hover:shadow-lg transition-all duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-colors duration-500">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className={`${isBottlesAndCarboys ? 'w-full h-full object-contain p-5 sm:p-6' : 'w-full h-full object-cover'} group-hover:scale-105 transition-transform duration-700`}
                                            />
                                        ) : (
                                            <span className="font-heading text-6xl text-gray-200 group-hover:scale-110 transition-transform duration-700 select-none">
                                                {category.title.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="text-center space-y-1">
                                    <h3 className="font-heading text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
