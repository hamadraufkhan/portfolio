import {
  Cloud,
  GitBranch,
  Layers,
  MessageSquare,
  Server,
  Compass,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { services } from "../data/profile";

const iconMap = {
  architecture: Layers,
  api: Server,
  cloud: Cloud,
  events: MessageSquare,
  devops: GitBranch,
  consult: Compass,
};

export default function ServicesSection() {
  return (
    <section id="services" className="section-wrap bg-sidebar/85 backdrop-blur-[2px]">
      <div className="content-inner">
        <SectionHeading
          eyebrow={services.eyebrow}
          heading={services.heading}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.items.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Server;
            return (
              <div
                key={item.title}
                className="group rounded-lg bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-quicksand text-base font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
