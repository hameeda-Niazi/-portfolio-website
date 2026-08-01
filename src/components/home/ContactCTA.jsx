import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

function ContactCTA() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-slate-900 px-6 py-10 text-center text-white shadow-xl dark:bg-slate-800 sm:px-10">
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s build something polished.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            I’m available for frontend roles, freelance product work, and premium interface design collaborations.
          </p>
          <Link to="/contact" className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">Contact Me</Link>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default ContactCTA;
