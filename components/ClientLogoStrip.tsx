"use client";

import { useState } from "react";
import { clients } from "@/lib/site-data";

export default function ClientLogoStrip() {
    const marqueeClients = [...clients, ...clients];
    return (
        <div className="client-marquee overflow-hidden py-5">
            <div className="flex w-max animate-marquee items-center gap-20 pr-20 sm:gap-24 sm:pr-24 lg:gap-28 lg:pr-28">
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
        <div className="group flex min-h-16 min-w-36 shrink-0 items-center justify-center opacity-90 transition duration-300 hover:-translate-y-1 hover:opacity-100 sm:min-w-44">
            {showLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 max-w-36 object-contain sm:max-w-44"
                    loading="lazy"
                    onError={() => setFailed(true)}
                />
            ) : (
                <span className="text-center text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {client.name}
                </span>
            )}
        </div>
    );
}
