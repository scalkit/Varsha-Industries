import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/lib/site-data";

export function generateStaticParams() {
    return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = blogs.find((item) => item.slug === slug);
    if (!post) notFound();

    const related = blogs.filter((item) => item.slug !== slug).slice(0, 2);

    return (
        <>
            <section className="bg-primary pt-32 pb-20 text-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Link href="/insights" className="font-bold text-accent">
                        Back to Insights
                    </Link>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                        {post.category}
                    </p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                        {post.title}
                    </h1>
                    <p className="mt-5 text-white/70">
                        {post.date} • {post.readTime} • {post.author}
                    </p>
                </div>
            </section>

            <article className="py-16 md:py-24">
                <div className="mx-auto max-w-3xl px-4 text-lg leading-8 text-muted sm:px-6 lg:px-8">
                    <p>
                        Oil processing plants depend on the right combination of machinery, filtration and spare
                        parts planning. A well-selected system improves production consistency, controls downtime
                        and supports better product quality over the long term.
                    </p>
                    <p className="mt-6">
                        At Varsha Industry, equipment recommendations are guided by practical plant requirements:
                        raw material type, expected output, available power, floor space, maintenance access and
                        filtration expectations. These factors help determine the right machine configuration.
                    </p>
                    <p className="mt-6">
                        Before investing in a new machine or upgrade, teams should evaluate both current throughput
                        and future expansion plans. Modern, commercially proven technologies can make plants more
                        energy-efficient, easier to maintain and more cost-effective to operate.
                    </p>
                </div>
            </article>

            <section className="bg-soft py-16">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-primary">Related Posts</h2>
                    <div className="mt-8 grid gap-7 md:grid-cols-2">
                        {related.map((item) => (
                            <BlogCard key={item.slug} post={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
