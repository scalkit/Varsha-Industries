import BlogCard from "@/components/BlogCard";
import InnerHero from "@/components/InnerHero";
import { blogs } from "@/lib/site-data";

export default function InsightsPage() {
    return (
        <>
            <InnerHero
                title="Insights"
                subtitle="Industry knowledge, tips and updates from Varsha Industry"
            />
            <section className="bg-soft py-16 md:py-24">
                <div className="mx-auto grid max-w-screen-xl gap-7 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                    {blogs.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </section>
        </>
    );
}
