import Image from "next/image";
import Link from "next/link";
import { PROFILE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  const { name, headline, bio, avatar, social, stats, cvUrl, email, focusAreas } = PROFILE_DATA;
  const heroStats = stats.slice(0, 4);

  return (
    <section id="about" className="section-shell relative overflow-hidden py-20 md:py-28 lg:py-32">
      <div className="hero-grid" />
      <div className="hero-blob hero-blob-left" />
      <div className="hero-blob hero-blob-right" />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr]">
        <div className="space-y-8 text-center lg:text-left">
          <div className="stagger-in eyebrow-label justify-center lg:justify-start">
            Senior Mobile Engineer • Architecture Ownership • Flutter + Native iOS/Android
          </div>

          <div className="space-y-4">
            <h1 className="stagger-in font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              {name}
            </h1>

            <p className="stagger-in max-w-3xl text-xl leading-relaxed text-foreground/80 md:text-2xl">
              {headline}
            </p>
            <p className="stagger-in max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
              {bio}
            </p>
          </div>

          <div className="stagger-in flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button asChild size="lg" className="hero-drop hover-motion" style={{ animationDelay: "420ms" }}>
              <Link href="#projects">
                View Case Studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="hero-drop hover-motion" style={{ animationDelay: "520ms" }}>
              <Link href={cvUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" /> Download CV
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild className="hero-drop hover-motion" style={{ animationDelay: "560ms" }}>
              <Link href={`mailto:${email}`}>
                <Mail className="h-4 w-4" /> Contact Me
              </Link>
            </Button>
            {social.map((s, index) => (
              <Button
                key={s.name}
                variant="ghost"
                size="icon"
                asChild
                className="hero-drop hover-motion"
                style={{ animationDelay: `${660 + index * 90}ms` }}
              >
                <Link href={s.url} target="_blank" rel="noopener noreferrer">
                  <s.icon className="h-5 w-5" />
                  <span className="sr-only">{s.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          <div className="stagger-in flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/70 bg-background/45 px-3 py-1.5 font-code text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="stagger-in grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((item, index) => (
              <div
                key={item.label}
                className={`hero-drop metric-tile rounded-[1.4rem] px-4 py-4 text-left backdrop-blur-sm ${index === 0 ? "metric-tile-active" : ""}`}
                style={{ animationDelay: `${780 + index * 120}ms` }}
              >
                <div className="font-headline text-2xl font-semibold text-foreground">{item.value}</div>
                <div className="mt-2 font-code text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up mx-auto w-full max-w-sm">
          <div
            className="hero-drop hero-logo-wrap relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/50 p-4 shadow-2xl shadow-primary/10 backdrop-blur-xl"
            style={{ animationDelay: "640ms" }}
          >
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
