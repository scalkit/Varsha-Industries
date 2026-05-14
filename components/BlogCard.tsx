import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            className="group flex h-full overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="flex w-full flex-col">
                <div
                    className="relative aspect-[16/8] bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                    aria-label={post.title}
                >
                    <span className="absolute left-5 top-5 rounded-md bg-white/95 px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-primary shadow-sm">
                        {post.category}
                    </span>
                </div>
                <div className="flex flex-grow flex-col p-6 sm:p-7">
                    <span className="text-sm font-bold uppercase tracking-[0.08em] text-muted/70">
                        {post.date}
                    </span>
                    <h3 className="mt-4 line-clamp-2 text-2xl font-bold leading-tight text-primary">
                        {post.title}
                    </h3>
                    <p className="mt-4 line-clamp-3 text-base leading-7 text-muted">
                        {post.excerpt}
                    </p>
                    <span className="mt-auto inline-flex pt-8 text-sm font-black uppercase tracking-[0.08em] text-primary">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
