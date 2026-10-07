import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { whatsappUrl } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-stage relative h-[135svh] scroll-mt-20">
      <div data-hero-sticky className="sticky top-0 isolate flex h-svh min-h-[680px] items-end overflow-hidden pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-30">
          <Image src="/assets/foto-1.webp" alt="Pessoa treinando levantamento de peso em academia" fill priority sizes="100vw" className="hero-media object-cover object-[62%_center] saturate-75" />
        </div>
        <div className="absolute inset-0 -z-10 bg-background/72" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background/55 to-transparent" />
        <div className="hero-content relative mx-auto grid w-full max-w-6xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[1.45fr_.55fr]">
          <div className="hero-copy max-w-4xl">
          <p className="mb-6 flex items-center gap-2 text-xs font-bold tracking-[.12em] uppercase"><MapPin className="size-4 text-primary" /> Nova Iguaçu, RJ</p>
          <h1 id="hero-title" className="font-display text-5xl font-black leading-[.86] tracking-[-.035em] uppercase sm:text-7xl lg:text-8xl">
            Seu treino.<br />Seu ritmo.<br /><span className="text-primary">Sua evolução.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Musculação, cardio, aulas coletivas, Pilates e lutas em um só lugar. Comece com uma aula experimental gratuita.</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonVariants({ className: "h-12 rounded-none px-6 font-bold" })}>Agendar aula grátis <ArrowUpRight /></a>
            <a href="#planos" className={buttonVariants({ variant: "outline", className: "h-12 rounded-none border-foreground/35 bg-transparent px-6 font-bold" })}>Conhecer planos <ArrowDownRight /></a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Imagem ilustrativa deste protótipo.</p>
          </div>
          <aside className="hero-aside hidden border bg-muted/90 p-6 backdrop-blur-md lg:block">
          <p className="text-xs font-bold tracking-[.12em] text-muted-foreground uppercase">Saúde em primeiro lugar</p>
          <p className="mt-3 font-display text-2xl font-bold">Aberta de segunda a sexta, das 6h às 22h.</p>
          <a href="#contato" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold">Ver horários <ArrowDownRight className="size-4" /></a>
          </aside>
        </div>
        <div className="absolute right-5 bottom-5 hidden items-center gap-3 text-[10px] font-bold tracking-[.16em] text-white/65 uppercase lg:flex">
          <span>Role para explorar</span><span className="scroll-indicator h-10 w-px bg-white/25 before:block before:h-1/2 before:w-full before:bg-primary" />
        </div>
      </div>
    </section>
  );
}
