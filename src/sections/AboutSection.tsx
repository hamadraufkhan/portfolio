import {
  Cloud,
  Database,
  Layers,
  Server,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { about } from "../data/profile";

const iconMap = {
  server: Server,
  layers: Layers,
  cloud: Cloud,
  database: Database,
};

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap bg-white/80 backdrop-blur-[2px]">
      <div className="content-inner">
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-[15px] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Server;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-lg bg-sidebar p-5 text-center transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-quicksand text-xs font-semibold uppercase tracking-wide text-black">
                    {item.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-sidebar p-7 text-center md:p-9">
          <h3 className="font-playfair text-xl text-black md:text-2xl">
            {about.ctaHeading}
          </h3>
        </div>
      </div>
    </section>
  );
}
