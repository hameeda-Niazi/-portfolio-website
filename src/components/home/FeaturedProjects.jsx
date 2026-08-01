import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolioData';
import ProjectCard from '../../components/projects/ProjectCard';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <AnimatedSection>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected portfolio work"
          subtitle="A curated set of responsive product builds designed to show clarity, polish, and thoughtful frontend execution."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/projects" className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-[#5c4337] transition hover:border-[#b88a6a] hover:text-[#8c5b45]">Explore All Projects</Link>
        </div>
      </section>
    </AnimatedSection>
  );
}

export default FeaturedProjects;
