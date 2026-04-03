"use client";

import { SKILLS_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { SectionIntro } from "@/components/section-intro";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Skills() {
  const { title, description, skillCategories } = SKILLS_DATA;

  return (
    <section id="skills" className="section-shell">
      <div className="container">
        <SectionIntro eyebrow="Expertise" title={title} description={description} align="left" />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full"
            >
              <Card
                className="hover-motion surface-panel w-full flex flex-col rounded-[1.7rem] transition-all duration-300 hover:border-primary/40"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="font-headline text-[1.4rem] leading-snug text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="border-border/70 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium normal-case tracking-normal text-foreground/78"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
