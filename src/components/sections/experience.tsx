import { EXPERIENCE_DATA } from "@/lib/data";
import { BriefcaseBusiness, Dot } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";

export function Experience() {
  const { title, description, experiences } = EXPERIENCE_DATA;

  return (
    <section id="experience" className="section-shell relative overflow-hidden">
      <div className="container">
        <SectionIntro eyebrow="Experience" title={title} description={description} align="left" />

        <div className="relative mx-auto mt-14 max-w-6xl">
          <div className="space-y-7">
            {experiences.map((exp, index) => (
              <article
                key={`${exp.company}-${exp.period}`}
                className="fade-up surface-panel relative overflow-hidden rounded-[1.8rem] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4 pr-12">
                  <div className="space-y-1">
                    <p className="font-code text-[11px] uppercase tracking-[0.18em] text-primary">Role</p>
                    <h3 className="font-headline text-2xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm font-medium text-accent">{exp.company}</p>
                  </div>
                  <p className="rounded-full border border-border/70 bg-muted/30 px-4 py-2 font-code text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {exp.period}
                  </p>
                </div>

                <ul className="grid gap-3 md:grid-cols-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 rounded-[1.2rem] border border-border/70 bg-background/25 px-4 py-3 text-sm leading-7 text-muted-foreground">
                      <Dot className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute top-5 right-5 rounded-full border border-primary/20 bg-primary/10 p-2 text-primary">
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
