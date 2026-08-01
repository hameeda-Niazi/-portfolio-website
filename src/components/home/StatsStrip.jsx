import Counter from '../common/Counter';
import { stats } from '../../data/portfolioData';
import AnimatedSection from '../common/AnimatedSection';

function StatsStrip() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <p className="text-3xl font-black text-slate-900 dark:text-white"><Counter end={stat.value} suffix={stat.suffix} /></p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default StatsStrip;
