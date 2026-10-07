"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const activityStyles: Record<string, { dot: string; border: string }> = {
  Bike: { dot: "bg-indigo-500", border: "border-indigo-500" },
  Ritmos: { dot: "bg-primary", border: "border-primary" },
  Localizada: { dot: "bg-paper-foreground", border: "border-paper-foreground" },
};

export function ClassSchedule() {
  const today = new Date().getDay();
  const todayKey = ["", "seg", "ter", "qua", "qui", "sex", ""][today];
  const initialDay = siteConfig.classSchedule.some((day) => day.key === todayKey) ? todayKey : "seg";
  const [activeDay, setActiveDay] = useState(initialDay);
  const selectedDay = siteConfig.classSchedule.find((day) => day.key === activeDay) ?? siteConfig.classSchedule[0];
  const periods = useMemo(() => [...new Set(selectedDay.classes.map((item) => item.period))], [selectedDay]);

  return (
    <div className="mt-20 border-t border-paper-foreground/20 pt-16 lg:mt-28 lg:pt-20">
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold tracking-[.18em] text-primary uppercase"><CalendarDays className="size-4" /> Aulas coletivas</p>
          <h3 className="mt-4 font-display text-4xl font-extrabold tracking-[-.035em] uppercase sm:text-5xl">Horários da semana</h3>
        </div>
        <p className="max-w-xl leading-relaxed text-paper-muted lg:justify-self-end">Escolha o dia para consultar as aulas. A grade é fixa neste protótipo e pode ser atualizada em um único arquivo quando necessário.</p>
      </div>

      <div role="tablist" aria-label="Dias da semana" className="mt-10 grid grid-cols-5 border border-paper-foreground/20 bg-paper-foreground/[.03] p-1.5">
        {siteConfig.classSchedule.map((day) => (
          <Button key={day.key} role="tab" aria-selected={activeDay === day.key} variant="ghost" onClick={() => setActiveDay(day.key)} className={`h-14 rounded-none font-bold uppercase sm:h-16 ${activeDay === day.key ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground" : "hover:bg-paper-foreground/10"}`}>
            <span className="sm:hidden">{day.short}</span><span className="hidden sm:inline">{day.label}</span>
          </Button>
        ))}
      </div>

      <div role="tabpanel" className="mt-4 border border-paper-foreground/20 bg-paper-foreground/[.03] px-5 py-6 sm:px-8 sm:py-8">
        {periods.map((period) => (
          <div key={period} className="not-first:mt-8">
            <p className="mb-2 text-xs font-bold tracking-[.18em] text-primary uppercase">{period}</p>
            <div>
              {selectedDay.classes.filter((item) => item.period === period).map((item) => (
                <div key={`${item.time}-${item.name}`} className="grid grid-cols-[5.5rem_1fr] items-center border-b border-paper-foreground/15 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr]">
                  <time className="font-display text-2xl font-extrabold tabular-nums">{item.time}</time>
                  <div className={`flex items-center gap-4 border-l-4 pl-4 ${activityStyles[item.name].border}`}>
                    <span className={`size-2.5 shrink-0 ${activityStyles[item.name].dot}`} aria-hidden="true" />
                    <div><p className="font-bold">{item.name}</p><p className="mt-0.5 flex items-center gap-1.5 text-xs text-paper-muted"><Clock3 className="size-3" /> Turma da {period.toLowerCase()}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-paper-muted">Aulas de segunda a sexta. Confirme eventuais alterações de horário com a recepção.</p>
    </div>
  );
}
