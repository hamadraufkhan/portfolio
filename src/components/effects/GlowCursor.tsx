import { useEffect, useRef, useState } from "react";

interface RayBurst {
  id: number;
  angle: number;
  length: number;
  duration: number;
}

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [rays, setRays] = useState<RayBurst[]>([]);
  const idRef = useRef(0);
  const lastSpawn = useRef(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const spawnBurst = (count = 4) => {
      if (reduced) return;
      const next: RayBurst[] = [];
      for (let i = 0; i < count; i++) {
        idRef.current += 1;
        next.push({
          id: idRef.current,
          angle: (360 / count) * i + Math.random() * 20,
          length: 30 + Math.random() * 40,
          duration: 560 + Math.random() * 320,
        });
      }
      setRays((prev) => [...prev.slice(-18), ...next]);
    };

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      visibleRef.current = true;
      setVisible(true);

      const now = performance.now();
      if (now - lastSpawn.current > 120) {
        lastSpawn.current = now;
        spawnBurst(3);
      }
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
      setRays([]);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, input, textarea, select, label, [role='button']"
      );
      setHovering(Boolean(interactive));
    };

    const interval = window.setInterval(() => {
      if (!visibleRef.current) return;
      spawnBurst(5);
    }, 850);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const removeRay = (id: number) => {
    setRays((prev) => prev.filter((r) => r.id !== id));
  };

  if (!visible) return null;

  return (
    <div
      className="cursor-root"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      aria-hidden
    >
      <div className={`cursor-dot ${hovering ? "is-hovering" : ""}`} />
      <div className="cursor-ring" />

      {rays.map((ray) => (
        <span
          key={ray.id}
          className="cursor-ray"
          style={{
            ["--ray-angle" as string]: `${ray.angle}deg`,
            ["--ray-length" as string]: `${ray.length}px`,
            ["--ray-duration" as string]: `${ray.duration}ms`,
          }}
          onAnimationEnd={() => removeRay(ray.id)}
        />
      ))}
    </div>
  );
}
