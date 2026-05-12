import { Building2, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import InnerHero from "@/components/InnerHero";
import { brand } from "@/lib/site-data";

export default function ContactPage() {
    return (
        <>
            <InnerHero title="Contact Us" />
            <section className="bg-soft py-16 md:py-24">
                <div className="mx-auto grid max-w-screen-xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber">
                            CONTACT
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">Get in Touch</h2>
                        <p className="mt-4 text-muted">We&apos;re here to help you find the right equipment.</p>

                        <div className="mt-8 space-y-6">
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

                        <a
                            href={brand.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 flex min-h-48 items-center justify-center rounded-lg border border-black/10 bg-white text-center font-bold text-primary shadow-sm hover:text-amber"
                        >
                            Open Google Maps Location
                        </a>
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
        <div className="flex min-w-0 gap-4 rounded-lg bg-white p-5 shadow-sm">
            <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-amber" />
            <div className="min-w-0">
                <h3 className="font-bold text-primary">{title}</h3>
                <div className="mt-2 break-words text-sm leading-6 text-muted">{children}</div>
            </div>
        </div>
    );
}
