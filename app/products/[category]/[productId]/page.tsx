import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BadgeCheck, Factory, Gauge, Settings, ShieldCheck } from "lucide-react";
import { productCategories } from "@/lib/site-data";
import { getProductBySlug, getProductSummary, slugifyProduct } from "@/lib/product-utils";

type ProductDetailPageProps = {
    params: Promise<{
        category: string;
        productId: string;
    }>;
};

export function generateStaticParams() {
    return productCategories.flatMap((category) =>
        category.models.map((model) => ({
            category: category.id,
            productId: slugifyProduct(model),
        }))
    );
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
    const { category: categoryId, productId } = await params;
    const product = getProductBySlug(categoryId, productId);

    if (!product) {
        return {
            title: "Product | Varsha Industry",
        };
    }

    return {
        title: `${product.model} | Varsha Industry`,
        description: getProductSummary(product.category.title, product.model),
    };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { category: categoryId, productId } = await params;
    const product = getProductBySlug(categoryId, productId);

    if (!product) {
        notFound();
    }

    const { category, model } = product;
    const productCode = `VI-${category.id}-${slugifyProduct(model)}`.toUpperCase();
    const summary = getProductSummary(category.title, model);
    const highlights = getHighlights(category.title);
    const Icon = category.icon;

    return (
        <>
            <section className="border-b border-primary/10 bg-white pt-28">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-y-2 text-[11px] font-black uppercase tracking-[0.14em] text-muted">
                        <Link href="/" className="hover:text-primary">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/products" className="hover:text-primary">
                            Products
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-primary">{category.shortTitle}</span>
                    </div>
                    <Link href="/products" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-primary hover:opacity-75">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Products
                    </Link>
                </div>
            </section>

            <section className="bg-background py-14 md:py-20">
                <div className="mx-auto grid max-w-screen-xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-16 lg:gap-y-8 lg:px-8">
                    <div className="hidden lg:block" />
                    <div className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-primary">
                        <Icon className="h-3.5 w-3.5" />
                        Varsha Industry
                    </div>

                    <div className="lg:col-start-1 lg:row-start-2">
                        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-neutral shadow-sm lg:h-full lg:min-h-[560px] lg:aspect-auto">
                            <Image
                                src={category.image}
                                alt={`${model} product image`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute bottom-5 right-5 rounded-md bg-white/85 px-3 py-2 text-sm font-black text-primary shadow-sm">
                                1/1
                            </div>
                        </div>
                        <div className="mt-5 w-20 rounded-lg border-2 border-primary bg-white p-2 shadow-sm lg:hidden">
                            <div className="relative aspect-square overflow-hidden rounded-md bg-neutral">
                                <Image src={category.image} alt={`${model} thumbnail`} fill className="object-cover" sizes="80px" />
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 lg:col-start-2 lg:row-start-2">
                        <h1 className="max-w-2xl text-2xl font-bold leading-tight text-primary sm:text-3xl">
                            {model}
                        </h1>
                        <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-muted">
                            Item Code: {productCode}
                        </p>

                        <div className="mt-8 border-l-4 border-primary/30 bg-white p-5 shadow-sm">
                            <p className="text-sm leading-7 text-muted">{summary}</p>
                        </div>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => {
                                const HighlightIcon = item.icon;
                                return (
                                    <div key={item.label} className="flex gap-4 rounded-lg border border-primary/10 bg-white p-4 shadow-sm">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                            <HighlightIcon className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <p className="text-[11px] font-black uppercase tracking-[0.14em] text-muted">{item.label}</p>
                                            <p className="mt-1 text-xs font-bold leading-5 text-primary sm:text-sm">{item.value}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Link href={`/contact?product=${encodeURIComponent(model)}`} className="btn-solid-primary w-full justify-center text-sm sm:w-auto">
                                Contact for This Product
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto grid max-w-screen-xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
                    <div className="lg:col-span-1">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-muted">Product Details</p>
                        <h2 className="mt-3 text-xl font-bold text-primary sm:text-2xl">Built for practical plant operation</h2>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
                        {[
                            "Suitable for edible and non-edible oil processing requirements.",
                            "Manufactured with a focus on sturdy operation and easy maintenance.",
                            "Useful for new installations, replacement planning and plant expansion.",
                            "Supported by spare parts availability and after-sales guidance.",
                        ].map((item) => (
                            <div key={item} className="rounded-lg border border-primary/10 bg-background p-5 text-xs font-bold leading-6 text-primary sm:text-sm">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function getHighlights(categoryTitle: string) {
    if (categoryTitle.toLowerCase().includes("filter cloth")) {
        return [
            { icon: ShieldCheck, label: "Material Options", value: "Cotton, Polyester, Polypropylene and mixed cloth" },
            { icon: Gauge, label: "Use Case", value: "Oil filtration across standard filter press sizes" },
            { icon: Factory, label: "Supply", value: "Available for replacement and regular plant use" },
            { icon: BadgeCheck, label: "Support", value: "Selection guidance based on oil and machine setup" },
        ];
    }

    if (categoryTitle.toLowerCase().includes("filter press")) {
        return [
            { icon: Settings, label: "Application", value: "Oil clarification and filtration" },
            { icon: Gauge, label: "Size Range", value: "Built around proven filter press configurations" },
            { icon: Factory, label: "Plant Fit", value: "Suitable for small to large oil processing units" },
            { icon: BadgeCheck, label: "Support", value: "Spares and after-sales assistance available" },
        ];
    }

    return [
        { icon: Settings, label: "Application", value: "Seed crushing and oil extraction" },
        { icon: Gauge, label: "Operation", value: "Reliable torque transfer for commercial usage" },
        { icon: Factory, label: "Plant Fit", value: "Designed for edible and non-edible oil plants" },
        { icon: BadgeCheck, label: "Support", value: "Replacement parts and plant upgrade support" },
    ];
}
