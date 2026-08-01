import { testimonials } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

function TestimonialsSection() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title="What collaborators say"
          subtitle="Working with teams that care about product detail means thoughtful execution at every layer."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <p className="text-base leading-8 text-slate-700 dark:text-slate-200">“{item.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{item.name}</footer>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </blockquote>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default TestimonialsSection;
