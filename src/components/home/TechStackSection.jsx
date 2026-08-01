import { techStack } from '../../data/portfolioData';
import AnimatedSection from '../common/AnimatedSection';

function TechStackSection() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Tech Stack</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((item) => (
              <span key={item} className="rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-950/50 dark:text-amber-200">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default TechStackSection;
