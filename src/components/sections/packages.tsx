import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PACKAGES_DATA } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import { Github } from "@/components/icons";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Packages() {
  const { title, description, packages } = PACKAGES_DATA;
  const [featuredPackage, ...otherPackages] = packages;

  return (
    <section id="packages" className="relative overflow-hidden bg-muted/25">
      <div className="container">
        <SectionIntro eyebrow="Tooling" title={title} description={description} />

        {featuredPackage && (
          <div className="mt-14 grid gap-6 overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-6 shadow-xl shadow-primary/5 md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/50">
              <Image
                src={featuredPackage.cardImage.imageUrl}
                alt={featuredPackage.cardImage.description}
                fill
                className="object-cover"
                data-ai-hint={featuredPackage.cardImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                  Featured package
                </span>
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight">{featuredPackage.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{featuredPackage.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredPackage.frameworks.slice(0, 5).map((framework) => (
                    <Badge key={framework} variant="secondary" className="bg-primary/10 text-primary">
                      {framework}
                    </Badge>
                  ))}
                </div>

                <ul className="grid gap-3 md:grid-cols-2">
                  {featuredPackage.features.slice(0, 4).map((feature) => (
                    <li
                      key={`${featuredPackage.slug}-${feature}`}
                      className="rounded-2xl border border-border/60 bg-muted/20 px-4 py-3 text-sm leading-6 text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button asChild>
                  <Link href={`/projects/${featuredPackage.slug}`}>
                    View package details <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                {featuredPackage.githubUrl && (
                  <Button asChild variant="outline" size="icon">
                    <Link href={featuredPackage.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <Github className="h-5 w-5" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {otherPackages.map((pkg, index) => (
            <ProjectCard key={pkg.slug} item={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
