import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SectionSideDecorationsProps {
  /** Offset animation phase per section */
  variant?: number;
}

export default function SectionSideDecorations({
  variant = 0,
}: SectionSideDecorationsProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const leftX = useSpring(parallaxX, { stiffness: 60, damping: 22 });
  const leftY = useSpring(parallaxY, { stiffness: 60, damping: 22 });
  const rightX = useSpring(useTransform(parallaxX, (v) => v * -0.85), {
    stiffness: 50,
    damping: 24,
  });
  const rightY = useSpring(useTransform(parallaxY, (v) => v * 0.9), {
    stiffness: 50,
    damping: 24,
  });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onMove = (e: MouseEvent) => {
      const el = wrapRef.current?.closest("section");
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) return;

      const nx = (e.clientX / window.innerWidth - 0.5) * 18;
      const ny = (e.clientY / window.innerHeight - 0.5) * 12;
      parallaxX.set(nx);
      parallaxY.set(ny);
    };

    const onLeave = () => {
      parallaxX.set(0);
      parallaxY.set(0);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [parallaxX, parallaxY]);

  const delay = variant * 0.35;

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Left flank */}
      <motion.div
        style={{ x: leftX, y: leftY }}
        className="absolute bottom-0 left-0 top-0 w-[min(28vw,320px)]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 52 + variant * 4,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
          className="absolute left-[10%] top-[12%] h-44 w-44 rounded-full border border-dashed border-primary/25 md:h-52 md:w-52"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 38 + variant * 3,
            repeat: Infinity,
            ease: "linear",
            delay: delay + 0.5,
          }}
          className="absolute left-[22%] top-[22%] h-28 w-28 rounded-full border border-primary/15"
        />

        <motion.div
          animate={{ y: [0, -14, 0], opacity: [0.35, 0.7, 0.35] }}
          transition={{
            duration: 5 + variant * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="absolute left-[18%] top-[48%] h-3 w-3 rounded-full bg-primary/50 shadow-glow"
        />
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{
            duration: 6.2 + variant * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.8,
          }}
          className="absolute left-[8%] top-[62%] h-2 w-2 rounded-full bg-primary/40"
        />
        <motion.div
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 4.8 + variant * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 1.2,
          }}
          className="absolute left-[30%] top-[72%] h-2.5 w-2.5 rounded-full bg-[#ffd0ae]"
        />

        <svg
          className="absolute left-[12%] top-[44%] h-32 w-20 text-primary/20"
          viewBox="0 0 80 128"
          fill="none"
        >
          <motion.line
            x1="40"
            y1="8"
            x2="40"
            y2="120"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay }}
          />
          <motion.circle
            cx="40"
            cy="40"
            r="4"
            fill="currentColor"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
          />
          <motion.circle
            cx="40"
            cy="88"
            r="3"
            fill="currentColor"
            animate={{ opacity: [0.2, 0.65, 0.2] }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + 0.6,
            }}
          />
        </svg>

        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{
            duration: 7 + variant * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="absolute bottom-[14%] left-[6%] h-24 w-24 rounded-full bg-primary/20 blur-2xl"
        />
      </motion.div>

      {/* Right flank */}
      <motion.div
        style={{ x: rightX, y: rightY }}
        className="absolute bottom-0 right-0 top-0 w-[min(28vw,320px)]"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 44 + variant * 5,
            repeat: Infinity,
            ease: "linear",
            delay: delay + 0.3,
          }}
          className="absolute right-[8%] top-[16%] h-36 w-36 rounded-full border border-primary/20 md:h-44 md:w-44"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 28 + variant * 2,
            repeat: Infinity,
            ease: "linear",
            delay,
          }}
          className="absolute right-[20%] top-[10%] h-20 w-20 rotate-45 border border-primary/15"
        />

        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.15, 0.45, 0.15], y: [0, -8, 0] }}
            transition={{
              duration: 4.5 + i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + i * 0.4,
            }}
            className="absolute h-2 w-2 rounded-sm bg-primary/35"
            style={{
              right: `${14 + i * 9}%`,
              top: `${52 + (i % 2) * 12}%`,
            }}
          />
        ))}

        <svg
          className="absolute right-[10%] top-[28%] h-40 w-40 text-primary/18"
          viewBox="0 0 160 160"
          fill="none"
        >
          <motion.path
            d="M20 140 Q80 20 140 140"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -56] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay }}
          />
          <motion.path
            d="M40 120 Q80 60 120 120"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.6"
            animate={{ strokeDashoffset: [0, 40] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              delay: delay + 0.5,
            }}
          />
        </svg>

        <motion.div
          animate={{ y: [0, 16, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 6.5 + variant * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.4,
          }}
          className="absolute bottom-[18%] right-[16%] h-4 w-4 rounded-full border-2 border-primary/35"
        />

        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 8 + variant * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 0.2,
          }}
          className="absolute bottom-[10%] right-[4%] h-28 w-28 rounded-full bg-[#ffd0ae]/40 blur-2xl"
        />
      </motion.div>
    </div>
  );
}
