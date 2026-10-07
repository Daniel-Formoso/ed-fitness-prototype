import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/data/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div><h2 id="cta-title" className="max-w-3xl font-display text-4xl font-black leading-none tracking-[-.035em] uppercase sm:text-5xl">Venha conhecer a Ed Fitness.</h2><p className="mt-4 text-white/85">Sua primeira aula é gratuita. Combine o melhor horário com a recepção.</p></div>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", className: "h-12 shrink-0 rounded-none border-white/60 bg-white px-6 font-bold text-primary hover:bg-transparent hover:text-white" })}>Agendar agora <ArrowUpRight /></a>
      </div>
    </section>
  );
}
