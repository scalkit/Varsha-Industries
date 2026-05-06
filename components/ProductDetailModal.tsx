"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, ChevronLeft, ChevronRight, Beaker, Ruler, Shield, Thermometer } from 'lucide-react';
import { Product } from '@/lib/products';
import Image from 'next/image';

interface ProductDetailModalProps {
    product: Product | null;
    onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) return null;

    const images = product.images && product.images.length > 0
        ? product.images
        : [null, null, null, null]; // Placeholders

    const handleNext = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const handlePrev = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-secondary/90 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur rounded-full text-secondary hover:bg-primary hover:text-white transition-all shadow-md group"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                    </button>

                    {/* Left Side: Image Gallery */}
                    <div className="w-full md:w-[60%] bg-[#E8F1ED] relative flex flex-col p-6 md:p-12 overflow-hidden">
                        <div className="flex-grow flex items-center justify-center relative group">
                            {/* Current Image */}
                            <div className="relative w-full aspect-square max-w-[400px] bg-white/40 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
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
                                        <span className="font-heading text-8xl md:text-[10rem] text-secondary/30 select-none">
                                            {product.name.charAt(0)}
                                        </span>
                                        <p className="text-secondary/40 font-bold tracking-widest mt-4 uppercase text-sm">Product View {currentImageIndex + 1}</p>
                                    </div>
                                )}

                                <button className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded transition-colors">
                                    <Maximize2 className="w-4 h-4 text-secondary" />
                                </button>
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-0 md:-left-4 p-3 bg-white/80 hover:bg-primary hover:text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-0 md:-right-4 p-3 bg-white/80 hover:bg-primary hover:text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex justify-center gap-4 mt-8">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all p-1 bg-white/50 ${currentImageIndex === idx ? 'border-primary ring-4 ring-primary/10' : 'border-transparent hover:border-primary/50'
                                        }`}
                                >
                                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-secondary/20 font-bold text-xl overflow-hidden">
                                        {img ? (
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                        ) : (
                                            product.name.charAt(0)
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="absolute bottom-6 right-10 text-secondary/30 font-bold tracking-widest text-lg">
                            {currentImageIndex + 1}/{images.length}
                        </div>
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="w-full md:w-[40%] p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">
                                {product.category.replace(/-/g, ' ')}
                            </h3>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary leading-tight">
                                {product.name}
                            </h2>
                            <div className="flex gap-1 mt-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s} className="text-primary text-xl">★</span>
                                ))}
                                <span className="text-gray-400 text-sm ml-2 self-center">(5.0)</span>
                                <button className="text-primary text-sm font-bold ml-4 underline self-center">Write a review</button>
                            </div>
                        </div>

                        <div className="space-y-10">
                            {/* Material / Format */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Material / Format</h4>
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center gap-2 group cursor-pointer">
                                        <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5">
                                            <Beaker className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-[10px] font-bold text-secondary uppercase text-center max-w-[80px]">
                                            {product.material || 'Polypropylene'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Capacity / Size */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select Capacity</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['10ml', '25ml', '50ml', '100ml'].map((cap) => (
                                        <button
                                            key={cap}
                                            className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${product.capacity === cap || (cap === '50ml' && !product.capacity)
                                                ? 'bg-primary/10 text-primary border-2 border-primary'
                                                : 'bg-gray-50 text-gray-400 border-2 border-transparent hover:border-gray-200'
                                                }`}
                                        >
                                            {cap}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Specs Grid */}
                            <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-gray-100 pt-10">
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Thermometer className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">Temp. Range</p>
                                        <p className="text-sm font-bold text-secondary">-40°C to 121°C</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">Sterility</p>
                                        <p className="text-sm font-bold text-secondary">Non-Cytotoxic</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <Ruler className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">Certifications</p>
                                        <p className="text-sm font-bold text-secondary">ISO 13485</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <span className="font-bold text-primary text-xs">A</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">Autoclavability</p>
                                        <p className="text-sm font-bold text-secondary">Fully Autoclavable</p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-6">
                                <button className="w-full py-4 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group">
                                    View Size Chart
                                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
