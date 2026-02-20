import { EXPERIENCE_DATA } from "@/lib/data";
import { BriefcaseBusiness, Dot } from "lucide-react";

export function Experience() {
  const { title, description, experiences } = EXPERIENCE_DATA;

  return (
    <section id="experience" className="relative overflow-hidden bg-muted/20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-2 text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:block" />

          <div className="space-y-7">
            {experiences.map((exp, index) => (
              <article
                key={`${exp.company}-${exp.period}`}
                className="fade-up relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-primary/10"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-headline text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>
                  </div>
                  <p className="rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-xs text-muted-foreground">
                    {exp.period}
                  </p>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <Dot className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute right-4 top-4 rounded-full bg-primary/10 p-2 text-primary">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
