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
        <section className="relative min-h-[calc(100svh-1px)] overflow-hidden bg-primary pt-20 text-white sm:pt-24">
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.title}
                    className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
                >
                    <div
                        className="absolute inset-0 w-full bg-cover bg-center opacity-100 md:left-1/2 md:w-1/2"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/82 to-primary/32 md:right-1/2 md:to-primary" />
                </div>
            ))}
            <div className="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] w-full max-w-screen-xl items-center overflow-hidden px-3 py-14 sm:min-h-[calc(100svh-96px)] sm:px-6 sm:py-20 lg:px-8">
                <div className="w-full min-w-0 max-w-2xl md:w-1/2 md:pr-10 lg:max-w-xl lg:pr-16">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent sm:text-xs sm:tracking-[0.24em]">
                        {heroSlides[active].eyebrow}
                    </p>
                    <h1 className="mt-5 max-w-full break-words text-[clamp(2.15rem,10.5vw,4rem)] font-bold leading-[1.12] sm:text-5xl lg:text-[3.75rem]">
                        {heroSlides[active].title}
                    </h1>
                    <p className="mt-6 max-w-lg break-words text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                        {heroSlides[active].description}
                    </p>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link href="/products" className="btn-primary justify-center">
                            Explore Products
                        </Link>
                        <Link href="/contact" className="btn-outline-white justify-center">
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
                        className={`h-3 w-3 rounded-full transition ${index === active ? "bg-accent" : "bg-white/40"}`}
                    />
                ))}
            </div>
        </section>
    );
}
