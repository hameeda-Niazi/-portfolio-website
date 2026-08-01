import { profile } from '../data/portfolioData';
import SectionTitle from '../components/common/SectionTitle';
import PageTransition from '../components/common/PageTransition';

function AboutPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About"
          title="A calm, design-aware engineering style"
          subtitle="I bring together polished interface design, reusable component thinking, and a product-minded approach to frontend delivery."
        />
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Profile</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            I’m {profile.name}, a {profile.role} based in {profile.location}. My work centers on experiences that feel premium, intuitive, and trustworthy — especially for product launches, personal brands, and service-led businesses.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            The goal is always the same: turn complex functionality into a clear, elegant user journey with maintainable engineering behind it.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

export default AboutPage;
