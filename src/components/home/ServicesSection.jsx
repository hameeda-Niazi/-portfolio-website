import { services } from '../../data/portfolioData';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

function ServicesSection() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Services"
          title="How I help teams"
          subtitle="From idea to production-ready interface, I focus on reliable delivery, elegant interaction design, and measurable UX gains."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}

export default ServicesSection;
