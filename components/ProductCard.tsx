import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
    title: string;
    description: string;
    href?: string;
    icon: LucideIcon;
};

export default function ProductCard({ title, description, href = "/products", icon: Icon }: ProductCardProps) {
    return (
        <Link
            href={href}
            className="group flex h-full min-w-0 flex-col rounded-lg border border-black/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-t-4 hover:border-t-amber hover:shadow-xl sm:p-6"
        >
            <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral">
                <Icon className="h-16 w-16 text-primary transition group-hover:text-amber" />
            </div>
            <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
            <p className="mt-3 flex-grow text-sm leading-6 text-muted">{description}</p>
            <span className="mt-5 inline-flex font-bold text-amber">View Products -&gt;</span>
        </Link>
    );
}
