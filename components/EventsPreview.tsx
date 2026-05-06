'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const pastEvents = [
    {
        title: 'WHX Labs Expo Dubai',
        date: 'Feb 10-13, 2026',
        location: 'Dubai World Trade Center - Booth: TBA',
        description: 'Explore our latest diagnostic packaging solutions in Dubai.',
        color: 'bg-primary',
        image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80",
    },
    {
        title: 'Analytica 2026',
        date: 'Mar 24-27, 2026',
        location: 'Messe Munchen, Germany - Booth: TBA',
        description: "Join us at the world's leading trade fair for laboratory technology.",
        color: 'bg-secondary',
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    },
];

function EmptyUpcomingEvents() {
    return (
        <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-10 text-center">
            <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="font-heading text-xl font-bold text-secondary mb-2">No Upcoming Events Right Now</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
                There are no upcoming events scheduled at the moment. Please check back soon for new exhibitions and updates.
            </p>
        </div>
    );
}

function EventCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
                <ScrollReveal key={event.title} delay={(index + 1) * 0.1} width="100%">
                    <Link href="/events-insights" className="group block">
                        <div className={`relative h-64 ${event.color} rounded-xl overflow-hidden mb-6 shadow-md hover:shadow-xl transition-all duration-500`}>
                            <div
                                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-30"
                                style={{ backgroundImage: `url('${event.image}')` }}
                            />
                            <div className="absolute top-4 left-4 bg-white text-primary px-3 py-1 rounded text-sm font-bold flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {event.date}
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-heading text-2xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-200 text-sm opacity-90">{event.location}</p>
                            </div>
                        </div>
                        <h4 className="font-heading text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                            {event.description}
                        </h4>
                    </Link>
                </ScrollReveal>
            ))}
        </div>
    );
}

export default function EventsPreview() {
    const [activeEvents, setActiveEvents] = useState<'upcoming' | 'past'>('upcoming');

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Stay Updated</span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mt-2 mb-6">
                                Events & Insights
                            </h2>
                            <div className="flex bg-gray-100 p-1 rounded-full shadow-inner border border-black/5 w-fit">
                                <button
                                    onClick={() => setActiveEvents('upcoming')}
                                    className={`py-2 px-6 rounded-full text-sm font-bold transition-all duration-300 ${activeEvents === 'upcoming'
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-gray-500 hover:text-secondary'
                                        }`}
                                >
                                    Upcoming Events
                                </button>
                                <button
                                    onClick={() => setActiveEvents('past')}
                                    className={`py-2 px-6 rounded-full text-sm font-bold transition-all duration-300 ${activeEvents === 'past'
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-gray-500 hover:text-secondary'
                                        }`}
                                >
                                    Past Events
                                </button>
                            </div>
                        </div>
                        <Link href="/events-insights" className="font-medium text-primary hover:text-secondary flex items-center gap-2 group">
                            View All Updates <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </ScrollReveal>

                <div className="space-y-16">
                    <div>
                        {activeEvents === 'upcoming' ? <EmptyUpcomingEvents /> : <EventCards />}
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-secondary mb-8 border-l-4 border-accent pl-4">Latest Insights</h3>
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
                                    title: "Optimizing PCR Workflows",
                                    date: "Nov 28, 2025",
                                    excerpt: "Technical deep dive into how material properties impact result accuracy in sensitive assays.",
                                    category: "Technical",
                                    image: "/assets/blog2.jpg"
                                },
                                {
                                    title: "Cleanroom Capacity Expansion",
                                    date: "Oct 10, 2025",
                                    excerpt: "We are proud to announce the opening of our new 5,000 sq. ft. expansion to meet growing global demand.",
                                    category: "Company News",
                                    image: "/assets/blog3.jpg"
                                }
                            ].map((insight, idx) => (
                                <ScrollReveal key={idx} direction="up" delay={idx * 0.1} width="100%">
                                    <Link href="/events-insights" className="group block h-full">
                                        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full flex flex-col">
                                            <div className="h-48 bg-warm/50 relative overflow-hidden">
                                                <Image
                                                    src={insight.image}
                                                    alt={insight.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-500" />
                                                <div className="absolute top-4 left-4 bg-white/90 text-[10px] font-bold px-2 py-1 rounded shadow-sm text-primary uppercase tracking-wide z-10">
                                                    {insight.category}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <div className="text-[11px] text-gray-400 font-medium mb-2 uppercase tracking-wider">{insight.date}</div>
                                                <h4 className="font-heading text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors leading-tight">
                                                    {insight.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                                                    {insight.excerpt}
                                                </p>
                                                <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
                                                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
