import { stats } from "@/lib/site-data";

export default function StatsRibbon() {
    return (
        <section className="bg-primary py-12 text-white">
            <div className="mx-auto grid max-w-screen-xl grid-cols-2 gap-y-8 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.label}
                            className={`text-center ${index !== 0 ? "md:border-l md:border-white/20" : ""}`}
                        >
                            <Icon className="mx-auto mb-4 h-8 w-8 text-white" />
                            <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                            <div className="mt-2 text-sm text-white/75">{stat.label}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
