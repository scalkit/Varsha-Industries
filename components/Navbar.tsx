"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Cog, Menu, X } from "lucide-react";

const navLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Products", "/products"],
    ["Insights", "/insights"],
    ["Contact Us", "/contact"],
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 bg-primary text-white shadow-lg">
            <div className="mx-auto w-full max-w-screen-xl px-3 sm:px-6 lg:px-8">
                <div className="flex h-20 min-w-0 items-center justify-between gap-2 sm:gap-4">
                    <Link href="/" className="flex min-w-0 items-center gap-2 font-black tracking-wide sm:gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/70 text-accent">
                            <Cog className="h-5 w-5" />
                        </span>
                        <span className="flex min-w-0 flex-col text-[13px] leading-none sm:text-base md:text-lg">
                            <span className="truncate">VARSHA</span>
                            <span className="truncate">INDUSTRY</span>
                        </span>
                    </Link>

                    <div className="hidden items-center gap-5 lg:flex xl:gap-7">
                        {navLinks.map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                className={`relative py-2 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100 ${isActive(href) ? "text-accent after:scale-x-100" : "text-white after:scale-x-0"}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/20 lg:hidden"
                        onClick={() => setIsOpen((value) => !value)}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="border-t border-white/10 bg-primary px-4 py-4 lg:hidden">
                    <div className="mx-auto flex max-w-screen-xl flex-col gap-2">
                        {navLinks.map(([label, href]) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setIsOpen(false)}
                                className={`relative rounded-md px-3 py-3 font-bold after:absolute after:bottom-2 after:left-3 after:h-0.5 after:w-[calc(100%-1.5rem)] after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:bg-white/10 hover:text-accent hover:after:scale-x-100 ${isActive(href) ? "bg-white/10 text-accent after:scale-x-100" : "text-white after:scale-x-0"}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
