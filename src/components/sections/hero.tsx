import Image from "next/image";
import Link from "next/link";
import { PROFILE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Hero() {
  const { name, headline, bio, avatar, social } = PROFILE_DATA;
  return (
    <section id="about" className="container grid grid-cols-1 items-center gap-12 text-center md:grid-cols-2 md:text-left">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {name}
        </h1>
        <p className="text-xl text-muted-foreground md:text-2xl">{headline}</p>
        <p className="max-w-xl text-muted-foreground">{bio}</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:justify-start">
          {social.map(s => (
            <Button key={s.name} variant="outline" size="icon" asChild>
              <Link href={s.url} target="_blank" rel="noopener noreferrer">
                <s.icon className="h-5 w-5" />
                <span className="sr-only">{s.name}</span>
              </Link>
            </Button>
          ))}
           <Button asChild>
              <Link href="https://drive.google.com/uc?export=view&id=1fCMZPHw5aH69eGm5m7RTAL1FbLuiLmBF" target="_blank" rel="noopener noreferrer">
                <Download />
                Download CV
              </Link>
            </Button>
        </div>
      </div>
      <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
        <Image
          src={avatar.imageUrl}
          alt={avatar.description}
          fill
          priority
          className="rounded-full object-cover shadow-lg border-4 border-primary/20"
          data-ai-hint={avatar.imageHint}
        />
      </div>
    </section>
  );
}
