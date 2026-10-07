import { ArrowUpRight, AtSign, Clock, MapPin, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { mapUrl, siteConfig, whatsappUrl } from "@/data/site";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contact-title" className="scroll-mt-20 bg-paper py-20 text-paper-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <SectionHeading id="contact-title" light>Seu próximo treino pode <span className="text-primary">começar aqui.</span></SectionHeading>
          <p className="leading-relaxed text-paper-muted">Fale com a recepção para confirmar a modalidade, o horário e agendar sua aula gratuita.</p>
        </div>
        <div className="mt-12 grid gap-3 lg:grid-cols-[1.1fr_.9fr_1fr]">
          <article className="flex min-h-72 flex-col bg-background p-7 text-foreground"><MapPin className="size-6" /><div className="mt-auto"><p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Endereço</p><h3 className="mt-3 font-display text-xl font-bold">{siteConfig.address.street}<br />{siteConfig.address.district} — {siteConfig.address.city}, {siteConfig.address.state}</h3><a href={mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 border-b text-xs font-bold">Abrir no mapa <ArrowUpRight className="size-4" /></a></div></article>
          <article className="flex min-h-72 flex-col bg-background p-7 text-foreground"><Clock className="size-6" /><div className="mt-auto"><p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Horários</p><h3 className="mt-3 font-display text-xl font-bold">{siteConfig.hours.weekdays}<br />{siteConfig.hours.saturday}</h3><p className="mt-6 text-xs text-muted-foreground">{siteConfig.hours.sunday}</p></div></article>
          <article className="flex min-h-72 flex-col bg-primary p-7 text-primary-foreground"><MessageCircle className="size-6" /><div className="mt-auto"><p className="text-xs font-bold tracking-widest uppercase">WhatsApp</p><h3 className="mt-3 font-display text-xl font-bold">Agende sua aula experimental com a recepção.</h3><a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", className: "mt-6 h-12 rounded-none border-white/50 bg-transparent text-white hover:bg-white hover:text-primary" })}>Iniciar conversa <ArrowUpRight /></a></div></article>
        </div>
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold"><AtSign className="size-5" /> edfitnessoficial</a>
      </div>
    </section>
  );
}
