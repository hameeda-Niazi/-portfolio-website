import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../../data/portfolioData';

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(201,167,145,0.24),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(227,206,191,0.45),_transparent_36%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="inline-flex rounded-full bg-[#f2e7dd] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8c5b45]">
            {profile.role}
          </span>

         <h1 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.04em] text-[#2f241d] dark:text-[#f8e8c8] sm:text-5xl lg:text-6xl">
            Creating polished interfaces that feel calm, modern, and memorable.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{profile.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-[#2f241d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5c4337]">
              Explore Projects <FaArrowRight size={14} />
            </Link>
            <a href={profile.resumeUrl} className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-[#5c4337] transition hover:border-[#b88a6a] hover:text-[#8c5b45]">
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white p-3 text-[#6f5345] transition hover:-translate-y-0.5 hover:text-[#8c5b45]">
              <FaGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white p-3 text-[#6f5345] transition hover:-translate-y-0.5 hover:text-[#8c5b45]">
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="rounded-[32px] border border-stone-200 bg-white p-4 shadow-[0_20px_60px_rgba(70,52,40,0.08)]">
          <div className="rounded-[24px] bg-gradient-to-br from-[#fffdf9] to-[#f4e8df] p-4 sm:p-6">
            <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-sm">
              <img
                src={profile.profileImage}
                alt={`${profile.name} portrait`}
                className="h-[420px] w-full object-cover object-center sm:h-[500px]"
              />
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/90 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Current focus</p>
                <p className="mt-2 text-lg font-bold text-[#2f241d]">Interface systems</p>
              </div>
              <div className="rounded-2xl bg-white/90 p-5 shadow-sm">
                <p className="text-sm text-slate-500">Based in</p>
                <p className="mt-2 text-lg font-bold text-[#2f241d]">{profile.location}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#2f241d] p-5 text-white">
              <p className="text-sm text-white/75">What I deliver</p>
              <p className="mt-2 text-lg font-semibold">Premium UI, strong component architecture, and polished user journeys.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
