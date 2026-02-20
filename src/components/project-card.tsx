import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Star } from "lucide-react";
import { Apple, Github, PlayStore } from "@/components/icons";
import type { PortfolioItem } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  item: PortfolioItem;
};

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Card className="hover-motion group relative flex h-full flex-col overflow-hidden border-border/60 bg-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <Link href={`/projects/${item.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${item.title} details`} />

      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={item.image.bannerImageUrl}
          alt={item.image.description}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={item.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          {item.rating.toFixed(1)}
        </div>
      </div>

      <CardHeader className="space-y-3 pb-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {item.frameworks.slice(0, 2).map((framework) => (
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

        <div className="flex items-center justify-between rounded-lg border border-border/70 bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Download className="h-3.5 w-3.5" /> {item.downloads}
          </span>
          <span className="uppercase tracking-wide">{item.category}</span>
        </div>
      </CardContent>

      <CardFooter className="relative z-20 pt-2">
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
  );
}
