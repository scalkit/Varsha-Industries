"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/site-data";

export default function HeroBanner() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActive((current) => (current + 1) % heroSlides.length);
        }, 4000);
        return () => window.clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] overflow-hidden bg-primary pt-24 text-white">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
                >
                    <div
                        className="absolute inset-y-0 right-0 w-full bg-cover bg-center opacity-35 md:w-3/5"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-primary/75" />
                </div>
            ))}
            <div className="relative z-10 mx-auto flex min-h-[calc(90vh-96px)] max-w-screen-xl items-center px-4 py-20 sm:px-6 lg:px-8">
                <div className="max-w-2xl md:w-2/5">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber">
                        {heroSlides[active].eyebrow}
                    </p>
                    <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
                        {heroSlides[active].title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white/80">
                        {heroSlides[active].description}
                    </p>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link href="/products" className="btn-amber">
                            Explore Products
                        </Link>
                        <Link href="/contact" className="btn-outline-white">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.title}
                        type="button"
                        aria-label={`Show slide ${index + 1}`}
                        onClick={() => setActive(index)}
                        className={`h-3 w-3 rounded-full transition ${index === active ? "bg-amber" : "bg-white/40"}`}
                    />
                ))}
            </div>
        </section>
    );
}
