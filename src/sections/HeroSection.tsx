import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { hero, profile, stats } from "../data/profile";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";

function HeroStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, inView } = useInView(0.2);
  const count = useCountUp(value, { start: inView });

  return (
    <div ref={ref as RefObject<HTMLDivElement>}>
      <p className="font-[Inter,sans-serif] text-3xl font-black leading-none text-primary md:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55 md:text-xs">
        {label}
      </p>
    </div>
  );
}

export default function HeroSection() {
  const [imgSrc, setImgSrc] = useState(hero.image);
  const sectionRef = useRef<HTMLElement>(null);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 110, damping: 22, mass: 0.6 });
  const y = useSpring(targetY, { stiffness: 110, damping: 22, mass: 0.6 });
  const glowX = useSpring(useTransform(targetX, (v) => v * 0.55), {
    stiffness: 70,
    damping: 26,
  });
  const glowY = useSpring(useTransform(targetY, (v) => v * 0.55), {
    stiffness: 70,
    damping: 26,
  });
  const imgX = useSpring(useTransform(targetX, (v) => v * 1.35), {
    stiffness: 90,
    damping: 18,
  });
  const imgY = useSpring(useTransform(targetY, (v) => v * 1.35), {
    stiffness: 90,
    damping: 18,
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      targetX.set(nx * 22);
      targetY.set(ny * 14);
    };

    const onLeave = () => {
      targetX.set(0);
      targetY.set(0);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [targetX, targetY]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff8f3] via-white to-[#fff0e4]"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#ffd0ae]/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-screen lg:grid-cols-2">
        {/* Left — copy, CTA, stats */}
        <div className="flex flex-col justify-between px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-2.5"
            >
              <Award className="h-4 w-4 text-primary" strokeWidth={2.2} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                {hero.tagline}
              </span>
            </motion.div>

            <h1 className="mb-8 font-[Inter,sans-serif] text-[clamp(2.75rem,8vw,5.5rem)] font-black uppercase leading-[0.92] tracking-[-0.02em] text-ink">
              {hero.headline.map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08 + i * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
              className="max-w-md text-base leading-relaxed text-ink/70 md:text-lg"
            >
              {hero.subtitle}{" "}
              <span className="font-bold text-ink">{hero.subtitleEmphasis}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href={hero.ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-primary-dark hover:shadow-[0_8px_24px_rgba(232,120,58,0.35)]"
              >
                {hero.ctaPrimary.label}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </a>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <Award className="h-4 w-4 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight text-ink">
                    {hero.badge.title}
                  </p>
                  <p className="text-xs text-ink/55">{hero.badge.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-primary/15 pt-8 lg:mt-0"
          >
            {stats.slice(0, 3).map((stat) => (
              <HeroStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>

        {/* Right — portrait with theme shadow */}
        <div className="relative flex items-end justify-center px-6 pb-10 pt-6 lg:items-center lg:px-10 lg:py-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fff8f3] to-transparent lg:w-32" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ x, y }}
            className="relative w-full max-w-sm lg:max-w-md"
          >
            {/* Orange glow behind image */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-primary/20 via-[#ffd0ae]/30 to-primary/10 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-primary/15 bg-white/80 p-1.5 shadow-[0_4px_24px_rgba(26,21,18,0.08),0_24px_64px_rgba(232,120,58,0.22)]">
              <div className="relative overflow-hidden rounded-[0.875rem]">
                {/* Warm theme tint on edges */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-primary/5 via-transparent to-[#ffd0ae]/10" />

                <motion.img
                  src={imgSrc}
                  alt="Hamad Rauf Khan working on a laptop in a server room"
                  width={747}
                  height={1024}
                  decoding="async"
                  loading="eager"
                  fetchPriority="high"
                  onError={() => setImgSrc(profile.avatar)}
                  style={{ x: imgX, y: imgY, scale: 1.06 }}
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>

            {/* Soft ground shadow */}
            <motion.div
              style={{ x }}
              className="pointer-events-none absolute -bottom-3 left-1/2 h-6 w-[72%] -translate-x-1/2 rounded-[100%] bg-primary/25 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
