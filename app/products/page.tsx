import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { categories, lifeSciencesCategories } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Design-forward Header */}
            <div className="bg-primary text-white text-center pt-24 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">
                            Our Products
                        </h1>
                    </ScrollReveal>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-20">
                <div className="flex flex-col sm:flex-row gap-4 justify-center -mt-9 pt-0">
                    <a
                        href="#diagnostics"
                        className="px-8 py-3 rounded-full border-2 border-primary bg-primary text-white font-bold text-sm tracking-wide uppercase text-center hover:bg-secondary hover:border-secondary transition-all shadow-lg"
                    >
                        Diagnostics
                    </a>
                    <a
                        href="#life-sciences"
                        className="px-8 py-3 rounded-full border-2 border-primary bg-white text-primary font-bold text-sm tracking-wide uppercase text-center hover:bg-primary hover:text-white transition-all shadow-lg"
                    >
                        Life Sciences
                    </a>
                </div>

                {/* Packaging Solutions */}
                <section id="diagnostics">
                    <ScrollReveal width="100%">
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                                Packaging Solutions for Diagnostics
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                                Plastic packaging solutions engineered to safely store, protect, and dispense sensitive diagnostic reagents and chemicals.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.filter(c => c.section === 'packaging').map((category, index) => (
                            <ScrollReveal key={category.id} delay={index * 0.1} className="h-full">
                                <Link href={`/products/${category.id}`} className="group block h-full">
                                    <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out">
                                        <div className="h-64 bg-warm/50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                                            {category.image ? (
                                                <img
                                                    src={category.image}
                                                    alt={category.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-500" />
                                                    <span className="font-heading text-4xl text-secondary/20 group-hover:scale-110 transition-transform duration-700">
                                                        {category.title.charAt(0)}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                                    {category.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                    {category.description}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                                                View Products <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Life Sciences */}
                <section id="life-sciences">
                    <ScrollReveal width="100%">
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                                Life Sciences
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                                Reliable, high-performance labware consumables designed to support routine and advanced laboratory workflows.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lifeSciencesCategories.map((category, index) => (
                            <ScrollReveal key={category.id} delay={index * 0.1} className="h-full">
                                <Link href={category.href} className="group block h-full">
                                    <div className="h-full flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out">
                                        <div className="h-64 bg-warm/50 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                                            {category.image ? (
                                                <img
                                                    src={category.image}
                                                    alt={category.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <>
                                                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-500" />
                                                    <span className="font-heading text-4xl text-secondary/20 group-hover:scale-110 transition-transform duration-700">
                                                        {category.title.charAt(0)}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                                    {category.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                    {category.description}
                                                </p>
                                            </div>
                                            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all">
                                                View Products <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* OEM CTA Section */}
                <section className="mt-24">
                    <ScrollReveal width="100%">
                        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 md:p-16 text-center text-white shadow-xl">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                                Need a Custom or OEM Solution?
                            </h2>
                            <p className="text-xl text-accent/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                                Contact our team to discuss product specifications, private labeling, or custom manufacturing requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link
                                    href="/oem-solutions"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Explore OEM Solutions <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Contact Us <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
}
