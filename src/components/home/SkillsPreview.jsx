import { skills } from '../../data/portfolioData';
import SkillBar from '../common/SkillBar';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

function SkillsPreview() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Core strengths"
          subtitle="A balanced mix of user-facing craftsmanship and production-ready frontend engineering."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default SkillsPreview;
