import SectionHeading from "../components/ui/SectionHeading";
import SkillCategoryCard from "../components/ui/SkillCard";
import { skills } from "../data/profile";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrap bg-white/80 backdrop-blur-[2px]">
      <div className="content-inner">
        <SectionHeading eyebrow={skills.eyebrow} heading={skills.heading} />
        <p className="mb-10 max-w-2xl text-[15px] leading-relaxed">
          {skills.intro}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.categories.map((category) => (
            <SkillCategoryCard
              key={category.title}
              title={category.title}
              items={category.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
