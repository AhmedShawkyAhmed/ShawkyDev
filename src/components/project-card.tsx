"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Apple, Github, PlayStore } from "@/components/icons";
import type { PortfolioItem } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  item: PortfolioItem;
  index?: number;
};

export function ProjectCard({ item, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Card
        className="hover-motion group relative flex h-full flex-col overflow-hidden border-border/60 bg-card/90 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
      >
        <Link href={`/projects/${item.slug}`} className="absolute inset-0 z-10" aria-label={`Open ${item.title} details`} />

        <div className="relative aspect-[18/10] w-full overflow-hidden">
          <Image
            src={item.cardImage.imageUrl}
            alt={item.cardImage.description}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            data-ai-hint={item.cardImage.imageHint}
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
            {item.languages.slice(0, 4).map((language) => (
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
    </motion.div>
  );
}
