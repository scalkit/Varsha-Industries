import { Building2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
    return (
        <>
            <section className="bg-primary px-4 py-16 text-center text-white sm:px-6 md:py-20 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">CONTACT</p>
                    <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Contact Us</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/75">
                        Have a product enquiry or custom manufacturing request? We are here to help.
                    </p>
                </div>
            </section>

            <section className="bg-white py-14 md:py-20">
                <div className="mx-auto grid max-w-screen-xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
                    <div>
                        <h2 className="text-2xl font-bold leading-tight text-primary sm:text-3xl">Contact Details</h2>
                        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                            We&apos;re here to help you find the right equipment for your plant.
                        </p>

                        <div className="mt-9 space-y-9">
                            <Info icon={Mail} title="Email">
                                <a href={`mailto:${brand.email}`} className="hover:text-amber">
                                    {brand.email}
                                </a>
                            </Info>
                            <Info icon={Phone} title="Phone">
                                {brand.phones.map((phone) => (
                                    <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-amber">
                                        {phone}
                                    </a>
                                ))}
                            </Info>
                            <Info icon={MapPin} title="Headquarters">
                                <p>{brand.address}</p>
                                <p className="mt-3">{brand.secondAddress}</p>
                            </Info>
                            <Info icon={Building2} title="Office">
                                {brand.offices.map((office) => (
                                    <p key={office} className="mt-2 first:mt-0">
                                        {office}
                                    </p>
                                ))}
                            </Info>
                        </div>

                        
                    </div>

                    <ContactForm />
                </div>
            </section>
        </>
    );
}

function Info({
    icon: Icon,
    title,
    children,
}: {
    icon: typeof Mail;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-w-0 gap-5">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-amber/10 text-amber">
                <Icon className="h-6 w-6" />
            </span>
            <div className="min-w-0">
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <div className="mt-2 break-words text-base leading-7 text-muted">{children}</div>
            </div>
        </div>
    );
}
