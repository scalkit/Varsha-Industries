import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
    title: string;
    description: string;
    href?: string;
    icon: LucideIcon;
    image?: string;
};

export default function ProductCard({ title, description, href = "/products", icon: Icon, image }: ProductCardProps) {
    return (
        <Link
            href={href}
            className="group flex h-full min-w-0 flex-col rounded-lg border border-primary/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-t-4 hover:border-t-primary hover:shadow-xl sm:p-6"
        >
            <div className="relative mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-neutral">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                ) : (
                    <Icon className="h-16 w-16 text-primary transition group-hover:text-primary/70" />
                )}
            </div>
            <h3 className="text-lg font-bold text-primary sm:text-xl">{title}</h3>
            <p className="mt-3 flex-grow text-sm leading-6 text-muted">{description}</p>
            <span className="mt-5 inline-flex font-normal text-primary">View Products -&gt;</span>
        </Link>
    );
}
