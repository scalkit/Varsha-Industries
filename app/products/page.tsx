"use client";

import { useState } from "react";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { productCategories } from "@/lib/site-data";

export default function ProductsPage() {
    const [activeId, setActiveId] = useState(productCategories[0].id);
    const activeCategory =
        productCategories.find((category) => category.id === activeId) || productCategories[0];
    const ActiveIcon = activeCategory.icon;

    return (
        <>
            <InnerHero title="Our Products" />
            <section className="py-16 md:py-24">
                <div className="mx-auto grid max-w-screen-xl gap-8 px-4 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8">
                    <aside className="h-fit rounded-lg border border-black/10 bg-white p-4 shadow-sm lg:sticky lg:top-28">
                        <h2 className="px-3 pb-3 text-sm font-black uppercase tracking-[0.18em] text-primary">
                            Categories
                        </h2>
                        <div className="space-y-2">
                            {productCategories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setActiveId(category.id)}
                                    className={`w-full rounded-md px-3 py-3 text-left font-bold ${activeId === category.id ? "bg-primary text-white" : "text-primary hover:bg-neutral"}`}
                                >
                                    {category.shortTitle}
                                </button>
                            ))}
                        </div>
                    </aside>

                    <div>
                        <div className="mb-8 rounded-lg bg-soft p-6">
                            <ActiveIcon className="h-10 w-10 text-amber" />
                            <h2 className="mt-4 text-3xl font-bold text-primary">{activeCategory.title}</h2>
                            <p className="mt-3 text-muted">{activeCategory.description}</p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {activeCategory.models.map((model) => (
                                <div key={model} className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
                                    <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral">
                                        <ActiveIcon className="h-14 w-14 text-primary" />
                                    </div>
                                    <h3 className="min-h-14 text-lg font-bold text-primary">{model}</h3>
                                    <Link
                                        href={`/contact?product=${encodeURIComponent(model)}`}
                                        className="btn-amber mt-5 w-full justify-center"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 rounded-lg bg-primary p-8 text-center text-white">
                            <h3 className="text-2xl font-bold">Can&apos;t find what you need?</h3>
                            <p className="mt-3 text-white/75">Contact us for custom requirements.</p>
                            <Link href="/contact" className="btn-amber mt-6">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
