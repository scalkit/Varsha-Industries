import Link from "next/link";

type InnerHeroProps = {
    title: string;
    subtitle?: string;
};

export default function InnerHero({ title, subtitle }: InnerHeroProps) {
    return (
        <section className="bg-primary pb-14 pt-28 text-white sm:pb-20 sm:pt-32">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center gap-y-2 text-sm text-white/70">
                    <Link href="/" className="hover:text-amber">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-amber">{title}</span>
                </div>
                <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
                {subtitle && <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{subtitle}</p>}
            </div>
        </section>
    );
}
