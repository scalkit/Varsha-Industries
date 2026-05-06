import { BadgeCheck } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function CertificationsPage() {
    return (
        <div className="bg-white">
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Certifications</h1>
                        <p className="text-xl text-accent/90 max-w-3xl mx-auto">
                            Upholding the highest standards of quality and medical device compliance.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <ScrollReveal width="100%">
                    <h2 className="font-heading text-3xl font-bold text-secondary mb-12 text-center">Our Commitment to Quality</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="p-8 border border-gray-200 rounded-2xl hover:border-primary transition-all hover:shadow-xl bg-white group">
                            <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform inline-block">ISO</div>
                            <div className="text-2xl font-bold text-secondary mb-2">9001:2016</div>
                            <p className="text-gray-600">Global standards for Quality Management Systems across our entire manufacturing process.</p>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-2xl hover:border-primary transition-all hover:shadow-xl bg-white group">
                            <div className="text-5xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform inline-block">ISO</div>
                            <div className="text-2xl font-bold text-secondary mb-2">13485</div>
                            <p className="text-gray-600">Specific quality standards for medical device manufacturing and regulatory compliance.</p>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Sustainability Section */}
                <section className="mt-20">
                    <ScrollReveal width="100%">
                        <div className="bg-gradient-to-br from-warm to-white rounded-3xl p-12 md:p-16 border border-primary/10">
                            <h2 className="font-heading text-3xl font-bold text-secondary mb-8 text-center">Sustainability</h2>
                            <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Plastx Labs is committed to responsible manufacturing practices that balance performance, quality, and environmental responsibility.
                                </p>
                                <p>
                                    We focus on optimizing raw material usage, improving process efficiency, and reducing waste without compromising product integrity. Energy-efficient manufacturing practices and thoughtful logistics planning help minimize environmental impact across operations.
                                </p>
                                <p>
                                    Where applicable, we explore reusable and recycling-friendly labware initiatives, aligned with industry expectations and regulatory considerations.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
}
