import { Calendar, MapPin, FileText, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

const pastEvents = [
    {
        title: 'WHX Labs Expo Dubai',
        date: 'Feb 10-13, 2026',
        location: 'Dubai World Trade Center - Booth: TBA',
        description: 'Join us to explore our latest diagnostic packaging solutions for the Middle East market.',
        color: 'bg-primary',
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80",
    },
    {
        title: 'Analytica 2026',
        date: 'Mar 24-27, 2026',
        location: 'Messe Munchen, Germany - Booth: TBA',
        description: "The world's leading trade fair for laboratory technology, analysis, and biotechnology.",
        color: 'bg-secondary',
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    },
];

function EmptyUpcomingEvents() {
    return (
        <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-10 text-center">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-2xl font-bold text-secondary mb-2">No Upcoming Events Right Now</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
                There are no upcoming events scheduled at the moment. Please check back soon for new exhibitions and announcements.
            </p>
        </div>
    );
}

export default function EventsInsights() {
    return (
        <div className="bg-white">
            <div className="bg-primary text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Events & Insights</h1>
                        <p className="text-xl text-accent/90 max-w-3xl mx-auto">
                            Stay updated with our latest exhibitions, corporate news, and industry insights.
                        </p>
                    </ScrollReveal>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                <section>
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <Calendar className="w-8 h-8 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-heading text-3xl font-bold text-secondary">Upcoming Events</h2>
                                <p className="text-gray-600 mt-1">Meet our team at future global exhibitions.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <EmptyUpcomingEvents />
                </section>

                <section>
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <Calendar className="w-8 h-8 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-heading text-3xl font-bold text-secondary">Past Events</h2>
                                <p className="text-gray-600 mt-1">Recent exhibitions and industry gatherings.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pastEvents.map((event, index) => (
                            <ScrollReveal key={event.title} delay={(index + 1) * 0.1} width="100%">
                                <div className="group block cursor-pointer">
                                    <div className={`relative h-72 ${event.color} rounded-xl overflow-hidden mb-6 shadow-md hover:shadow-xl transition-all duration-500`}>
                                        <div
                                            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-700"
                                            style={{ backgroundImage: `url('${event.image}')` }}
                                        />
                                        <div className="absolute top-4 left-4 bg-white text-primary px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm">
                                            <Calendar className="w-4 h-4" /> {event.date}
                                        </div>
                                        <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="font-heading text-2xl font-bold mb-2">{event.title}</h3>
                                            <div className="flex items-center gap-2 text-gray-200 text-sm opacity-90">
                                                <MapPin className="w-4 h-4" /> {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-heading text-xl font-bold text-secondary group-hover:text-primary transition-colors pr-8">
                                        {event.description}
                                    </h4>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                <section>
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-secondary/10 p-3 rounded-full">
                                <FileText className="w-8 h-8 text-secondary" />
                            </div>
                            <div>
                                <h2 className="font-heading text-3xl font-bold text-secondary">Latest Insights</h2>
                                <p className="text-gray-600 mt-1">Updates, trends, and technical articles from our experts.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "The Shift to Sustainable Labware",
                                date: "Dec 15, 2025",
                                excerpt: "Exploring how the diagnostic industry is adapting to eco-friendly materials without compromising quality.",
                                category: "Industry Trends",
                                image: "/assets/blog1.jpg"
                            },
                            {
                                title: "Optimizing PCR Workflows with Low-Retention Plastics",
                                date: "Nov 28, 2025",
                                excerpt: "Technical deep dive into how material properties impact result accuracy in sensitive assays.",
                                category: "Technical",
                                image: "/assets/blog2.jpg"
                            },
                            {
                                title: "Plastx Labs Expands Cleanroom Capacity",
                                date: "Oct 10, 2025",
                                excerpt: "We are proud to announce the opening of our new 5,000 sq. ft. expansion to meet growing global demand.",
                                category: "Company News",
                                image: "/assets/blog3.jpg"
                            }
                        ].map((post, idx) => (
                            <ScrollReveal key={idx} direction="up" delay={idx * 0.1} width="100%">
                                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer h-full">
                                    <div className="h-48 bg-warm/50 relative overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            priority
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/90 text-xs font-bold px-2 py-1 rounded shadow-sm text-primary uppercase tracking-wide z-10">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                                        <h3 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <span className="inline-flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                                            Read More <ArrowRight className="w-4 h-4 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
