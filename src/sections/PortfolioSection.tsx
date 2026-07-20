import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { portfolio, type PortfolioCategory } from "../data/profile";

function ProjectMedia({
  title,
  image,
  video,
}: {
  title: string;
  image: string;
  video?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    const onCanPlay = () => setReady(true);
    const onPlaying = () => setActive(true);
    const onError = () => {
      setActive(false);
      setReady(false);
    };

    el.addEventListener("canplay", onCanPlay);
    el.addEventListener("playing", onPlaying);
    el.addEventListener("error", onError);

    return () => {
      el.removeEventListener("canplay", onCanPlay);
      el.removeEventListener("playing", onPlaying);
      el.removeEventListener("error", onError);
    };
  }, [video]);

  const handleEnter = async () => {
    const el = videoRef.current;
    if (!el || !video) return;
    try {
      el.muted = true;
      await el.play();
      setActive(true);
    } catch {
      setActive(false);
    }
  };

  const handleLeave = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    try {
      el.currentTime = 0;
    } catch {
      /* ignore */
    }
    setActive(false);
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
          active ? "scale-110 opacity-0" : "opacity-100 group-hover:scale-105"
        }`}
      />
      {video ? (
        <>
          <video
            ref={videoRef}
            src={video}
            muted
            loop
            playsInline
            preload="metadata"
            poster={image}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              active && ready ? "opacity-100" : "opacity-0"
            }`}
          />
          <span
            className={`absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm backdrop-blur transition-opacity duration-300 ${
              active ? "opacity-0" : "opacity-100"
            }`}
          >
            <Play className="h-3.5 w-3.5 fill-current" />
          </span>
        </>
      ) : null}
    </div>
  );
}

export default function PortfolioSection() {
  const [active, setActive] = useState<PortfolioCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return portfolio.items;
    return portfolio.items.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="work" className="section-wrap bg-sidebar/85 backdrop-blur-[2px]">
      <div className="content-inner-full">
        <SectionHeading
          eyebrow={portfolio.eyebrow}
          heading={portfolio.heading}
        />
        <p className="mb-8 max-w-2xl text-[15px] leading-relaxed">
          {portfolio.intro}
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          {portfolio.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                active === cat.id
                  ? "bg-primary text-white shadow-glow"
                  : "bg-white text-ink/65 ring-1 ring-primary/10 hover:text-primary hover:ring-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((project) => {
            const cardClass =
              "group relative block overflow-hidden rounded-3xl bg-white ring-1 ring-primary/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow-lg hover:ring-primary/25";

            const inner = (
              <>
                <ProjectMedia
                  title={project.title}
                  image={project.image}
                  video={project.video}
                />
                <div className="relative p-4">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {project.tag}
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sidebar text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <h3 className="font-playfair text-base leading-snug text-ink md:text-[17px]">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink/55">
                    {project.description}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </>
            );

            if (project.url) {
              return (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </a>
              );
            }

            return (
              <article key={project.id} className={cardClass}>
                {inner}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
