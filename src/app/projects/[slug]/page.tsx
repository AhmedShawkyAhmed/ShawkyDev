import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Cpu,
  Github,
  Laptop,
  ShieldCheck,
  Smartphone,
  Tablet,
  TrendingUp,
} from "lucide-react";
import { Apple, PlayStore } from "@/components/icons";
import { ALL_PORTFOLIO_ITEMS, getPortfolioItemBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function generateStaticParams() {
  return ALL_PORTFOLIO_ITEMS.map((item) => ({ slug: item.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const platformMeta = {
    Android: { label: "Android", icon: Smartphone },
    iOS: { label: "iOS", icon: Smartphone },
    iPad: { label: "iPad", icon: Tablet },
    web: { label: "Web", icon: Laptop },
    desktop: { label: "Desktop", icon: Laptop },
  } as const;

  const summaryStats = [
    { label: "Delivery", value: item.category === "package" ? "Reusable system" : "Production app" },
    { label: "Platforms", value: String(item.supportedPlatforms.length) },
    { label: "Downloads", value: item.downloads },
    { label: "Rating", value: item.rating.toFixed(1) },
  ];

  const problemSolutionImpact = [
    { label: "Problem", value: item.caseStudy.problem },
    { label: "Solution", value: item.caseStudy.solution },
    { label: "Impact", value: item.caseStudy.impact },
  ];

  return (
    <main className="min-h-dvh bg-background">
      <section className="section-shell relative overflow-hidden py-10 md:py-16">
        <div className="container">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/#projects" prefetch={false}>
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </Button>

          <div className="surface-panel overflow-hidden rounded-[2rem]">
            <div className="relative h-64 w-full border-b border-border/50 md:h-80 lg:h-[26rem]">
              <Image
                src={item.bannerImage.imageUrl}
                alt={`${item.title} banner`}
                fill
                priority
                className="object-cover"
                data-ai-hint={item.bannerImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-background/92" />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/35 to-transparent" />
            </div>

            <div className="relative z-10 p-6 md:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-code text-[10px] uppercase tracking-[0.22em] text-primary">
                  {item.category === "package" ? "Engineering package" : "Architecture case study"}
                </span>
                <span className="rounded-full border border-border/70 bg-background/50 px-3 py-1 font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.supportedPlatforms.join(" • ")}
                </span>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-[1.4rem] border border-border/70 bg-background/60">
                  <Image
                    src={item.appIcon.imageUrl}
                    alt={`${item.title} icon`}
                    fill
                    className="object-contain p-3"
                    data-ai-hint={item.appIcon.imageHint}
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                    {item.title}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {summaryStats.map((stat) => (
                  <div key={stat.label} className="metric-tile rounded-[1.25rem] px-4 py-4">
                    <p className="font-code text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-headline text-lg text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 lg:grid-cols-3">
                {problemSolutionImpact.map((entry) => (
                  <div key={entry.label} className="rounded-[1.25rem] border border-border/70 bg-background/30 px-4 py-4">
                    <p className="font-code text-[10px] uppercase tracking-[0.18em] text-primary">{entry.label}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{entry.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.frameworks.map((framework) => (
                  <Badge key={framework} variant="secondary">
                    {framework}
                  </Badge>
                ))}
                {item.languages.map((language) => (
                  <Badge key={language} variant="outline">
                    {language}
                  </Badge>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {item.supportedPlatforms.map((platform) => {
                  const meta = platformMeta[platform];
                  const Icon = meta.icon;
                  return (
                    <Badge key={platform} variant="outline" className="gap-1.5">
                      <Icon className="h-3.5 w-3.5" />
                      {meta.label}
                    </Badge>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {item.githubUrl && (
                  <Button asChild variant="outline">
                    <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {item.appStoreUrl && (
                  <Button asChild variant="outline">
                    <Link href={item.appStoreUrl} target="_blank" rel="noopener noreferrer">
                      <Apple className="h-4 w-4" /> App Store
                    </Link>
                  </Button>
                )}
                {item.playStoreUrl && (
                  <Button asChild variant="outline">
                    <Link href={item.playStoreUrl} target="_blank" rel="noopener noreferrer">
                      <PlayStore className="h-4 w-4" /> Play Store
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 xl:grid-cols-2">
            <div className="surface-panel rounded-[1.8rem] p-6 md:p-8">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-2xl font-semibold">Context & Constraints</h2>
              </div>
              <ul className="mt-6 grid gap-3">
                {item.caseStudy.constraints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[1.2rem] border border-border/60 bg-background/30 px-4 py-4 text-sm leading-7 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-panel rounded-[1.8rem] p-6 md:p-8">
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-2xl font-semibold">Role & Ownership</h2>
              </div>
              <p className="mt-4 text-sm leading-8 text-muted-foreground md:text-base">
                {item.projectIdea}
              </p>
              <ul className="mt-6 grid gap-3">
                {item.caseStudy.ownership.map((point) => (
                  <li
                    key={point}
                    className="rounded-[1.2rem] border border-border/60 bg-background/30 px-4 py-4 text-sm leading-7 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="surface-panel rounded-[1.8rem] p-6">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-xl font-semibold">Architecture Decisions</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {item.caseStudy.architecture.map((point) => (
                  <li
                    key={point}
                    className="rounded-[1.2rem] border border-border/60 bg-background/30 px-4 py-4 text-sm leading-7 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-panel rounded-[1.8rem] p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-xl font-semibold">Systems, Tooling & Quality</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {item.caseStudy.tooling.map((point) => (
                  <li
                    key={point}
                    className="rounded-[1.2rem] border border-border/60 bg-background/30 px-4 py-4 text-sm leading-7 text-muted-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="surface-panel mt-8 rounded-[1.8rem] p-6">
            <p className="font-code text-[11px] uppercase tracking-[0.18em] text-primary">Capability Breakdown</p>
            <h2 className="mt-3 font-headline text-2xl font-semibold">Key Features</h2>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {item.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-[1.2rem] border border-border/60 bg-background/30 px-4 py-4 text-sm leading-7 text-muted-foreground"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {item.screenshots && item.screenshots.length > 0 && (
            <div className="surface-panel mt-8 rounded-[1.8rem] p-6">
              <p className="font-code text-[11px] uppercase tracking-[0.18em] text-primary">Visual Evidence</p>
              <h2 className="mt-3 font-headline text-2xl font-semibold">Screenshots</h2>
              <Carousel
                className="mt-6"
                opts={{
                  align: "start",
                  loop: item.screenshots.length > 3,
                }}
              >
                <CarouselContent>
                  {item.screenshots.map((screenshot, index) => {
                    const isIpad = screenshot.platform === "iPad";
                    const isDesktop = screenshot.platform === "desktop";
                    const isLandscape = screenshot.orientation === "landscape";
                    const isSvg = screenshot.image.imageUrl.toLowerCase().endsWith(".svg");
                    const aspectClass = isIpad
                      ? isLandscape
                        ? "aspect-[2752/2064]"
                        : "aspect-[2064/2752]"
                      : isDesktop
                        ? isLandscape
                          ? "aspect-[2752/2064]"
                          : "aspect-[2064/2752]"
                        : "aspect-[1320/2868]";
                    const basisClass = isIpad
                      ? isLandscape
                        ? "basis-[59%] sm:basis-[50%] lg:basis-[43%]"
                        : "basis-[54%] sm:basis-[32%] lg:basis-[23%]"
                      : isDesktop
                        ? isLandscape
                          ? "basis-[59%] sm:basis-[50%] lg:basis-[43%]"
                          : "basis-[54%] sm:basis-[32%] lg:basis-[23%]"
                        : "basis-[51%] sm:basis-[31%] lg:basis-[20%]";
                    return (
                      <CarouselItem
                        key={`${item.slug}-${index}`}
                        className={basisClass}
                      >
                        <div className={`relative overflow-hidden rounded-[1.5rem] border border-border/70 ${aspectClass}`}>
                          <a
                            href={screenshot.image.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 cursor-zoom-in"
                            aria-label={`Open full screenshot ${index + 1}`}
                          >
                            {isSvg ? (
                              <img
                                src={screenshot.image.imageUrl}
                                alt={`${item.title} screenshot ${index + 1}`}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            ) : (
                              <Image
                                src={screenshot.image.imageUrl}
                                alt={`${item.title} screenshot ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={screenshot.image.imageHint}
                              />
                            )}
                          </a>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          )}

          {item.diagramImages && item.diagramImages.length > 0 && (
            <div className="surface-panel mt-8 rounded-[1.8rem] p-6">
              <p className="font-code text-[11px] uppercase tracking-[0.18em] text-primary">Architecture Visuals</p>
              <h2 className="mt-3 font-headline text-2xl font-semibold">Diagrams</h2>
              <Carousel
                className="mt-6"
                opts={{
                  align: "start",
                  loop: item.diagramImages.length > 1,
                }}
              >
                <CarouselContent>
                  {item.diagramImages.map((diagram, index) => {
                    const isSvg = diagram.imageUrl.toLowerCase().endsWith(".svg");
                    return (
                      <CarouselItem
                        key={`${item.slug}-diagram-${index}`}
                        className="basis-[92%] lg:basis-[74%]"
                      >
                        <div className="relative aspect-[16/8] overflow-hidden rounded-[1.5rem] border border-border/70">
                          <a
                            href={diagram.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 cursor-zoom-in"
                            aria-label={`Open full diagram ${index + 1}`}
                          >
                            {isSvg ? (
                              <img
                                src={diagram.imageUrl}
                                alt={`${item.title} diagram ${index + 1}`}
                                className="absolute inset-0 h-full w-full object-cover"
                              />
                            ) : (
                              <Image
                                src={diagram.imageUrl}
                                alt={`${item.title} diagram ${index + 1}`}
                                fill
                                className="object-cover"
                                data-ai-hint={diagram.imageHint}
                              />
                            )}
                          </a>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                {item.diagramImages.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
                  </>
                )}
              </Carousel>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Technical visuals covering architecture, module topology, synchronization, and implementation flow.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
