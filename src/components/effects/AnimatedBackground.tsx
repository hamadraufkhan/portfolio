import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let mouse = { x: -9999, y: -9999 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.floor((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: 1.2 + Math.random() * 2.2,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouse = { x: -9999, y: -9999 };
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // soft pulsing aurora blobs
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.0004);
      const blobs = [
        { x: width * 0.18, y: height * 0.22, r: 220 + pulse * 40, c: "255,170,110" },
        { x: width * 0.78, y: height * 0.28, r: 260 + (1 - pulse) * 50, c: "232,120,58" },
        { x: width * 0.55, y: height * 0.78, r: 280 + pulse * 30, c: "255,200,150" },
      ];
      for (const b of blobs) {
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.c},0.22)`);
        g.addColorStop(0.55, `rgba(${b.c},0.08)`);
        g.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const linkDist = 130;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        const dm = Math.hypot(dxm, dym);
        if (dm < 160) {
          p.vx += (dxm / (dm || 1)) * 0.02;
          p.vy += (dym / (dm || 1)) * 0.02;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const a = 1 - d / linkDist;
            ctx.strokeStyle = `rgba(232,120,58,${0.18 * a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.fillStyle = "rgba(232,120,58,0.55)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // sweeping light arcs
      const arcY = height * (0.25 + 0.08 * Math.sin(t * 0.0005));
      ctx.strokeStyle = "rgba(232,120,58,0.12)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(
        width * 0.5,
        arcY,
        width * 0.55,
        80 + 20 * Math.sin(t * 0.0007),
        Math.sin(t * 0.0003) * 0.2,
        0,
        Math.PI * 2
      );
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [reduced]);

  return (
    <div className="site-bg" aria-hidden>
      <div className="site-bg-wash" />
      <div className="site-bg-mesh" />
      <div className="site-bg-grid" />
      <div className="site-bg-noise" />
      <div className="site-bg-beam site-bg-beam-a" />
      <div className="site-bg-beam site-bg-beam-b" />
      <div className="site-bg-beam site-bg-beam-c" />
      <div className="site-bg-ring site-bg-ring-a" />
      <div className="site-bg-ring site-bg-ring-b" />
      {!reduced && <canvas ref={canvasRef} className="site-bg-canvas" />}
    </div>
  );
}
