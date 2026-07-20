import SectionHeading from "../components/ui/SectionHeading";
import Accordion from "../components/ui/Accordion";
import { education } from "../data/profile";

export default function EducationSection() {
  return (
    <section id="education" className="section-wrap bg-sidebar/85 backdrop-blur-[2px]">
      <div className="content-inner">
        <SectionHeading
          eyebrow={education.eyebrow}
          heading={education.heading}
        />
        <Accordion items={education.items} />
      </div>
    </section>
  );
}
