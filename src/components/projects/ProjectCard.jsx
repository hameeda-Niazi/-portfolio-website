import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-[0_20px_50px_rgba(70,52,40,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(70,52,40,0.14)]">
      <img src={project.image} alt={project.name} className="h-56 w-full object-cover" />

      <div className="space-y-5 p-6">
        <div>
          <span className="inline-flex rounded-full bg-[#f3e6da] px-3 py-1 text-xs font-semibold text-[#8c5b45]">{project.category}</span>
          <h3 className="mt-3 text-2xl font-bold text-[#2f241d]">{project.name}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#2f241d]">Technologies</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-slate-700">{tech}</span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-[#2f241d]">Features</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#b88a6a]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#2f241d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#5c4337]">
            <FaExternalLinkAlt size={12} /> Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-semibold text-[#5c4337] transition hover:border-[#b88a6a] hover:text-[#8c5b45]">
            <FaGithub size={12} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
