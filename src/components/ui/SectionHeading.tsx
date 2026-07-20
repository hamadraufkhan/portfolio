interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 md:mb-14 ${className}`}>
      <span
        className={`mb-2 block text-xs uppercase tracking-[0.25em] ${
          dark ? "text-primary" : "text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-playfair text-3xl font-normal md:text-4xl lg:text-[2.75rem] ${
          dark ? "text-black" : "text-black"
        }`}
      >
        {heading}
      </h2>
    </div>
  );
}
