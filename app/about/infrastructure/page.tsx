import { Factory } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function InfrastructurePage() {
    return (
        <div className="bg-white">
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Infrastructure</h1>
                        <p className="text-xl text-accent/90 max-w-3xl mx-auto">
                            World-class facilities designed for diagnostic-grade production excellence.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ScrollReveal direction="left">
                        <div>
                            <h2 className="font-heading text-3xl font-bold text-secondary mb-6">Infrastructure</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Plastx Labs operates a robust manufacturing and support infrastructure designed to meet the demands of diagnostic-grade plastic production.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our facilities include an <span className="font-bold text-primary">ISO Class 8 cleanroom spanning over 10,000 sq. ft.</span>, ensuring contamination-controlled manufacturing for sensitive applications. State-of-the-art, high-precision injection moulding and automated assembly systems deliver dimensional accuracy, repeatability, and scalable output.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                In addition to manufacturing, our infrastructure includes in-house tooling support, quality laboratories, and extensive storage capacity, enabling efficient production planning and dependable supply chain execution.
                            </p>
                        </div>
                    </ScrollReveal>
                        <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 group">
                            <img
                                src="/assets/infrastructure.png"
                                alt="World Class Infrastructure"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500" />
                        </div>
                </div>
            </div>
        </div>
    );
}
