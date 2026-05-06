
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function ContactCTA() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <ScrollReveal width="100%">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                        Ready to Innovate?
                    </h2>
                    <p className="text-xl text-accent/90 mb-10 max-w-2xl mx-auto">
                        Connect with our engineering team to discuss your requirements or request a catalogue.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors"

                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/oem-solutions"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors"
                        >
                            OEM Services
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
