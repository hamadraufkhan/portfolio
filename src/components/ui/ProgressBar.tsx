import type { RefObject } from "react";
import { useInView } from "../../hooks/useInView";

interface ProgressBarProps {
  name: string;
  level: number;
}

export default function ProgressBar({ name, level }: ProgressBarProps) {
  const { ref, inView } = useInView(0.4);

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className="mb-6">
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-black/80">{name}</span>
        <span className="text-black/60">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#e8e8e8]">
        <div
          className="h-full rounded-full bg-primary transition-all duration-[1.2s] ease-out"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}
