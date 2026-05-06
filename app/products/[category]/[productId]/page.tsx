"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    X,
    Maximize2,
    ChevronLeft,
    ChevronRight,
    Beaker,
    Ruler,
    Shield,
    Thermometer,
    ArrowLeft,
    ChevronRight as ChevronRightIcon,
    Share2,
    Heart
} from 'lucide-react';
import { getProductById, Product } from '@/lib/products';
import ScrollReveal from '@/components/ScrollReveal';
import SizeChartModal from '@/components/SizeChartModal';

export default function ProductDetailPage() {
    const params = useParams();
    const router = useRouter();
    const productId = params.productId as string;
    const categoryId = params.category as string;

    const [product, setProduct] = useState<Product | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

    useEffect(() => {
        if (productId) {
            const p = getProductById(productId);
            if (p) {
                setProduct(p);
            } else {
                // Product not found logic could go here
            }
        }
    }, [productId]);

    if (!product) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-secondary font-medium tracking-widest uppercase text-xs">Loading Product...</p>
                </div>
            </div>
        );
    }

    const images = product.images && product.images.length > 0
        ? product.images
        : [null, null, null, null];

    const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="bg-white min-h-screen">
            {/* Navigation / Breadcrumbs */}
            <div className="bg-white pt-28 pb-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRightIcon className="w-3 h-3" />
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <ChevronRightIcon className="w-3 h-3" />
                        <Link href={`/products/${categoryId}`} className="hover:text-primary transition-colors">{categoryId.replace(/-/g, ' ')}</Link>
                        <ChevronRightIcon className="w-3 h-3 text-primary/30" />
                        <span className="text-secondary">{product.name}</span>
                    </div>

                    <Link
                        href={`/products/${categoryId}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to {categoryId.replace(/-/g, ' ')}
                    </Link>
                </div>
            </div>

            {/* Main Product Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-16 md:gap-24">

                    {/* Left: Image Gallery */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        <ScrollReveal width="100%" direction="left">
                            <div className="bg-[#E8F1ED] rounded-3xl p-8 md:p-16 relative aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center overflow-hidden group">
                                {/* Large Preview */}
                                <div className="relative w-full h-full max-w-[500px] bg-white/40 rounded-2xl flex items-center justify-center shadow-inner">
                                    {images[currentImageIndex] ? (
                                        <div className="relative w-full h-full p-4">
                                            <img
                                                src={images[currentImageIndex]!}
                                                alt={product.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center">
                                            <span className="font-heading text-[10rem] md:text-[14rem] text-secondary/20 select-none">
                                                {product.name.charAt(0)}
                                            </span>
                                            <p className="text-secondary/30 font-bold tracking-[0.3em] uppercase text-xs">Perspective {currentImageIndex + 1}</p>
                                        </div>
                                    )}

                                    <button className="absolute top-6 right-6 p-3 bg-white/80 hover:bg-white rounded-full transition-all shadow-md">
                                        <Maximize2 className="w-5 h-5 text-secondary" />
                                    </button>
                                </div>

                                {/* Main Nav */}
                                <button onClick={handlePrev} className="absolute left-6 p-4 bg-white/90 hover:bg-primary hover:text-white rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                    <ChevronLeft className="w-7 h-7" />
                                </button>
                                <button onClick={handleNext} className="absolute right-6 p-4 bg-white/90 hover:bg-primary hover:text-white rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                                    <ChevronRight className="w-7 h-7" />
                                </button>

                                {/* Counter */}
                                <div className="absolute bottom-10 right-10 text-secondary/20 font-heading text-4xl font-bold italic">
                                    {currentImageIndex + 1}/{images.length}
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Thumbnails */}
                        <div className="flex gap-4 justify-center md:justify-start overflow-x-auto pb-4 scrollbar-hide">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 transition-all p-1.5 ${currentImageIndex === idx ? 'border-primary bg-primary/5 shadow-lg' : 'border-gray-100 hover:border-primary/40 bg-gray-50'
                                        }`}
                                >
                                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center text-secondary/10 font-heading text-2xl font-bold overflow-hidden">
                                        {img ? (
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                        ) : (
                                            product.name.charAt(0)
                                        )}
                                    </div>
                                    {currentImageIndex === idx && (
                                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Info */}
                    <div className="w-full lg:w-2/5 space-y-12">
                        <ScrollReveal width="100%" direction="right" delay={0.2}>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded">Precision Molded</span>
                                    <div className="h-px bg-gray-100 flex-grow"></div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></button>
                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Heart className="w-5 h-5" /></button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary tracking-tight leading-tight">
                                        {product.name}
                                    </h1>
                                    <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">
                                        Item Code: PLX-{product.id.toUpperCase()}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-primary text-xl">★</span>)}
                                    </div>
                                    <span className="text-gray-400 text-sm font-bold ml-2">(4.9/5 • 12 Reviews)</span>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-accent pl-6 py-2 italic bg-accent/5 rounded-r-lg">
                                    {product.description}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Specs Grid */}
                        <ScrollReveal width="100%" direction="up" delay={0.4}>
                            <div className="grid grid-cols-2 gap-8 py-10 border-y border-gray-100">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Beaker className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Material</p>
                                            <p className="text-sm font-extrabold text-secondary">{product.material || 'Polypropylene'}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Thermometer className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Temperature</p>
                                            <p className="text-sm font-extrabold text-secondary">-40°C to 121°C</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sterility</p>
                                            <p className="text-sm font-extrabold text-secondary">Non-Cytotoxic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Ruler className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Compliance</p>
                                            <p className="text-sm font-extrabold text-secondary">ISO 13485 / CE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* CTA Section */}
                        <ScrollReveal width="100%" direction="up" delay={0.6}>
                            <div className="space-y-6 pt-6">
                                <div className="flex flex-col gap-4">
                                    {/* Size Chart Button */}
                                    <button
                                        onClick={() => setIsSizeChartOpen(true)}
                                        className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 group overflow-hidden relative"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <Ruler className="w-5 h-5" />
                                            View Size Chart
                                        </span>
                                        <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-500 skew-x-12"></div>
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>

            {/* Size Chart Modal */}
            <SizeChartModal
                isOpen={isSizeChartOpen}
                onClose={() => setIsSizeChartOpen(false)}
                productName={product.name}
            />
        </div>
    );
}
