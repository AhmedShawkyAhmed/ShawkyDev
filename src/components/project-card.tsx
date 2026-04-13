"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Laptop, Smartphone, Star, Tablet } from "lucide-react";
import { Apple, Github, PlayStore } from "@/components/icons";
import type { PortfolioItem } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  item: PortfolioItem;
  index?: number;
};

const platformLabel: Record<string, { short: string; icon: typeof Smartphone }> = {
  Android: { short: "Android", icon: Smartphone },
  iOS: { short: "iOS", icon: Smartphone },
  iPad: { short: "iPad", icon: Tablet },
  web: { short: "Web", icon: Laptop },
  desktop: { short: "Desktop", icon: Laptop },
};

export function ProjectCard({ item, index = 0 }: ProjectCardProps) {
  const scanRows = [
    { label: "Scope", value: item.scanHighlights.scope },
    { label: "Architecture", value: item.scanHighlights.architecture },
    { label: "Impact", value: item.scanHighlights.impact },
  ];

  return (
    <div className="h-full">
      <Card
        className="surface-panel group relative flex h-full flex-col overflow-hidden rounded-[1.7rem]"
      >
        <Link href={`/projects/${item.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${item.title} details`} />

        <div className="relative aspect-[18/10] w-full overflow-hidden">
          <Image
            src={item.cardImage.imageUrl}
            alt={item.cardImage.description}
            fill
            className="object-cover"
            data-ai-hint={item.cardImage.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/75 px-3 py-1 font-code text-[10px] font-semibold uppercase tracking-[0.22em] text-primary backdrop-blur-md">
            {item.category}
          </div>
          <div className="absolute right-4 top-4 h-14 w-14 overflow-hidden rounded-2xl border border-white/15 bg-background/75 p-2 shadow-lg backdrop-blur-md">
            <div className="relative h-full w-full">
            <Image
              src={item.appIcon.imageUrl}
              alt={`${item.title} icon`}
              fill
              className="object-contain"
              data-ai-hint={item.appIcon.imageHint}
            />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-border/60 bg-background/85 px-3 py-1 text-xs font-medium backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            {item.rating.toFixed(1)}
          </div>
        </div>

        <CardHeader className="space-y-3 pb-2">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <p className="font-code text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Case Study</p>
              <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              <div className="flex flex-wrap gap-2">
                {item.supportedPlatforms.slice(0, 3).map((platform) => {
                  const meta = platformLabel[platform];
                  if (!meta) return null;
                  const Icon = meta.icon;
                  return (
                    <span
                      key={`${item.slug}-${platform}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-muted/30 px-2.5 py-1 font-code text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {meta.short}
                    </span>
                  );
                })}
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {item.frameworks.slice(0, 3).map((framework) => (
              <Badge key={framework} variant="secondary" className="bg-primary/10 text-primary">
                {framework}
              </Badge>
            ))}
            {item.languages.slice(0, 2).map((language) => (
              <Badge key={language} variant="outline" className="border-primary/30 text-foreground/80">
                {language}
              </Badge>
            ))}
          </div>

          <ul className="space-y-2">
            {scanRows.map((row) => (
              <li
                key={`${item.slug}-${row.label}`}
                className="flex items-start gap-2 rounded-[1.1rem] border border-border/70 bg-background/20 px-3 py-3 text-sm leading-6 text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <span className="mr-1 font-code text-[10px] uppercase tracking-[0.16em] text-foreground/70">
                    {row.label}:
                  </span>
                  <span
                    className="inline [display:-webkit-box] overflow-hidden align-bottom [-webkit-box-orient:vertical] [-webkit-line-clamp:2]"
                  >
                    {row.value}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between rounded-[1.1rem] border border-border/70 bg-muted/30 px-3 py-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Download className="h-3.5 w-3.5" /> {item.downloads}
            </span>
            <span className="font-code uppercase tracking-[0.14em]">{item.supportedPlatforms.length} platforms</span>
          </div>
        </CardContent>

        <CardFooter className="relative z-20 mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80">
            {item.category === "package" ? "Open package details" : "Open case study"}
            <ArrowRight className="h-4 w-4" />
          </span>

          <div className="flex items-center gap-2">
            {item.githubUrl && item.githubUrl !== "#" && (
              <Button variant="outline" size="icon" asChild>
                <Link href={item.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {item.appStoreUrl && (
              <Button variant="outline" size="icon" asChild>
                <Link href={item.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="App Store link">
                  <Apple className="h-5 w-5" />
                </Link>
              </Button>
            )}
            {item.playStoreUrl && (
              <Button variant="outline" size="icon" asChild>
                <Link href={item.playStoreUrl} target="_blank" rel="noopener noreferrer" aria-label="Play Store link">
                  <PlayStore className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
