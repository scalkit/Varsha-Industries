"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import { productCategories } from "@/lib/site-data";
import { getProductPath } from "@/lib/product-utils";

export default function ProductsPage() {
    const [activeId, setActiveId] = useState(productCategories[0].id);
    const activeCategory =
        productCategories.find((category) => category.id === activeId) || productCategories[0];
    const ActiveIcon = activeCategory.icon;

    return (
        <>
            <InnerHero
                title="Our Products"
                subtitle="Explore oil expellers, cold press machines, filter press systems and filtration cloth for reliable production."
            />
            <section className="py-16 md:py-24">
                <div className="mx-auto grid max-w-screen-xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(240px,300px)_1fr] lg:px-8">
                    <aside className="min-w-0 rounded-lg border border-primary/10 bg-white p-4 shadow-sm lg:sticky lg:top-28 lg:h-fit">
                        <h2 className="px-3 pb-3 text-xs font-black uppercase tracking-[0.16em] text-primary">
                            Categories
                        </h2>
                        <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
                            {productCategories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setActiveId(category.id)}
                                    className={`min-w-max rounded-md px-3 py-2.5 text-left text-sm font-bold lg:w-full lg:min-w-0 ${activeId === category.id ? "bg-primary text-white" : "text-primary hover:bg-neutral"}`}
                                >
                                    {category.shortTitle}
                                </button>
                            ))}
                        </div>
                    </aside>

                    <div>
                        <div className="mb-8 rounded-lg bg-soft p-5 sm:p-6">
                            <ActiveIcon className="h-10 w-10 text-primary" />
                            <h2 className="mt-4 text-xl font-bold leading-tight text-primary sm:text-2xl">{activeCategory.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-muted">{activeCategory.description}</p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                            {activeCategory.models.map((model) => (
                                <div key={model} className="flex min-w-0 flex-col rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                                    <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-neutral">
                                        <Image
                                            src={activeCategory.image}
                                            alt={`${model} machine`}
                                            fill
                                            className="object-cover transition duration-500 hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        />
                                    </div>
                                    <h3 className="flex-grow text-sm font-bold leading-6 text-primary sm:text-base">{model}</h3>
                                    <Link
                                        href={getProductPath(activeCategory.id, model)}
                                        className="btn-solid-primary mt-5 w-full justify-center text-sm"
                                    >
                                        View Product
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 rounded-lg bg-primary p-6 text-center text-white sm:p-8">
                            <h3 className="text-lg font-bold sm:text-xl">Can&apos;t find what you need?</h3>
                            <p className="mt-3 text-sm text-white/75">Contact us for custom requirements.</p>
                            <Link href="/contact" className="btn-primary mt-6 text-sm">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
