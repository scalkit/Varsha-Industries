import { BadgeCheck, Leaf, FlaskConical, Settings, Recycle, Download, FileText, Globe, Boxes, Cpu, History } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Header */}
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">About Plastx Labs</h1>
                        <p className="text-xl text-accent/90 max-w-3xl mx-auto">
                            Precision engineering for the world's most demanding laboratories and diagnostic applications.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

                {/* Company Overview Section */}
                <section id="who-we-are">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src="/assets/Factory.png"
                                    alt="Plastx Labs Cleanroom Facility"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors" />
                            </div>
                        <ScrollReveal direction="right" delay={0.2}>
                            <div>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6 relative inline-block">
                                    Company Overview
                                    <span className="block h-1.5 w-1/3 bg-primary mt-2"></span>
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Plastx Labs Pvt Ltd, established in 2005, is a leading manufacturer of plastic labware consumables and packaging solutions for diagnostic reagents. We support laboratories, diagnostic manufacturers, research organizations, and biotech companies with reliable, high-performance products.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Key Operational Highlights */}
                <section id="highlights">
                    <ScrollReveal width="100%">
                        <h2 className="font-heading text-3xl font-bold text-secondary mb-12 text-center">Our Strengths</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Precision Engineering",
                                    desc: "Our manufacturing processes emphasize accuracy, consistency, and material purity. With ISO Class 8 cleanroom production and stringent quality controls, we ensure contamination-free labware with repeatable performance.",
                                    icon: Settings
                                },
                                {
                                    title: "Versatile Product Range",
                                    desc: "From micro-tubes, pipette tips, cryo vials, racks, and liquid handling consumables to reagent bottles and diagnostic packaging, our comprehensive portfolio supports diverse laboratory and diagnostic workflows.",
                                    icon: Boxes
                                },
                                {
                                    title: "Quality at the Core",
                                    desc: "We use high-grade, virgin medical-resin to ensure low extractables, chemical compatibility, and compliance with diagnostic and life sciences standards.",
                                    icon: BadgeCheck
                                },
                                {
                                    title: "Engineering-Driven Manufacturing",
                                    desc: "Backed by in-house engineering and tooling expertise, we deliver precision-moulded products with high dimensional accuracy and long-term reliability.",
                                    icon: Cpu
                                },
                                {
                                    title: "Customer-Centric Approach",
                                    desc: "Whether you require standard SKUs or custom moulds, we deliver with speed, flexibility, and technical support tailored to your application and workflow.",
                                    icon: Globe
                                },
                                {
                                    title: "Scalable & Automated Production",
                                    desc: "State-of-the-art machinery and automated assembly systems enable consistent quality and reliable supply across for large-volume requirements.",
                                    icon: FlaskConical
                                },
                                {
                                    title: "Global Reach",
                                    desc: "Serving both domestic and international markets, we partner with laboratories, diagnostic firms, and life sciences companies across regions, supporting OEM and private-label requirements worldwide.",
                                    icon: Download
                                }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary mb-4 w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-lg text-secondary mb-3">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </section>

                {/* Why Us / Our Advantage */}
                <section id="advantages">
                    <ScrollReveal width="100%">
                        <h2 className="font-heading text-3xl font-bold text-secondary mb-12 text-center">Why Choose Plastx Labs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Certified Quality Systems",
                                    desc: "ISO 9001:2016 and ISO 13485 certifications ensure structured processes, traceability, and regulatory readiness for diagnostic and life sciences applications.",
                                    icon: BadgeCheck
                                },
                                {
                                    title: "High-Purity Medical-Grade Materials",
                                    desc: "We use virgin, medical-grade resins selected for low extractables, chemical compatibility, and consistent performance.",
                                    icon: FlaskConical
                                },
                                {
                                    title: "Customization & OEM Capability",
                                    desc: "From private labeling to custom mould development, we support tailored solutions aligned with your product and workflow requirements.",
                                    icon: Settings
                                },
                                {
                                    title: "Reliable Supply & Scalability",
                                    desc: "Efficient inventory management and scalable manufacturing enable timely deliveries for both recurring and high-volume orders.",
                                    icon: Boxes
                                }
                            ].map((item, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.15} width="100%" className="h-full">
                                    <div className="bg-gradient-to-br from-warm to-white p-8 rounded-2xl border border-primary/10 shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                        <div className="bg-primary/10 p-4 rounded-full text-primary mb-5 w-fit group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="font-bold text-xl text-secondary mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </ScrollReveal>
                </section>

                {/* Sustainability */}
                <section id="sustainability" className="pb-16 bg-warm -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 rounded-3xl">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
                        <ScrollReveal>
                            <div className="flex-shrink-0 bg-white p-6 rounded-full shadow-lg">
                                <Leaf className="w-12 h-12 text-primary" />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="font-heading text-3xl font-bold text-secondary mb-4">Sustainability Commitment</h2>
                                <h3 className="text-xl font-medium text-primary mb-4 italic">Performance with Responsibility</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We serving the industry by optimizing raw material usage, improving process efficiency, and reducing waste without compromising integrity. Energy-efficient practices and thoughtful logistics minimize our environmental impact while ensuring high-performance delivery.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

            </div>
        </div>
    );
}
