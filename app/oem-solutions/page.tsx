import Link from 'next/link';
import { ArrowRight, Settings, Component, CheckCircle, Factory, ShieldCheck, Microscope, Database, BarChart } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function OEMSolutions() {
    return (
        <div className="bg-white">
            {/* Hero Header */}
            <div className="bg-gradient-to-r from-secondary to-primary text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            OEM Manufacturing Partner
                        </h1>
                        <p className="text-xl md:text-2xl text-accent/90 max-w-3xl mx-auto mb-10 leading-relaxed">
                            From concept to scalable production, we support OEMs with precision-engineered, cleanroom-manufactured diagnostic solutions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-full hover:bg-accent transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Personalised Quote <ArrowRight className="w-5 h-5" />
                        </Link>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">

                {/* Overview */}
                <section className="max-w-4xl mx-auto text-center">
                    <ScrollReveal width="100%">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2 mb-8">
                            Overview
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-left md:text-center">
                            <p>
                                Plastx Labs is a dedicated <span className="font-bold text-primary">OEM manufacturing partner</span> for diagnostic kit manufacturers, laboratories, and life sciences companies worldwide. With over two decades of experience, we specialize in producing high-purity plastic labware and diagnostic reagent packaging that meets stringent quality, regulatory, and performance requirements.
                            </p>
                            <p>
                                Whether you are launching a new diagnostic product, scaling an existing line, or optimizing your supply chain, our OEM capabilities are designed to support you at every stage, from design and tooling to automated, large-scale manufacturing.
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                {/* Capabilities Grid */}
                <section>
                    <div className="text-center mb-12">
                        <ScrollReveal width="100%">
                            <h2 className="font-heading text-3xl font-bold text-secondary mb-4">Our OEM Capabilities</h2>
                        </ScrollReveal>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollReveal delay={0.1}>
                            <div className="bg-warm p-8 rounded-xl border border-black/5 hover:border-primary/30 transition-colors h-full">
                                <Component className="w-12 h-12 text-primary mb-6" />
                                <h3 className="font-heading text-2xl font-bold text-secondary mb-3">Private Label Manufacturing</h3>
                                <p className="text-gray-700">Manufacture labware and diagnostic packaging under your brand, ensuring consistency, confidentiality, and compliance with your exact specifications.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="bg-warm p-8 rounded-xl border border-black/5 hover:border-primary/30 transition-colors h-full">
                                <Settings className="w-12 h-12 text-primary mb-6" />
                                <h3 className="font-heading text-2xl font-bold text-secondary mb-3">Custom Mould Development</h3>
                                <p className="text-gray-700">End-to-end support for custom mould design and development for specialized tubes, vials, bottles, and unique packaging formats.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="bg-warm p-8 rounded-xl border border-black/5 hover:border-primary/30 transition-colors h-full">
                                <Factory className="w-12 h-12 text-primary mb-6" />
                                <h3 className="font-heading text-2xl font-bold text-secondary mb-3">Automated Precision Manufacturing</h3>
                                <p className="text-gray-700">State-of-the-art machinery with fully automated assembly systems ensures dimensional accuracy, repeatability, and high output efficiency.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.4}>
                            <div className="bg-warm p-8 rounded-xl border border-black/5 hover:border-primary/30 transition-colors h-full">
                                <ShieldCheck className="w-12 h-12 text-primary mb-6" />
                                <h3 className="font-heading text-2xl font-bold text-secondary mb-3">Cleanroom Production</h3>
                                <p className="text-gray-700">ISO Class-8 cleanroom manufacturing to ensure contamination-controlled, diagnostic-grade products suitable for sensitive applications.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Product Scope */}
                <section className="bg-primary/5 rounded-2xl p-10 md:p-16">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <ScrollReveal width="100%" direction="right">
                                <h2 className="font-heading text-3xl font-bold text-secondary mb-6">OEM Product Scope</h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">Standard Labware Consumables</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">Diagnostic Reagent Packaging</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">Custom Kit Components</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <span className="text-lg text-gray-700 font-medium">New Product Development (According to your requirements)</span>
                                    </li>
                                </ul>
                            </ScrollReveal>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            {/* Visual for Scope */}
                            <ScrollReveal width="100%" direction="left">
                                <div className="relative w-full max-w-sm aspect-square bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                                    <img
                                        src="/assets/OEM.png"
                                        alt="OEM Manufacturing Scope"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Why Plastx */}
                <section>
                    <ScrollReveal width="100%">
                        <h2 className="font-heading text-3xl font-bold text-secondary mb-12 text-center">Why Plastx Is Your Trusted OEM Partner</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "ISO 9001:2016 & ISO 13485 Certified",
                                desc: "Certified quality management systems ensure consistent manufacturing, regulatory readiness, and dependable OEM compliance.",
                                icon: ShieldCheck
                            },
                            {
                                title: "ISO Class 8 Cleanroom Facility",
                                desc: "Contamination-controlled production environment spanning 10,000+ sq. ft. designed for diagnostic-grade and life sciences applications.",
                                icon: Factory
                            },
                            {
                                title: "20+ Years of Industry Experience",
                                desc: "Decades of expertise in laboratory plastics and diagnostic consumables translate into proven reliability and trusted processes.",
                                icon: CheckCircle
                            },
                            {
                                title: "Engineering & R&D Support",
                                desc: "Our in-house engineering and R&D teams work closely with OEM partners to refine designs, improve manufacturability, and enhance product performance.",
                                icon: Microscope
                            },
                            {
                                title: "Batch Traceability",
                                desc: "Complete batch-level traceability with documentation support to meet validation, audit, and regulatory requirements.",
                                icon: Database
                            },
                            {
                                title: "Scalable Manufacturing",
                                desc: "High-precision machinery and fully automated assembly systems enable consistent quality, efficient scaling, and reliable long-term supply.",
                                icon: BarChart
                            },
                        ].map((item, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="flex flex-col items-center text-center p-6 hover:bg-warm rounded-lg transition-colors duration-300 h-full">
                                    <div className="mb-4 p-3 bg-accent/20 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <item.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-lg text-secondary mb-3 leading-tight text-center">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-center">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
