import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import SectionHeader from "@/components/SectionHeader";
import { aboutParagraphs, founderProfiles, values } from "@/lib/site-data";

export default function AboutPage() {
    return (
        <>
            <InnerHero title="About Us" />
            <section className="py-16 md:py-24">
                <div className="mx-auto grid max-w-screen-xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
                    <div>
                        <SectionHeader eyebrow="WHO WE ARE" title="About the Company" centered={false} />
                        <div className="mt-8 space-y-5 leading-8 text-muted">
                            {aboutParagraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                            alt="Manufacturing facility"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 45vw"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-soft py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="WHY CHOOSE US" title="Our Values" />
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => {
                            const Icon = value.icon;
                            return (
                                <div key={value.title} className="rounded-lg bg-white p-6 shadow-sm">
                                    <Icon className="h-10 w-10 text-amber" />
                                    <h3 className="mt-5 text-xl font-bold text-primary">{value.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-muted">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader eyebrow="LEADERSHIP" title="Meet Our Founders" />
                    <div className="mx-auto mt-12 grid max-w-3xl gap-6">
                        {founderProfiles.map((founder) => (
                            <div key={founder.name} className="rounded-lg border border-black/10 bg-white p-8 text-center shadow-sm">
                                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-neutral text-4xl font-black text-primary">
                                    VI
                                </div>
                                <h3 className="mt-6 text-2xl font-bold text-primary">{founder.name}</h3>
                                <p className="mt-1 font-bold text-amber">{founder.role}</p>
                                <p className="mt-4 leading-7 text-muted">{founder.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
