"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type FormErrors = Partial<Record<"name" | "phone" | "email", string>>;

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = String(form.get("name") || "").trim();
        const phone = String(form.get("phone") || "").trim();
        const email = String(form.get("email") || "").trim();
        const nextErrors: FormErrors = {};

        if (!name) nextErrors.name = "Full name is required.";
        if (!/^[+\d][\d\s-]{7,}$/.test(phone)) nextErrors.phone = "Enter a valid phone number.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length === 0) {
            setSubmitted(true);
            event.currentTarget.reset();
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="min-w-0 rounded-xl border border-black/10 bg-white p-5 shadow-sm sm:p-6 md:p-8"
            noValidate
        >
            <h2 className="text-2xl font-bold leading-tight text-primary sm:text-3xl">Get in Touch With Us</h2>
            <p className="mt-4 text-base leading-7 text-muted">
                Looking to explore our product range? Fill out the form below and our team will get back to you.
            </p>
            <div className="mt-8 grid gap-5">
                <Field label="Full Name" name="name" placeholder="John Doe" error={errors.name} />
                <Field label="Company Name" name="company" placeholder="ABC Pvt. Ltd." />
                <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone Number" name="phone" placeholder="+91 98765 43210" error={errors.phone} />
                    <Field label="Email Address" name="email" placeholder="john@company.com" error={errors.email} />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-bold text-primary">
                        How can we help you?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Let us know your requirements, output expectations, or any queries you may have."
                        className="mt-2 w-full rounded-lg border border-black/15 px-4 py-3 leading-7 outline-none transition placeholder:text-muted/60 focus:border-amber"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 font-bold text-white shadow-lg shadow-primary/15 transition hover:-translate-y-1 hover:bg-amber"
                >
                    Submit Enquiry
                    <Send className="h-5 w-5" />
                </button>
                <p className="text-center text-xs text-muted">
                    Our team typically responds within 48 business hours.
                </p>
                {submitted && (
                    <p className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-bold text-green-700">
                        Thank you. Your enquiry has been recorded.
                    </p>
                )}
            </div>
        </form>
    );
}

function Field({
    label,
    name,
    placeholder,
    error,
}: {
    label: string;
    name: string;
    placeholder: string;
    error?: string;
}) {
    return (
        <div>
            <label htmlFor={name} className="text-sm font-bold text-primary">
                {label}
            </label>
            <input
                id={name}
                name={name}
                placeholder={placeholder}
                className="mt-2 w-full rounded-lg border border-black/15 px-4 py-3 outline-none transition placeholder:text-muted/60 focus:border-amber"
            />
            {error && <p className="mt-1 text-xs font-bold text-red-600">{error}</p>}
        </div>
    );
}
