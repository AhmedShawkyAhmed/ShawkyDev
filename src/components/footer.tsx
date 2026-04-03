import Link from "next/link";
import { NAV_LINKS, PROFILE_DATA } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, headline, email, location, social } = PROFILE_DATA;

  return (
    <footer className="border-t border-border/60 bg-background/85 backdrop-blur">
      <div className="container py-10">
        <div className="surface-panel rounded-[2rem] p-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div>
              <p className="font-headline text-2xl font-bold tracking-tight">{name}</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{headline}</p>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{email}</p>
              <p>{location}</p>
            </div>
          </div>

          <div>
            <p className="font-code text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Navigate</p>
            <div className="mt-4 grid gap-2">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-code text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Profiles</p>
            <div className="mt-4 grid gap-2">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {name}. Built for senior mobile engineering opportunities.</p>
          <p>Flutter • SwiftUI • Kotlin</p>
        </div>
        </div>
      </div>
    </footer>
  );
}
