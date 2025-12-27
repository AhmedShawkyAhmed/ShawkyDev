import { PACKAGES_DATA } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function Packages() {
  const { title, description, packages } = PACKAGES_DATA;
  return (
    <section id="packages" className="bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map(pkg => (
            <ProjectCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
