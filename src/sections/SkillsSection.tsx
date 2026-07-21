import SectionHeading from "../components/ui/SectionHeading";
import SkillCategoryCard from "../components/ui/SkillCard";
import SectionSideDecorations from "../components/effects/SectionSideDecorations";
import { skills } from "../data/profile";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrap relative overflow-hidden bg-white/80 backdrop-blur-[2px]">
      <SectionSideDecorations variant={2} />
      <div className="content-inner relative z-10">
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
