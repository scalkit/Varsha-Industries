import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Texture/Image Placeholder */}
            {/* In a real scenario, this would be a high-quality lifestyle image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white max-w-4xl">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium tracking-wider mb-6 animate-fade-in-up">
                    INNOVATION IN PLASTICS
                </span>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    Precision Labware & <br className="hidden md:block" />
                    <span className="text-accent-light">Custom OEM Solutions</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Elevating scientific research with world-class standard products and end-to-end manufacturing services from design to mass production.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <Link
                        href="/products"
                        className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                        Explore Products
                    </Link>
                    <Link
                        href="/oem-solutions"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        Partner With Us <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

        </section>
    );
}
