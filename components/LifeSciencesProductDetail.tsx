'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
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
import ScrollReveal from '@/components/ScrollReveal';
import SizeChartModal from '@/components/SizeChartModal';
import { LifeSciencesCategory, LifeSciencesProduct } from '@/lib/products';

type LifeSciencesProductDetailProps = {
    category: LifeSciencesCategory;
    product: LifeSciencesProduct;
};

export default function LifeSciencesProductDetail({ category, product }: LifeSciencesProductDetailProps) {
    const images = product.images && product.images.length > 0
        ? product.images
        : [product.image, product.image, product.image, product.image];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

    const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-white pt-28 pb-6 border-b border-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRightIcon className="w-3 h-3" />
                        <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                        <ChevronRightIcon className="w-3 h-3" />
                        <Link href="/products#life-sciences" className="hover:text-primary transition-colors">Life Sciences</Link>
                        <ChevronRightIcon className="w-3 h-3" />
                        <Link href={`/products/life-sciences/${category.id}`} className="hover:text-primary transition-colors">{category.title}</Link>
                        <ChevronRightIcon className="w-3 h-3 text-primary/30" />
                        <span className="text-secondary">{product.name}</span>
                    </div>

                    <Link
                        href={`/products/life-sciences/${category.id}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to {category.title}
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                    <div className="w-full lg:w-3/5 space-y-5">
                        <ScrollReveal width="100%" direction="left">
                            <div className="bg-[#E8F1ED] rounded-3xl p-6 md:p-8 relative aspect-square md:aspect-auto md:h-[455px] flex items-center justify-center overflow-hidden group">
                                <div className="relative w-full h-full max-w-[380px] bg-white/40 rounded-2xl flex items-center justify-center shadow-inner">
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

                                <button onClick={handlePrev} className="absolute left-6 p-4 bg-white/90 hover:bg-primary hover:text-white rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                                    <ChevronLeft className="w-7 h-7" />
                                </button>
                                <button onClick={handleNext} className="absolute right-6 p-4 bg-white/90 hover:bg-primary hover:text-white rounded-full shadow-xl transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0">
                                    <ChevronRight className="w-7 h-7" />
                                </button>

                                <div className="absolute bottom-10 right-10 text-secondary/20 font-heading text-4xl font-bold italic">
                                    {currentImageIndex + 1}/{images.length}
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="flex gap-4 justify-center md:justify-start overflow-x-auto pb-4 scrollbar-hide">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative flex-shrink-0 w-18 h-18 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 transition-all p-1.5 ${currentImageIndex === idx ? 'border-primary bg-primary/5 shadow-lg' : 'border-gray-100 hover:border-primary/40 bg-gray-50'
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

                    <div className="w-full lg:w-2/5 space-y-7">
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
                                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary tracking-tight leading-tight">
                                        {product.name}
                                    </h1>
                                    <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">
                                        Item Code: {product.itemCode}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-primary text-xl">★</span>)}
                                    </div>
                                    <span className="text-gray-400 text-sm font-bold ml-2">(4.9/5 • 12 Reviews)</span>
                                </div>

                                <p className="text-gray-600 text-base leading-7 border-l-4 border-accent pl-6 py-2 italic bg-accent/5 rounded-r-lg">
                                    {product.description}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal width="100%" direction="up" delay={0.4}>
                            <div className="grid grid-cols-2 gap-6 py-7 border-y border-gray-100">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Beaker className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Material</p>
                                            <p className="text-sm font-extrabold text-secondary">{product.material}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Thermometer className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Temperature</p>
                                            <p className="text-sm font-extrabold text-secondary">{product.temperature}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sterility</p>
                                            <p className="text-sm font-extrabold text-secondary">{product.sterility}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-warm flex items-center justify-center text-primary border border-primary/10 shadow-sm">
                                            <Ruler className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Compliance</p>
                                            <p className="text-sm font-extrabold text-secondary">{product.compliance}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal width="100%" direction="up" delay={0.6}>
                            <div className="space-y-4 pt-0">
                                <div className="flex flex-col gap-4">
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

            <SizeChartModal
                isOpen={isSizeChartOpen}
                onClose={() => setIsSizeChartOpen(false)}
                productName={product.name}
                rows={product.sizeChart}
            />
        </div>
    );
}
