import Link from "next/link";
import Image from "next/image";
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

            <section className="py-16 md:py-24">
                <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
                    <div className="md:order-1">
                        <SectionHeader eyebrow="WHO WE ARE" title="About Varsha Industry" centered={false} />
                        <div className="mt-8 space-y-5 leading-8 text-muted">
                            {aboutParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                        <Link href="/about" className="btn-outline-amber mt-8">
                            Learn More About Us
                        </Link>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl md:order-2">
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
                        <Link href="/products" className="btn-amber">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-neutral py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="OUR CLIENTS" title="Trusted By Industry Leaders" />
                    <div className="mt-12">
                        <ClientLogoStrip />
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="FROM OUR BLOG" title="Insights" />
                    <div className="mt-12 grid gap-7 md:grid-cols-3">
                        {blogs.slice(0, 3).map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link href="/insights" className="btn-outline-amber">
                            View All Insights
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-soft py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="GOT QUESTIONS?" title="Frequently Asked Questions" />
                    <div className="mt-12">
                        <FAQAccordion />
                    </div>
                </div>
            </section>

            <ContactCTA />
        </>
    );
}
