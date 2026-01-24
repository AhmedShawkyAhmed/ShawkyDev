import Image from "next/image";
import Link from "next/link";
import { Github, Apple, PlayStore } from "@/components/icons";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export function ProjectCard({ title, description, image, githubUrl, appStoreUrl, playStoreUrl }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl">
      <div className="relative aspect-[26/15] w-full">
        <Image
          src={image.imageUrl}
          alt={image.description}
          fill
          className="object-cover"
          data-ai-hint={image.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-3">
          {githubUrl && githubUrl !== '#' && (
            <Button variant="outline" size="icon" asChild>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
          {appStoreUrl && (
             <Button variant="outline" size="icon" asChild>
                <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                    <Apple className="h-5 w-5" />
                    <span className="sr-only">App Store</span>
                </Link>
            </Button>
          )}
          {playStoreUrl && (
            <Button variant="outline" size="icon" asChild>
                <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                    <PlayStore className="h-5 w-5" />
                    <span className="sr-only">Play Store</span>
                </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
