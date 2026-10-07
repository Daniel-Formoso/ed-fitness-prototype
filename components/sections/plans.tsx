import { ArrowUpRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig, whatsappUrl } from "@/data/site";
import type { CSSProperties } from "react";

const features = ["Avaliação física incluída", "Treino personalizado", "Acesso por reconhecimento facial"];

export function Plans() {
  return (
    <section id="planos" aria-labelledby="plans-title" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <SectionHeading id="plans-title">Escolha seu compromisso com a <span className="text-primary">sua saúde.</span></SectionHeading>
          <p className="leading-relaxed text-muted-foreground">Todos os planos dão acesso à musculação. Matrícula: R$ 60, com avaliação física incluída.</p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.plans.map((plan, index) => <article key={plan.name} data-reveal style={{ "--reveal-delay": `${100 + index * 100}ms` } as CSSProperties} className={`plan-card relative flex min-h-[430px] flex-col border p-6 ${plan.featured ? "border-primary bg-secondary" : "bg-muted"}`}>
            {plan.featured && <span className="absolute inset-x-0 top-0 bg-primary py-2 text-center text-[10px] font-extrabold tracking-widest uppercase">Melhor valor</span>}
            <h3 className={`font-display text-sm font-bold tracking-widest text-muted-foreground uppercase ${plan.featured ? "mt-8" : "mt-2"}`}>{plan.name}</h3>
            <div className="mt-7 flex items-start gap-1"><span className="mt-2 text-sm font-bold">R$</span><strong className="font-display text-5xl font-black tracking-[-.035em]">{plan.price}</strong></div>
            <p className="mt-2 text-xs text-muted-foreground">{plan.detail}</p>
            <ul className="mt-8 space-y-3 text-xs text-muted-foreground">{features.map(feature => <li key={feature} className="flex gap-2"><Check className="size-4 shrink-0 text-green-400" />{feature}</li>)}</ul>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "link", className: "mt-auto h-12 justify-between rounded-none border-t px-0 text-foreground no-underline" })}>Quero este plano <ArrowUpRight /></a>
          </article>)}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">Plano família: R$ 130 por pessoa/mês. Consulte condições com a recepção.</p>
      </div>
    </section>
  );
}
