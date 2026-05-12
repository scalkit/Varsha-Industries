"use client";

import { useState } from "react";
import { clients } from "@/lib/site-data";

export default function ClientLogoStrip() {
    const marqueeClients = [...clients, ...clients];
    return (
        <div className="client-marquee overflow-hidden py-2">
            <div className="flex w-max animate-marquee gap-5 pr-5">
                {marqueeClients.map((client, index) => (
                    <ClientLogoCard key={`${client.name}-${index}`} client={client} />
                ))}
            </div>
        </div>
    );
}

function ClientLogoCard({
    client,
}: {
    client: (typeof clients)[number];
}) {
    const [failed, setFailed] = useState(false);
    const showLogo = Boolean(client.logo) && !failed;

    return (
        <div className="group flex min-h-24 w-64 shrink-0 items-center gap-4 rounded-lg border border-black/10 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-xl sm:w-72">
            <div className="flex h-14 w-20 shrink-0 items-center justify-center rounded-md bg-neutral p-2 ring-1 ring-black/5">
                {showLogo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="max-h-10 max-w-full object-contain"
                        loading="lazy"
                        onError={() => setFailed(true)}
                    />
                ) : (
                    <span className="text-sm font-black tracking-wide text-amber">
                        {client.initials}
                    </span>
                )}
            </div>
            <div className="min-w-0">
                <h3 className="line-clamp-2 text-base font-black leading-snug text-primary">
                    {client.name}
                </h3>
            </div>
        </div>
    );
}
