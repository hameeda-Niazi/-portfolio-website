import { journey } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

function JourneySection() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Journey"
          title="Experience & learning path"
          subtitle="A timeline of how my approach evolved from hands-on UI exploration into scalable product frontend work."
        />
        <div className="space-y-4">
          {journey.map((item) => (
            <div key={item.year} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">{item.year}</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default JourneySection;
