type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-wine">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none text-ink sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
