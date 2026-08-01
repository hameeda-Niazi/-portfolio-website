import { profile } from '../data/portfolioData';
import SectionTitle from '../components/common/SectionTitle';
import PageTransition from '../components/common/PageTransition';

function ResumePage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Resume"
          title="Professional snapshot"
          subtitle="A concise summary of the core capabilities and product outcomes that define my frontend approach."
        />
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{profile.name}</h2>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{profile.role}</p>
            </div>
            <a href={profile.resumeUrl} className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-amber-500 dark:text-slate-900">Download Resume</a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Summary</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Senior frontend developer with a strong eye for premium visual polish, reusable UI architecture, and smooth production delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{profile.email}</p>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{profile.location}</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default ResumePage;
