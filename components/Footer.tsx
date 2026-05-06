import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-1">
                            <Link href="/" className="font-heading text-2xl font-bold tracking-wide text-accent transition-colors hover:text-white">
                                PLASTX
                            </Link>
                            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-xs">
                                Global leaders in precision plastic manufacturing and contamination-controlled environments, supporting healthcare and life sciences worldwide.
                            </p>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white border-b border-white/10 pb-2">Company</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-accent transition-colors">About Us Overview</Link></li>
                                <li><Link href="/about/infrastructure" className="hover:text-accent transition-colors">Infrastructure</Link></li>
                                <li><Link href="/about/rnd" className="hover:text-accent transition-colors">Research & Development</Link></li>
                                <li><Link href="/about/certifications" className="hover:text-accent transition-colors">Certifications & Quality Assurance</Link></li>
                                <li><Link href="/oem-solutions" className="hover:text-accent transition-colors">OEM Solutions</Link></li>
                                <li><Link href="/events-insights" className="hover:text-accent transition-colors">Events & Insights</Link></li>
                                <li><Link href="/contact" className="hover:text-accent transition-colors">Get in Touch</Link></li>
                            </ul>
                        </div>

                        {/* Diagnostics Column */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white border-b border-white/10 pb-2">Diagnostics</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/products" className="font-medium text-accent hover:text-white transition-colors mt-2 block">All Products</Link></li>
                                <li><Link href="/products/reagent-bottles" className="hover:text-accent transition-colors">Reagent Bottles</Link></li>
                                <li><Link href="/products/biochemistry-bottles" className="hover:text-accent transition-colors">Biochemistry Bottles</Link></li>
                                <li><Link href="/products/haematology-bottles" className="hover:text-accent transition-colors">Haematology Bottles</Link></li>
                                
                            </ul>
                        </div>

                        {/* Labware Column */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white border-b border-white/10 pb-2">Plastic Labware</h3>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/products" className="font-medium text-accent hover:text-white transition-colors mt-2 block">All Products</Link></li>
                                <li><Link href="/products/bottles-carboys" className="hover:text-accent transition-colors">Bottles & Carboys</Link></li>
                                <li><Link href="/products/centrifuge-tubes" className="hover:text-accent transition-colors">Centrifuge Tubes</Link></li>
                                <li><Link href="/products/liquid-handling" className="hover:text-accent transition-colors">Liquid Handling</Link></li>
                                <li><Link href="/products/reusables" className="hover:text-accent transition-colors">Reusable Labware</Link></li>
                            </ul>
                        </div>

                        {/* Contact Column */}
                        <div>
                            <h3 className="font-heading text-lg font-bold mb-6 text-white border-b border-white/10 pb-2">Support</h3>
                            <div className="space-y-6 text-sm text-gray-400">
                                <div>
                                    <strong className="text-accent block mb-2 uppercase tracking-widest text-[10px]">Address</strong>
                                    <p className="leading-relaxed">
                                        A - 245, Pocket C<br />
                                        Okhla Phase I, Okhla Estate<br />
                                        New Delhi, 110020
                                    </p>
                                </div>
                                <div>
                                    <strong className="text-accent block mb-2 uppercase tracking-widest text-[10px]">Email ID</strong>
                                    <a href="mailto:sanchit@plastx.in" className="hover:text-white transition-colors block">sanchit@plastx.in</a>
                                </div>
                                <div>
                                    <strong className="text-accent block mb-2 uppercase tracking-widest text-[10px]">Phone</strong>
                                    <a href="tel:+919999790300" className="hover:text-white transition-colors block">+91 99997 90300</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-10 text-center text-xs text-gray-500 uppercase tracking-widest">
                        <p>&copy; {currentYear} Plastx Labs Pvt Ltd. All rights reserved.</p>
                        <p className="mt-2">Designed &amp; Developed by Outlier Labs</p>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}
