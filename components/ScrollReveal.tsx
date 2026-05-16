"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const targets = Array.from(
            document.querySelectorAll<HTMLElement>("main > *, main section, main article")
        );

        document.documentElement.classList.add("reveal-ready");
        targets.forEach((target) => target.classList.add("reveal-target"));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: "0px 0px -8% 0px",
                threshold: 0.08,
            }
        );

        targets.forEach((target) => observer.observe(target));

        return () => {
            observer.disconnect();
            document.documentElement.classList.remove("reveal-ready");
            targets.forEach((target) => target.classList.remove("reveal-target", "is-visible"));
        };
    }, [pathname]);

    return null;
}
