"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="mx-auto max-w-3xl divide-y divide-black/10 rounded-lg bg-white shadow-sm">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={faq.question}>
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                            aria-expanded={isOpen}
                        >
                            <span className="font-bold text-primary">{faq.question}</span>
                            <span className="text-2xl font-bold text-amber">{isOpen ? "-" : "+"}</span>
                        </button>
                        <div
                            className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                        >
                            <div className="overflow-hidden">
                                <p className="px-6 pb-6 leading-7 text-muted">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
