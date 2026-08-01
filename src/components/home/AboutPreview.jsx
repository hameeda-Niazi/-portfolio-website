import { profile } from '../../data/portfolioData';
import AnimatedSection from '../common/AnimatedSection';

function AboutPreview() {
  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[30px] bg-[#2f241d] shadow-[0_20px_60px_rgba(70,52,40,0.16)]">
            <img
              src={profile.profileImage}
              alt={`${profile.name} profile`}
              className="h-[360px] w-full object-cover object-center sm:h-[420px]"
            />
          </div>

          <div className="rounded-[30px] border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8c5b45]">About Me</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f241d]">A thoughtful frontend developer with a product-first eye.</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              I’m {profile.name}, a {profile.role} focused on building elegant, user-centered web experiences that feel intentional from the first scroll to the last interaction.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              My approach blends clean component structure, premium motion, and a strong respect for accessibility, responsiveness, and maintainability.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default AboutPreview;
