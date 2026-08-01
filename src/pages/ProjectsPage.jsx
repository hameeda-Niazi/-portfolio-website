import { useMemo, useState } from 'react';
import { projects, projectCategories } from '../data/portfolioData';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilters from '../components/projects/ProjectFilters';
import PageTransition from '../components/common/PageTransition';
import SectionTitle from '../components/common/SectionTitle';

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageTransition>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected portfolio work"
          subtitle="Each project card is structured for easy future expansion with a dedicated data source and reusable card component."
        />

        <div className="mb-8">
          <ProjectFilters
            categories={projectCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

export default ProjectsPage;
