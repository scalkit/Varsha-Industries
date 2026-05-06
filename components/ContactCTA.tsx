import Link from "next/link";
import { Phone } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className="bg-primary py-16 text-white">
            <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold md:text-4xl">
                        Ready to Upgrade Your Oil Processing Plant?
                    </h2>
                    <p className="mt-4 max-w-2xl text-white/75">
                        Talk to our experts today. We&apos;ll help you find the right machine for your needs.
                    </p>
                </div>
                <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                    <Link href="/contact" className="btn-amber justify-center">
                        Contact Us
                    </Link>
                    <a href="tel:+919811965771" className="btn-outline-white justify-center">
                        <Phone className="h-4 w-4" />
                        +91 9811965771
                    </a>
                </div>
            </div>
        </section>
    );
}
