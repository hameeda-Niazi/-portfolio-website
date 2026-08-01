import { skills } from '../data/portfolioData';
import SkillBar from '../components/common/SkillBar';
import SectionTitle from '../components/common/SectionTitle';
import PageTransition from '../components/common/PageTransition';

function SkillsPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Skills"
          title="Frontend capabilities"
          subtitle="A practical toolkit focused on performance, maintainability, and polished product delivery."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default SkillsPage;
