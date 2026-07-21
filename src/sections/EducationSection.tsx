import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import SectionSideDecorations from "../components/effects/SectionSideDecorations";
import { education } from "../data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="section-wrap relative overflow-hidden bg-sidebar/85 backdrop-blur-[2px]">
      <SectionSideDecorations variant={3} />
      <div className="content-inner relative z-10">
        <SectionHeading
          eyebrow={education.eyebrow}
          heading={education.heading}
        />
        <Accordion items={education.items} />
      </div>
    </section>
  );
}
