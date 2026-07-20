import { useState } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import AnimatedBackground from "../effects/AnimatedBackground";
import GlowCursor from "../effects/GlowCursor";
import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

const SECTION_IDS = [
  "home",
  "about",
  "services",
  "skills",
  "education",
  "experience",
  "work",
  "contact",
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  return (
    <div id="colorlib-page" className="relative min-h-screen bg-transparent">
      <AnimatedBackground />
      <GlowCursor />
      <MobileHeader
        open={sidebarOpen}
        onToggle={() => setSidebarOpen((v) => !v)}
      />
      <Sidebar
        activeId={activeId}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main
        id="colorlib-main"
        className="main-content relative z-10 min-h-screen bg-transparent"
      >
        {children}
      </main>
    </div>
  );
}
