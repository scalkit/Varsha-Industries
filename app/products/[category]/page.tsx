"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, Filter } from 'lucide-react';
import { getCategoryBySlug, getProductsByCategory, Product } from '@/lib/products';
import ScrollReveal from '@/components/ScrollReveal';

export default function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const categorySlug = params.category as string;

    // State
    const [visibleCount, setVisibleCount] = useState(8);
    const [category, setCategory] = useState<any>(null);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (categorySlug) {
            const cat = getCategoryBySlug(categorySlug);
            if (!cat) {
                // Handle 404 or redirect ideally, for now just return
                return;
            }
            setCategory(cat);
            setProducts(getProductsByCategory(categorySlug));
        }
    }, [categorySlug]);

    if (!category) {
        return <div className="min-h-screen bg-white flex items-center justify-center">Loading...</div>;
    }

    const visibleProducts = products.slice(0, visibleCount);
    const hasMore = visibleCount < products.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 8);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-warm/30 pt-28 pb-12 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Back to Categories
                    </Link>
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-3">
                            {category.title}
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            {category.description}
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            {/* Filter Bar (Visual Interpretation of Starbucks) */}
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
                        Showing {visibleProducts.length} of {products.length} products
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {visibleProducts.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index % 4 * 0.1} width="100%">
                            <Link
                                href={`/products/${categorySlug}/${product.id}`}
                                className="group block cursor-pointer"
                            >
                                {/* Image Container with Premium Zoom Effect */}
                                <div className="aspect-[4/5] bg-warm/20 rounded-lg overflow-hidden mb-6 relative hover:shadow-lg transition-all duration-500">
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-colors duration-500">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        ) : (
                                            <span className="font-heading text-6xl text-gray-200 group-hover:scale-110 transition-transform duration-700 select-none">
                                                {category.title.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Product Info centered */}
                                <div className="text-center space-y-1">
                                    <h3 className="font-heading text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-white border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div >
    );
}
