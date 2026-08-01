import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile } from '../../data/portfolioData';

function Footer() {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-[#fffaf3]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-[#2f241d]">Hameeda</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Frontend Developer crafting premium, responsive product experiences with strong visual clarity.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Quick Links</h4>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>Home</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Connect</h4>
          <div className="mt-4 flex gap-3 text-[#6f5345]">
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white p-3" aria-label="GitHub"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-stone-300 bg-white p-3" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-stone-300 bg-white p-3" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-sm text-slate-500">
        © 2026 Hameeda. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
