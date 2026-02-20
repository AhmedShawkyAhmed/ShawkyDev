import { PROJECTS_DATA } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function Projects() {
  const { title, description, projects } = PROJECTS_DATA;

  return (
    <section id="projects">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} item={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
