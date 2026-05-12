import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="bg-[#123946] py-16 text-white md:py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                        Ready to Upgrade Your Oil Processing Plant?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                        Talk to our experts today. We&apos;ll help you find the right machine for your needs.
                    </p>
                </div>
                <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
                    <Link href="/contact" className="min-w-44 rounded-md border border-white bg-transparent px-6 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-amber hover:bg-amber">
                        Contact Us
                    </Link>
                    <Link href="/products" className="min-w-44 rounded-md border border-white bg-transparent px-6 py-3 text-center font-bold text-white transition hover:-translate-y-1 hover:border-amber hover:bg-amber">
                        Explore Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
