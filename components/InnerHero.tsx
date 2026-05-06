import Link from "next/link";

type InnerHeroProps = {
    title: string;
    subtitle?: string;
};

export default function InnerHero({ title, subtitle }: InnerHeroProps) {
    return (
        <section className="bg-primary text-white pt-32 pb-20">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="text-sm text-white/70">
                    <Link href="/" className="hover:text-amber">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-amber">{title}</span>
                </div>
                <h1 className="mt-6 text-4xl md:text-5xl font-bold">{title}</h1>
                {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/80">{subtitle}</p>}
            </div>
        </section>
    );
}
