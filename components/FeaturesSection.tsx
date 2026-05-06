import { Cpu, PenTool, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
    {
        title: 'High-Precision Machinery',
        description: 'Fully automated assembly systems ensuring accurate, consistent, and scalable manufacturing.',
        icon: Cpu,
    },
    {
        title: 'In-House R&D',
        description: 'Complete engineering capability driving continuous innovation and product development.',
        icon: PenTool,
    },
    {
        title: 'Quality Control',
        description: 'Uncompromising framework backed by precision-driven processes to ensure reliability.',
        icon: ShieldCheck,
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-20 bg-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
                            Why Partner With Plastx?
                        </h2>
                        <p className="text-gray-600">
                            We deliver value through advanced technology and integrated capabilities.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 hover:-translate-y-2 h-full">
                                <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6 text-primary">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
