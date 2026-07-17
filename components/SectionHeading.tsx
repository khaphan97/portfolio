export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted sm:text-base">{subtitle}</p>}
    </div>
  );
}
