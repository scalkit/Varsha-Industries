import ScrollReveal from './ScrollReveal';

export default function Certifications() {
    return (
        <section className="py-16 bg-warm border-y border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollReveal width="100%">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-10">
                        Certified Excellence
                    </h2>

                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 transition-all duration-700">
                        {/* Styled Certification logos */}
                        {[
                            { name: 'ISO 9001:2016', sub: 'Quality Management' },
                            { name: 'ISO 13485', sub: 'Medical Devices' },
                        ].map((cert, i) => (
                            <div key={i} className="flex flex-col items-center group cursor-default">
                                <div className="h-16 w-32 bg-white border border-gray-200 flex flex-col items-center justify-center rounded-lg shadow-sm group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                                    <span className="text-secondary font-black tracking-tighter text-xl leading-none">{cert.name.split(' ')[0]}</span>
                                    <span className="text-[8px] font-bold text-primary mt-1">{cert.name.split(' ').slice(1).join(' ')}</span>
                                </div>
                                <span className="text-[10px] font-bold text-primary mt-3 uppercase tracking-widest">{cert.sub}</span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
