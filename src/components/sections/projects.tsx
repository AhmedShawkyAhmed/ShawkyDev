import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/data";
import { Apple, Github, PlayStore } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { title, description, projects } = PROJECTS_DATA;
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section id="projects" className="section-shell relative overflow-hidden">
      <div className="container">
        <SectionIntro eyebrow="Selected Work" title={title} description={description} align="left" />

        {featuredProject && (
          <div className="surface-panel mt-14 overflow-hidden rounded-[2rem]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-code text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Featured case study
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {featuredProject.rating.toFixed(1)} rating
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/70 bg-background/70">
                        <Image
                          src={featuredProject.appIcon.imageUrl}
                          alt={`${featuredProject.title} icon`}
                          fill
                          className="object-contain p-2"
                          data-ai-hint={featuredProject.appIcon.imageHint}
                        />
                      </div>
                      <div>
                        <h3 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">{featuredProject.title}</h3>
                        <p className="mt-1 font-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {featuredProject.supportedPlatforms.join(" • ")}
                        </p>
                      </div>
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="metric-tile rounded-[1.4rem] px-4 py-4">
                      <div className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Downloads</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">{featuredProject.downloads}</div>
                    </div>
                    <div className="metric-tile rounded-[1.4rem] px-4 py-4">
                      <div className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Stack</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">{featuredProject.frameworks.slice(0, 2).join(" + ")}</div>
                    </div>
                    <div className="metric-tile rounded-[1.4rem] px-4 py-4">
                      <div className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Delivery</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">{featuredProject.category === "package" ? "Reusable package" : "Production app"}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.frameworks.slice(0, 5).map((framework) => (
                        <Badge key={framework} variant="secondary" className="bg-primary/10 text-primary">
                          {framework}
                        </Badge>
                      ))}
                      {featuredProject.languages.slice(0, 3).map((language) => (
                        <Badge key={language} variant="outline" className="border-primary/30 text-foreground/80">
                          {language}
                        </Badge>
                      ))}
                    </div>

                    <ul className="grid gap-2 md:grid-cols-2">
                      {featuredProject.features.slice(0, 4).map((feature) => (
                        <li
                          key={`${featuredProject.slug}-${feature}`}
                          className="flex items-start gap-2 rounded-[1.2rem] border border-border/60 bg-muted/20 px-4 py-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <Link href={`/projects/${featuredProject.slug}`}>
                      View full case study <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  {featuredProject.githubUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {featuredProject.appStoreUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={featuredProject.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="App Store link">
                        <Apple className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {featuredProject.playStoreUrl && (
                    <Button asChild variant="outline" size="icon">
                      <Link href={featuredProject.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Play Store link">
                        <PlayStore className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <div className="relative min-h-[320px] border-l border-border/50 bg-background/40">
                <Image
                  src={featuredProject.cardImage.imageUrl}
                  alt={featuredProject.cardImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={featuredProject.cardImage.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/90" />
              </div>
            </div>
          </div>
        )}

        <div className="mt-14 flex items-center justify-between gap-4">
          <div>
            <h3 className="font-headline text-2xl font-semibold tracking-tight">More production work</h3>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Additional apps and systems across enterprise, mobility, logistics, commerce, and internal platform tooling.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.slug} item={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
