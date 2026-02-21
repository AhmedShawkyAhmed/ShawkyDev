import Image from "next/image";
import Link from "next/link";
import { PROFILE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const { name, headline, bio, avatar, social, stats } = PROFILE_DATA;

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="hero-grid" />
      <div className="hero-blob hero-blob-left" />
      <div className="hero-blob hero-blob-right" />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-7 text-center lg:text-left">
          {/* <div className="stagger-in inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            Senior Mobile Engineer
          </div> */}

          <h1 className="stagger-in font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {name}
          </h1>

          <p className="stagger-in text-xl text-foreground/80 md:text-2xl">{headline}</p>
          <p className="stagger-in max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{bio}</p>

          <div className="stagger-in flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button asChild size="lg" className="hover-motion shadow-lg shadow-primary/25">
              <Link href="#projects">
                Explore Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover-motion">
              <Link href="https://drive.google.com/uc?export=view&id=1fCMZPHw5aH69eGm5m7RTAL1FbLuiLmBF" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" /> Download CV
              </Link>
            </Button>
            {social.map((s) => (
              <Button key={s.name} variant="ghost" size="icon" asChild className="hover-motion">
                <Link href={s.url} target="_blank" rel="noopener noreferrer">
                  <s.icon className="h-5 w-5" />
                  <span className="sr-only">{s.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="stagger-in grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border/60 bg-card/75 px-4 py-4 text-left backdrop-blur-sm">
                <div className="text-xl font-semibold text-primary">{item.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up mx-auto w-full max-w-sm">
          <div className="hero-logo-wrap relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/50 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl">
            <div className="hero-logo-pulse absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={avatar.imageUrl}
                alt={avatar.description}
                fill
                priority
                className="object-cover"
                data-ai-hint={avatar.imageHint}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
