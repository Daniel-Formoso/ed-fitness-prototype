import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function Faq() {
  return (
    <section id="duvidas" aria-labelledby="faq-title" className="scroll-mt-20 bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
        <div><SectionHeading id="faq-title">Dúvidas antes do <span className="text-primary">primeiro treino?</span></SectionHeading><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Reunimos as respostas essenciais. Para confirmar detalhes do seu plano, fale diretamente com a recepção.</p></div>
        <Accordion className="border-t">
          {siteConfig.faq.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="min-h-16 rounded-none py-5 text-base font-bold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-5 leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}
        </Accordion>
      </div>
    </section>
  );
}
