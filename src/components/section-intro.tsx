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
        "space-y-5",
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      <div
        className={cn(
          "eyebrow-label",
          isCentered ? "justify-center" : "justify-start"
        )}
      >
        {eyebrow}
      </div>
      <div className="space-y-3">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
