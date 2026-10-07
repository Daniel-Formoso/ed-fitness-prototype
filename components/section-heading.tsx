import { cn } from "@/lib/utils";

export function SectionHeading({ children, light = false, className, id }: { children: React.ReactNode; light?: boolean; className?: string; id?: string }) {
  return (
    <h2 id={id} className={cn("max-w-3xl font-display text-4xl font-extrabold leading-[.98] tracking-[-.035em] uppercase sm:text-5xl lg:text-7xl", light && "text-paper-foreground", className)}>
      {children}
    </h2>
  );
}
