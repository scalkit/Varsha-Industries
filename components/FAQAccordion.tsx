"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={faq.question} className="overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-primary/5">
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left sm:px-6 sm:py-5"
                            aria-expanded={isOpen}
                        >
                            <span className="text-base font-bold leading-snug text-primary">{faq.question}</span>
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white transition duration-300 group-hover:bg-amber">
                                <Plus className={`h-5 w-5 transition duration-300 ${isOpen ? "rotate-45" : ""}`} />
                            </span>
                        </button>
                        <div
                            className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-5 pb-5 text-base leading-7 text-muted sm:px-6 sm:pb-6">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
