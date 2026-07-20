import type { RefObject } from "react";
import { useInView } from "../../hooks/useInView";

function proficiencyLabel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  return "Proficient";
}

interface SkillRowProps {
  name: string;
  level: number;
  delay?: number;
}

export function SkillRow({ name, level, delay = 0 }: SkillRowProps) {
  const { ref, inView } = useInView(0.25);

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="group">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-black/80">{name}</span>
        <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {proficiencyLabel(level)}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-black/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary via-[#f0a06a] to-[#ffd0ae] transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

interface SkillCategoryCardProps {
  title: string;
  items: { name: string; level: number }[];
}

export default function SkillCategoryCard({
  title,
  items,
}: SkillCategoryCardProps) {
  return (
    <article className="rounded-xl border border-black/5 bg-sidebar p-6 transition-shadow duration-300 hover:shadow-md">
      <h3 className="mb-5 font-quicksand text-xs font-bold uppercase tracking-[0.15em] text-primary">
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((skill, index) => (
          <SkillRow
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={index * 60}
          />
        ))}
      </div>
    </article>
  );
}
