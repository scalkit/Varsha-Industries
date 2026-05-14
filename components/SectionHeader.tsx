type SectionHeaderProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
};

export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    centered = true,
}: SectionHeaderProps) {
    return (
        <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/70">
                {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-base md:text-lg text-muted">{subtitle}</p>
            )}
        </div>
    );
}
