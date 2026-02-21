import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BriefcaseBusiness, Cpu, Download, ExternalLink, Github, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { Apple, PlayStore } from "@/components/icons";
import { ALL_PORTFOLIO_ITEMS, getPortfolioItemBySlug } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

  const hasStoreLinks = Boolean(item.appStoreUrl || item.playStoreUrl);
  const ownershipPoints = [
    "Led end-to-end mobile delivery from technical scoping to release readiness.",
    `Designed app structure and module boundaries using ${item.frameworks.join(", ")}.`,
    hasStoreLinks
      ? "Owned production publishing flow and release quality for app store delivery."
      : "Owned engineering quality, code structure, and maintainability for project handoff.",
  ];

  const architecturePoints = [
    `Core stack: ${item.frameworks.join(", ")} with ${item.languages.join(", ")}.`,
    "Applied clean module boundaries and reusable services to keep features scalable.",
    "Structured integration points for APIs, state management, and platform-specific capabilities.",
  ];

  const qualityPoints = [
    "Focused on performance, stability, and predictable release behavior.",
    "Used code review standards and architecture-driven decisions to reduce technical risk.",
    "Kept implementation maintainable for long-term product evolution and team onboarding.",
  ];

  return (
    <main className="min-h-dvh bg-background">
      <section className="relative overflow-hidden py-10 md:py-16">
        <div className="container">
          {/* <Button asChild variant="ghost" className="mb-8">
            <Link href="/" prefetch={false}>
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
          </Button> */}

          <div className="overflow-hidden rounded-3xl border border-border/60 bg-card/60 shadow-xl">
            <div className="relative h-56 w-full md:h-80">
              <Image
                src={item.bannerImage.imageUrl}
                alt={`${item.title} banner`}
                fill
                priority
                className="object-cover"
                data-ai-hint={item.bannerImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>

            <div className="relative px-6 pb-8 md:px-10">
              <div className="-mt-14 flex flex-wrap items-end justify-between gap-5">
                <div className="flex items-end gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-border/70 bg-card">
                    <Image
                      src={item.appIcon.imageUrl}
                      alt={`${item.title} icon`}
                      fill
                      className="object-cover"
                      data-ai-hint={item.appIcon.imageHint}
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">{item.category}</p>
                    <h1 className="font-headline text-3xl font-bold md:text-4xl">{item.title}</h1>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {item.rating.toFixed(1)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Download className="h-4 w-4" /> {item.downloads}
                  </span>
                </div>
              </div>

              <p className="mt-6 max-w-4xl text-muted-foreground">{item.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.frameworks.map((framework) => (
                  <Badge key={framework} variant="secondary" className="bg-primary/10 text-primary">
                    {framework}
                  </Badge>
                ))}
                {item.languages.map((language) => (
                  <Badge key={language} variant="outline">
                    {language}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
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

          <div className="mt-10 rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness className="h-5 w-5 text-primary" />
              <h2 className="font-headline text-xl font-semibold">My Role & Ownership</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.projectIdea}</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {ownershipPoints.map((point) => (
                <li key={point} className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-xl font-semibold">Technical Architecture</h2>
              </div>
              <ul className="mt-4 space-y-3">
                {architecturePoints.map((point) => (
                  <li key={point} className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card/50 p-6">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-headline text-xl font-semibold">Business & Product Impact</h2>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                  Distribution strength reflected by {item.downloads} downloads and {item.rating.toFixed(1)} rating.
                </li>
                <li className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                  Delivered user flows and technical decisions aligned with production goals, reliability, and UX quality.
                </li>
                <li className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                  {item.showcase}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="font-headline text-xl font-semibold">Engineering Quality & Delivery</h2>
            </div>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {qualityPoints.map((point) => (
                <li key={point} className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-6">
            <h2 className="font-headline text-xl font-semibold">Key Features</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {item.features.map((feature) => (
                <li key={feature} className="rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-sm text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-6">
            <h2 className="font-headline text-xl font-semibold">Screenshots</h2>
            <Carousel
              className="mt-4"
              opts={{
                align: "start",
                loop: item.screenshots.length > 3,
              }}
            >
              <CarouselContent>
                {item.screenshots.map((screenshot, index) => (
                  <CarouselItem key={`${item.slug}-${index}`} className="basis-[82%] sm:basis-[48%] lg:basis-[32%]">
                    <div className="relative aspect-[10/16] overflow-hidden rounded-2xl border border-border/70">
                      <Image
                        src={screenshot.imageUrl}
                        alt={`${item.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={screenshot.imageHint}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          {item.diagramImage && (
            <div className="mt-8 rounded-2xl border border-border/60 bg-card/50 p-6">
              <h2 className="font-headline text-xl font-semibold">Diagram</h2>
              <div className="relative mt-4 aspect-[16/8] overflow-hidden rounded-2xl border border-border/70">
                <Image
                  src={item.diagramImage.imageUrl}
                  alt={`${item.title} architecture diagram`}
                  fill
                  className="object-cover"
                  data-ai-hint={item.diagramImage.imageHint}
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Reference diagram or architecture visual. Replace this image with a dedicated technical diagram when available.
              </p>
            </div>
          )}

          {/* <div className="mt-8 flex justify-end">
            <Button asChild>
              <Link href="/#projects" prefetch={false}>
                Return to homepage <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>
    </main>
  );
}
