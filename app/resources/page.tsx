import { Download, FileText } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import SectionHeader from "@/components/SectionHeader";
import { resources } from "@/lib/site-data";

export default function ResourcesPage() {
    return (
        <>
            <InnerHero title="Resources & Downloads" />
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        eyebrow="DOWNLOADS"
                        title="Technical Resources"
                        subtitle="Actual files will be linked here as updated Varsha Industry documents are prepared."
                    />
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {resources.map((resource) => (
                            <div key={resource.title} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                                <FileText className="h-10 w-10 text-amber" />
                                <h3 className="mt-5 text-xl font-bold text-primary">{resource.title}</h3>
                                <p className="mt-3 min-h-24 text-sm leading-6 text-muted">{resource.description}</p>
                                <button type="button" className="btn-amber mt-5 w-full justify-center" disabled>
                                    <Download className="h-4 w-4" />
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
