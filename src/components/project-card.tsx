import Image from "next/image";
import Link from "next/link";
import { Github, Apple, PlayStore } from "@/components/icons";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  description: string;
  image: ImagePlaceholder;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export function ProjectCard({ title, image, githubUrl, appStoreUrl, playStoreUrl }: ProjectCardProps) {
  return (
    <Card className="group relative aspect-[26/15] w-full overflow-hidden rounded-lg">
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        data-ai-hint={image.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
        {githubUrl && githubUrl !== '#' && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background/80 p-2 text-foreground transition-transform hover:scale-110">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        )}
        {appStoreUrl && (
          <Link href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background/80 p-2 text-foreground transition-transform hover:scale-110">
            <Apple className="h-5 w-5" />
            <span className="sr-only">App Store</span>
          </Link>
        )}
        {playStoreUrl && (
          <Link href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-background/80 p-2 text-foreground transition-transform hover:scale-110">
            <PlayStore className="h-5 w-5" />
            <span className="sr-only">Play Store</span>
          </Link>
        )}
      </div>
    </Card>
  );
}
