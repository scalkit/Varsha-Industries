import { FlaskConical } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function RndPage() {
    return (
        <div className="bg-white">
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Research & Development</h1>
                        <p className="text-xl text-accent/90 max-w-3xl mx-auto">
                            Fueling innovation through precision engineering and collaborative design.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <section id="rnd" className="bg-secondary text-white rounded-3xl px-8 py-20">
                    <ScrollReveal width="100%">
                        <div className="max-w-3xl mx-auto text-center">
                            <FlaskConical className="w-16 h-16 text-accent mx-auto mb-6 opacity-80" />
                            <h2 className="font-heading text-3xl font-bold text-white mb-6">Research & Development</h2>
                            <p className="text-lg text-gray-200 leading-relaxed mb-6">
                                Innovation at Plastx Labs is driven by a strong in-house engineering and R&D capability.
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed mb-6">
                                Our R&D teams collaborate closely with OEM partners to refine designs, improve manufacturability, and enhance product performance. From material selection and tooling optimization to prototype development and validation support, R&D plays a critical role in every stage of product development.
                            </p>
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Continuous research enables us to introduce new labware formats, improve existing designs, and respond to evolving diagnostic and laboratory requirements with agility and precision.
                            </p>
                        </div>
                    </ScrollReveal>
                </section>
            </div>
        </div>
    );
}
