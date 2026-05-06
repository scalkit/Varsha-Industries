import { clients } from "@/lib/site-data";

export default function ClientLogoStrip() {
    const marqueeClients = [...clients, ...clients];
    return (
        <div className="overflow-hidden">
            <div className="flex w-max animate-marquee gap-5">
                {marqueeClients.map((client, index) => (
                    <div
                        key={`${client}-${index}`}
                        className="flex min-h-16 min-w-36 items-center justify-center rounded-lg border border-black/10 bg-white px-6 text-center font-bold text-primary shadow-sm"
                    >
                        {client}
                    </div>
                ))}
            </div>
        </div>
    );
}
