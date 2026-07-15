interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          {subtitle}
        </p>
      )}

      <h2
        className="
          text-3xl
          font-black
          leading-tight
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>
    </div>
  );
}