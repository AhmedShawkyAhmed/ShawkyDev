import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/data";
import { Apple, Github, PlayStore } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FEATURED_CASE_STUDY_COUNT = 3;

export function FeaturedProjects() {
  const { projects } = PROJECTS_DATA;
  const featuredProjects = projects.slice(0, FEATURED_CASE_STUDY_COUNT);
  const [heroProject, ...secondaryFeatured] = featuredProjects;

  if (!heroProject) return null;

  return (
    <section id="projects" className="section-shell relative overflow-hidden">
      <div className="container">
        <SectionIntro
          eyebrow="Featured Case Studies"
          title="Projects"
          description="Top projects with clear architecture choices, cross-platform execution, and production outcomes."
          align="left"
        />

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
                    {heroProject.rating.toFixed(1)} rating
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-border/70 bg-background/70">
                      <Image
                        src={heroProject.appIcon.imageUrl}
                        alt={`${heroProject.title} icon`}
                        fill
                        className="object-contain p-2"
                        data-ai-hint={heroProject.appIcon.imageHint}
                      />
                    </div>
                    <div>
                      <h3 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">{heroProject.title}</h3>
                      <p className="mt-1 font-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {heroProject.supportedPlatforms.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{heroProject.description}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="metric-tile rounded-[1.4rem] px-4 py-4">
                    <div className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Scope</div>
                    <div className="mt-2 text-sm leading-6 text-foreground">{heroProject.scanHighlights.scope}</div>
                  </div>
                  <div className="metric-tile rounded-[1.4rem] px-4 py-4">
                    <div className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Architecture</div>
                    <div className="mt-2 text-sm leading-6 text-foreground">{heroProject.scanHighlights.architecture}</div>
                  </div>
                  <div className="metric-tile rounded-[1.4rem] px-4 py-4">
                    <div className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Impact</div>
                    <div className="mt-2 text-sm leading-6 text-foreground">{heroProject.scanHighlights.impact}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {heroProject.frameworks.slice(0, 5).map((framework) => (
                      <Badge key={framework} variant="secondary" className="bg-primary/10 text-primary">
                        {framework}
                      </Badge>
                    ))}
                    {heroProject.languages.slice(0, 3).map((language) => (
                      <Badge key={language} variant="outline" className="border-primary/30 text-foreground/80">
                        {language}
                      </Badge>
                    ))}
                  </div>

                  <ul className="grid gap-2">
                    <li className="rounded-[1.2rem] border border-border/60 bg-muted/20 px-4 py-3 text-sm leading-6 text-muted-foreground">
                      <span className="mr-1 font-code text-[10px] uppercase tracking-[0.16em] text-foreground/70">Problem:</span>
                      {heroProject.caseStudy.problem}
                    </li>
                    <li className="rounded-[1.2rem] border border-border/60 bg-muted/20 px-4 py-3 text-sm leading-6 text-muted-foreground">
                      <span className="mr-1 font-code text-[10px] uppercase tracking-[0.16em] text-foreground/70">Solution:</span>
                      {heroProject.caseStudy.solution}
                    </li>
                    <li className="rounded-[1.2rem] border border-border/60 bg-muted/20 px-4 py-3 text-sm leading-6 text-muted-foreground">
                      <span className="mr-1 font-code text-[10px] uppercase tracking-[0.16em] text-foreground/70">Impact:</span>
                      {heroProject.caseStudy.impact}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link href={`/projects/${heroProject.slug}`}>
                    View full case study <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                {heroProject.githubUrl && (
                  <Button asChild variant="outline" size="icon">
                    <Link href={heroProject.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {heroProject.appStoreUrl && (
                  <Button asChild variant="outline" size="icon">
                    <Link href={heroProject.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="App Store link">
                      <Apple className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
                {heroProject.playStoreUrl && (
                  <Button asChild variant="outline" size="icon">
                    <Link href={heroProject.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Play Store link">
                      <PlayStore className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative min-h-[320px] border-l border-border/50 bg-background/40">
              <Image
                src={heroProject.cardImage.imageUrl}
                alt={heroProject.cardImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroProject.cardImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/90" />
            </div>
          </div>
        </div>

        {secondaryFeatured.length > 0 && (
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {secondaryFeatured.map((project, index) => (
              <ProjectCard key={project.slug} item={project} index={index} />
            ))}
          </div>
        )}

        <div className="mt-10">
          <Button asChild variant="outline">
            <Link href="#all-projects">
              Jump to all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function AllProjects() {
  const { projects } = PROJECTS_DATA;

  return (
    <section id="all-projects" className="section-shell relative overflow-hidden">
      <div className="container">
        <SectionIntro
          eyebrow="All Projects"
          title="Projects"
          description="Complete project list across enterprise systems, mobility, fintech, health, commerce, and service platforms."
          align="left"
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.slug}-${index}`} item={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
