import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import ClientLogoStrip from "@/components/ClientLogoStrip";
import ContactCTA from "@/components/ContactCTA";
import FAQAccordion from "@/components/FAQAccordion";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import SectionHeader from "@/components/SectionHeader";
import StatsRibbon from "@/components/StatsRibbon";
import { aboutParagraphs, blogs, productCategories } from "@/lib/site-data";

export default function Home() {
    return (
        <>
            <HeroBanner />

            <section className="overflow-hidden bg-background py-8 md:py-10">
                <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
                    <p className="text-sm font-bold text-muted">Trusted by industry leaders</p>
                    <div className="mt-6">
                        <ClientLogoStrip />
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16">
                <div className="mx-auto grid max-w-screen-xl items-stretch gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
                    <div className="flex flex-col md:order-1">
                        <SectionHeader eyebrow="WHO WE ARE" title="About Varsha Industry" centered={false} />
                        <div className="mt-8 space-y-5 leading-8 text-muted">
                            {aboutParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <Link href="/about" className="group mt-8 inline-flex w-fit items-center gap-2 self-start rounded-lg border border-primary px-5 py-3 font-extrabold leading-none text-primary transition duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-lg">
                            Learn More About Us
                            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                        </Link>
                    </div>
                    <div className="relative min-h-80 overflow-hidden rounded-lg shadow-xl md:order-2 md:h-full md:min-h-0">
                        <Image
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                            alt="Industrial manufacturing facility with machinery"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 45vw"
                        />
                    </div>
                </div>
            </section>

            <StatsRibbon />

            <section className="bg-soft py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="WHAT WE OFFER"
                        title="Our Products"
                        subtitle="Preview of our Product Range"
                    />
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {productCategories.map((category) => (
                            <ProductCard
                                key={category.id}
                                title={category.title}
                                description={category.description}
                                icon={category.icon}
                                image={category.image}
                                href="/products"
                            />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/products" className="btn-solid-primary">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="border-l-4 border-primary/35 pl-5">
                        <h2 className="text-2xl font-black text-primary sm:text-3xl">Latest Insights</h2>
                    </div>
                    <div className="mt-12 grid gap-7 md:grid-cols-3">
                        {blogs.slice(0, 3).map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/insights" className="btn-outline-primary">
                            View All Insights
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-soft py-16 md:py-24">
                <div className="mx-auto max-w-5xl rounded-xl border-x border-primary/10 bg-white px-4 py-8 sm:px-8 md:py-12 lg:px-16">
                    <span className="inline-flex rounded-full bg-neutral px-6 py-2 text-sm font-bold text-muted">
                        FAQs
                    </span>
                    <h2 className="mt-8 max-w-4xl text-3xl font-bold leading-tight text-primary md:text-4xl">
                        Everything You Need to Know
                    </h2>
                    <div className="mt-10">
                        <FAQAccordion />
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
