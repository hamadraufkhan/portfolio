import SectionHeading from "../components/ui/SectionHeading";
import { experience } from "../data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap bg-white/80 backdrop-blur-[2px]">
      <div className="content-inner">
        <SectionHeading
          eyebrow={experience.eyebrow}
          heading={experience.heading}
        />

        <div>
          {experience.items.map((item) => (
            <div key={item.title} className="timeline-item">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary">
                {item.period}
              </span>
              <h3 className="font-playfair text-xl text-black md:text-2xl">
                {item.title}
              </h3>
              <p className="mb-2 text-sm font-medium text-black/60">
                {item.company}
              </p>
              <p className="text-[15px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
