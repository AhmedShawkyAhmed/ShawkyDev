"use client";

import Link from "next/link";
import { CONTACT_DATA, PROFILE_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Download, ArrowUpRight, Linkedin } from "lucide-react";
import { SectionIntro } from "@/components/section-intro";
import { Github } from "@/components/icons";

export function Contact() {
  const { title, description } = CONTACT_DATA;
  const { email, phone, location, cvUrl, social } = PROFILE_DATA;
  const githubProfile = social.find((item) => item.name === "GitHub");
  const linkedinProfile = social.find((item) => item.name === "LinkedIn");

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="container">
        <SectionIntro eyebrow="Contact" title={title} description={description} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[1.8rem] border border-border/60 bg-card/75 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Direct contact</p>
              <div className="mt-5 space-y-3">
                <Link
                  href={`mailto:${email}`}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-4 py-4 transition-colors hover:border-primary/35"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                      <span className="text-sm font-medium">{email}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>

                <Link
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-4 py-4 transition-colors hover:border-primary/35"
                >
                  <span className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</span>
                      <span className="text-sm font-medium">{phone}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>

                <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/50 px-4 py-4">
                  <span className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">Location</span>
                      <span className="text-sm font-medium">{location}</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-border/60 bg-card/75 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-primary">Profiles & assets</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link href={cvUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4" /> CV
                  </Link>
                </Button>
                {githubProfile && (
                  <Button asChild variant="outline">
                    <Link href={githubProfile.url} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {linkedinProfile && (
                  <Button asChild variant="outline">
                    <Link href={linkedinProfile.url} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Link>
                  </Button>
                )}
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Best fit: senior Flutter roles, native iOS modernization work, Kotlin-based integrations, and mobile architecture ownership.
              </p>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-border/60 bg-card/75 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-headline text-2xl font-semibold tracking-tight">What I can help with</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  I work best on senior mobile engineering roles, Flutter platform architecture, native iOS modernization, Kotlin integrations, and high-reliability mobile product delivery.
                </p>
              </div>

              <ul className="grid gap-3">
                <li className="rounded-[1.4rem] border border-border/60 bg-background/50 px-5 py-4 text-sm leading-6 text-muted-foreground">
                  Senior Flutter engineering for production apps, reusable modules, and scalable architecture decisions.
                </li>
                <li className="rounded-[1.4rem] border border-border/60 bg-background/50 px-5 py-4 text-sm leading-6 text-muted-foreground">
                  iOS modernization work across Objective-C, Swift, and SwiftUI codebases with maintainability in mind.
                </li>
                <li className="rounded-[1.4rem] border border-border/60 bg-background/50 px-5 py-4 text-sm leading-6 text-muted-foreground">
                  Kotlin-native integrations, platform channels, real-time systems, CI/CD, and release-quality mobile delivery.
                </li>
              </ul>

              <div className="rounded-[1.4rem] border border-border/60 bg-background/50 px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Availability</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Open to senior mobile engineering roles, Flutter-first product teams, native iOS modernization, Kotlin platform work, and mobile architecture consulting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
