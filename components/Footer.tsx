import Link from "next/link";
import { brand, productCategories } from "@/lib/site-data";

export default function Footer() {
    return (
        <footer className="bg-primary text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="font-heading text-2xl tracking-wide text-white">
                            {brand.displayName}
                        </Link>
                        <p className="mt-4 leading-7 text-white/70">
                            Leading Manufacturer of Oil Processing Equipment
                        </p>
                    </div>
                    <FooterColumn
                        title="Quick Links"
                        links={[
                            ["Home", "/"],
                            ["About Us", "/about"],
                            ["Products", "/products"],
                            ["Insights", "/insights"],
                            ["Resources", "/resources"],
                            ["Contact Us", "/contact"],
                        ]}
                    />
                    <FooterColumn
                        title="Products"
                        links={productCategories.map((category) => [
                            category.shortTitle,
                            "/products",
                        ])}
                    />
                    <div>
                        <h3 className="mb-5 text-lg text-white">Contact</h3>
                        <div className="space-y-3 text-sm leading-6 text-white/70">
                            <a href={`mailto:${brand.email}`} className="block hover:text-accent">
                                {brand.email}
                            </a>
                            {brand.phones.map((phone) => (
                                <a
                                    key={phone}
                                    href={`tel:${phone.replace(/\s/g, "")}`}
                                    className="block hover:text-accent"
                                >
                                    {phone}
                                </a>
                            ))}
                            <p>{brand.address}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-white/60">
                    <p>© 2025 Varsha Industry. All rights reserved.</p>
                    <p className="mt-2">
                        Designed &amp; Developed by{" "}
                        <a
                            href="https://outlierlabs.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-white/75 transition hover:text-accent"
                        >
                            Outlier Labs
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({
    title,
    links,
}: {
    title: string;
    links: string[][];
}) {
    return (
        <div>
            <h3 className="mb-5 text-lg text-white">{title}</h3>
            <ul className="space-y-3 text-sm text-white/70">
                {links.map(([label, href]) => (
                    <li key={label}>
                        <Link href={href} className="hover:text-accent">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
