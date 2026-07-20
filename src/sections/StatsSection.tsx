import type { RefObject } from "react";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { stats } from "../data/profile";
import { asset } from "../lib/asset";

function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, { start: inView });

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="text-center">
      <p className="font-playfair text-4xl font-normal text-white md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-white/80">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const bg = asset("/backgrounds/hero-cloud.png");

  return (
    <section
      className="section-wrap bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(232,120,58,0.9), rgba(212,101,40,0.88)), url('${bg}')`,
      }}
    >
      <div className="content-inner">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
