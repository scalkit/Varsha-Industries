import { Factory } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function StatsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Centered Header */}
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary">
                            Precision Manufacturing Excellence
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                    {/* About Content - Left Column */}
                    <div className="space-y-8">
                        <ScrollReveal direction="up" delay={0.1}>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Plastx Labs Pvt Ltd, established in 2005, is a leading manufacturer of plastic labware consumables and packaging solutions for diagnostic reagents. We support laboratories, diagnostic manufacturers, research organizations, and biotech companies with reliable, high-performance products.
                            </p>
                        </ScrollReveal>

                        <ul className="space-y-5">
                            {[
                                "**Class 8 Clean Room Facility spanning 10,000+ sq. ft.**, ensuring contamination-controlled manufacturing",
                                "**Trusted Export Partner to 30+ Countries**, with a proven global footprint",
                                "**20+ Years of Industry Expertise**, built on reliability and innovation",
                                "**500+ Product SKUs**, catering to diverse and evolving requirements",
                                "**State-of-the-Art, High-Precision Machinery with Fully Automated Assembly Systems**, enabling accurate, consistent, and scalable manufacturing",
                                "**Complete In-House Engineering and R&D Capability**, driving continuous innovation, product development, and performance enhancement",
                                "**Uncompromising Quality Control Framework**, backed by precision-driven processes to ensure reliability at every stage"
                            ].map((point, idx) => {
                                const parts = point.split('**,');
                                const header = parts[0].replace(/\*\*/g, '');
                                const desc = parts[1] || '';
                                return (
                                    <ScrollReveal key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                                        <li className="flex gap-4 items-start">
                                            <div className="mt-2 flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                                            <p className="text-gray-700 text-base leading-relaxed">
                                                <strong className="text-secondary">{header}</strong>, {desc}
                                            </p>
                                        </li>
                                    </ScrollReveal>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Image - Right Column, Aligned at Top */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl group border border-black/5 self-stretch hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out">
                            <img
                                src="/assets/home.png"
                                alt="Facility Clean Room"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-secondary/80 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                <p className="text-white font-bold text-xl mb-1">Advanced Clean Room Facility</p>
                                <p className="text-white/80 text-sm font-medium">ISO Class 8 Certified</p>
                            </div>
                        </div>
        
                </div>
            </div>
        </section>
    );
}
