'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { categories, lifeSciencesCategories } from '@/lib/products';

export default function ProductPreview() {
    const [activeSection, setActiveSection] = useState<'diagnostics' | 'life-sciences'>('diagnostics');

    const filteredCategories = activeSection === 'diagnostics'
        ? categories.filter(cat => cat.section === 'packaging').map(category => ({
            id: category.id,
            title: category.title,
            description: category.description,
            image: category.image,
            href: `/products/${category.id}`,
        }))
        : lifeSciencesCategories;

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-10">
                        <div className="flex-grow">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Products</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2 mb-8">
                                Comprehensive Product Range
                            </h2>

                            {/* Tab Switcher - Now below heading and shorter */}
                            <div className="flex bg-gray-100 p-1 rounded-full shadow-inner border border-black/5 w-fit">
                                <button
                                    onClick={() => setActiveSection('diagnostics')}
                                    className={`py-2 px-6 rounded-full text-sm font-bold transition-all duration-300 ${activeSection === 'diagnostics'
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-gray-500 hover:text-secondary'
                                        }`}
                                >
                                    Diagnostics
                                </button>
                                <button
                                    onClick={() => setActiveSection('life-sciences')}
                                    className={`py-2 px-6 rounded-full text-sm font-bold transition-all duration-300 ${activeSection === 'life-sciences'
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-gray-500 hover:text-secondary'
                                        }`}
                                >
                                    Life Sciences
                                </button>
                            </div>
                        </div>

                        <Link href="/products" className="hidden md:inline-flex font-medium text-primary hover:text-secondary mb-1 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-secondary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left flex-shrink-0">
                            View All Products &rarr;
                        </Link>
                    </div>
                </ScrollReveal>

                <div className={`flex flex-wrap ${activeSection === 'diagnostics' ? 'justify-center' : 'justify-start md:grid md:grid-cols-4'} gap-6 min-h-[400px]`}>
                    {filteredCategories.map((category, index) => (
                        <ScrollReveal
                            key={`${activeSection}-${category.id}`}
                            delay={index * 0.1}
                            width={activeSection === 'diagnostics' ? "fit-content" : "100%"}
                            className={`h-full ${activeSection === 'diagnostics' ? 'flex-1 min-w-[280px] max-w-[300px]' : ''}`}
                            direction="up"
                        >
                            <Link href={category.href} className="group block h-full">
                                <div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out">
                                    <div className="aspect-[4/3] bg-warm/50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                                        {category.image ? (
                                            <img
                                                src={category.image}
                                                alt={category.title}
                                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-500" />
                                                <span className="font-heading text-6xl text-secondary/20 group-hover:scale-110 transition-transform duration-700">
                                                    {category.title.charAt(0)}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-center min-h-[140px] border-t border-gray-50">
                                        <h3 className="font-heading text-lg font-bold text-secondary group-hover:text-primary transition-colors text-center leading-tight">
                                            {category.title.split(' (')[0]}
                                        </h3>
                                        <p className="text-gray-500 text-xs mt-2 text-center line-clamp-2">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/products" className="font-medium text-primary hover:text-secondary">
                        View All Products &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
