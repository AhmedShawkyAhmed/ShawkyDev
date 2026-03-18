import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionIntroProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/85",
          isCentered ? "justify-center" : "justify-start"
        )}
      >
        <span className="h-px w-10 bg-primary/45" />
        {eyebrow}
      </div>
      <div className="space-y-3">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      </div>
    </div>
  );
}
