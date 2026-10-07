import { Activity, Bike, BicepsFlexed, CircleDot, Dumbbell, HeartPulse, PersonStanding, Shield, Zap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";
import { ClassSchedule } from "@/components/sections/class-schedule";

const icons = [Dumbbell, HeartPulse, CircleDot, Bike, Activity, BicepsFlexed, Shield, PersonStanding, Zap];
const groups = ["Treino livre", "Treino livre", "Corpo e mente", "Aula coletiva", "Aula coletiva", "Aula coletiva", "Artes marciais", "Artes marciais", "Artes marciais"];

export function Modalities() {
  return (
    <section id="modalidades" aria-labelledby="modalities-title" className="scroll-mt-20 bg-paper py-20 text-paper-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <SectionHeading id="modalities-title" light>Um lugar. Várias formas de <span className="text-primary">se movimentar.</span></SectionHeading>
          <p className="leading-relaxed text-paper-muted">Encontre o treino que combina com sua rotina. Consulte a recepção sobre o acesso de cada plano.</p>
        </div>
        <div className="mt-12 grid border-t border-l border-paper-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.modalities.map(([name, detail], index) => {
            const Icon = icons[index];
            return <article key={name} data-reveal style={{ "--reveal-delay": `${(index % 3) * 80}ms` } as React.CSSProperties} className="modality-card flex min-h-48 flex-col border-r border-b border-paper-foreground/20 p-6"><div className="flex items-start justify-between gap-4"><Icon className="modality-card__icon size-6 text-primary" /><span className="text-[10px] font-bold tracking-[.12em] text-paper-muted uppercase">{groups[index]}</span></div><div className="mt-auto pt-10"><h3 className="font-display text-2xl font-bold uppercase">{name}</h3><p className="mt-2 text-sm text-paper-muted">{detail}</p></div></article>;
          })}
        </div>
        <ClassSchedule />
      </div>
    </section>
  );
}
