import Link from "next/link";

type BlogCardProps = {
    post: {
        slug: string;
        category: string;
        date: string;
        title: string;
        excerpt: string;
        image: string;
    };
};

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Link
            href={`/insights/${post.slug}`}
            className="group overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div
                className="aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
                aria-label={post.title}
            />
            <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-amber/15 px-3 py-1 font-bold text-amber">
                        {post.category}
                    </span>
                    <span className="text-muted">{post.date}</span>
                </div>
                <h3 className="mt-4 line-clamp-2 text-xl font-bold text-primary">
                    {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                    {post.excerpt}
                </p>
                <span className="mt-5 inline-flex font-bold text-amber">Read More -&gt;</span>
            </div>
        </Link>
    );
}
