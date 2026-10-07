import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  CalendarDays,
  Check,
  CreditCard,
  Globe2,
  KeyRound,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { proposalConfig, proposalWhatsappUrl } from "@/data/proposal";

export const metadata: Metadata = {
  title: "Proposta Digital | Ed Fitness",
  description:
    "Proposta executiva para a nova estrutura digital e automação da Academia Ed Fitness.",
};

const opportunities = [
  {
    icon: KeyRound,
    title: "Um endereço que pertence à academia",
    description:
      "O domínio próprio transforma a presença online em patrimônio da Ed Fitness e reduz a dependência de plataformas de terceiros.",
  },
  {
    icon: Search,
    title: "Mais clareza para quem procura na região",
    description:
      "Uma base técnica preparada para buscas locais aproxima a academia de quem pesquisa por treino em Nova Iguaçu.",
  },
  {
    icon: MessageCircle,
    title: "Interesse convertido em conversa",
    description:
      "Chamadas estratégicas encurtam o caminho entre conhecer a academia e falar com a recepção pelo WhatsApp.",
  },
];

const deliverySteps = [
  {
    label: "Estratégia e conteúdo",
    detail: "Validação do escopo, materiais, horários e informações comerciais.",
  },
  {
    label: "Construção e revisão",
    detail: "Desenvolvimento responsivo, integração dos canais e revisão com a equipe.",
  },
  {
    label: "Publicação",
    detail: "Configuração do domínio, segurança, testes finais e entrega do projeto no ar.",
  },
];

function EdProposalLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 leading-none" aria-label="Abrir o protótipo da Ed Fitness">
      <span className="-skew-x-6 font-display text-3xl font-black tracking-[-0.04em] text-primary">ED</span>
      <span className="max-w-12 text-sm font-extrabold leading-[.78] text-paper-foreground">FITNESS</span>
    </Link>
  );
}

function ProposalButton({ children, href, secondary = false }: { children: React.ReactNode; href: string; secondary?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={secondary
        ? "inline-flex min-h-12 items-center justify-center gap-2 border border-paper-foreground/20 px-5 text-sm font-bold text-paper-foreground transition-colors hover:bg-paper-foreground hover:text-paper"
        : "inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-5 text-sm font-bold text-primary-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary/90"}
    >
      {children}
    </a>
  );
}

export default function ProposalPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-paper-foreground">
      <a href="#conteudo-proposta" className="fixed top-3 left-3 z-[100] -translate-y-20 bg-paper-foreground px-4 py-3 font-bold text-paper transition-transform focus:translate-y-0">
        Ir para a proposta
      </a>

      <header className="sticky top-0 z-50 border-b border-paper-foreground/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-3 overflow-hidden px-4 sm:px-6 lg:px-8">
          <EdProposalLogo />
          <p className="hidden text-xs font-semibold tracking-wide text-paper-muted md:block">
            Proposta preparada por {proposalConfig.responsible}
          </p>
          <a href="#investimento" className="inline-flex min-h-11 shrink-0 items-center border border-paper-foreground/25 px-3 text-xs font-bold transition-colors hover:bg-paper-foreground hover:text-paper sm:px-4 sm:text-sm">
            <span className="sm:hidden">Investimento</span><span className="hidden sm:inline">Ver investimento</span>
          </a>
        </div>
      </header>

      <main id="conteudo-proposta">
        <section id="inicio" aria-labelledby="proposal-title" className="scroll-mt-20 overflow-hidden border-b border-paper-foreground/10">
          <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)] gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-32">
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <h1 id="proposal-title" className="max-w-3xl break-words text-balance font-display text-4xl font-black leading-[.92] tracking-[-0.035em] uppercase sm:text-6xl lg:text-7xl">
                A Ed Fitness merece uma casa digital própria.
              </h1>
              <p className="mt-8 w-full max-w-2xl text-lg leading-relaxed text-paper-muted sm:text-xl">
                Uma nova estrutura para transformar pesquisa em interesse, interesse em conversa e presença digital em patrimônio da academia.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ProposalButton href="#oportunidade">Entender a oportunidade <ArrowDown className="size-4" /></ProposalButton>
                <ProposalButton href="/" secondary>Abrir o protótipo <ArrowUpRight className="size-4" /></ProposalButton>
              </div>
              <p className="mt-6 text-sm text-paper-muted">
                Proposta emitida em {proposalConfig.issuedAt}, com validade de {proposalConfig.validity}.
              </p>
            </div>

            <figure className="w-full min-w-0 max-w-full overflow-hidden">
              <div className="min-w-0 overflow-hidden border-[14px] border-background bg-background shadow-[0_32px_70px_rgba(10,12,34,.18)] sm:border-[18px]">
                <div className="flex h-8 items-center gap-1.5 border-b border-white/10 px-3" aria-hidden="true">
                  <span className="size-2 bg-primary" />
                  <span className="size-2 bg-white/35" />
                  <span className="size-2 bg-white/35" />
                </div>
                <iframe
                  src="/"
                  title="Prévia navegável do protótipo da Ed Fitness"
                  className="block h-[440px] min-w-0 w-full max-w-full bg-background sm:h-[520px]"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 text-right text-sm text-paper-muted">
                Prévia navegável do novo site da Ed Fitness.
              </figcaption>
            </figure>
          </div>

          <div className="mx-auto grid max-w-7xl border-t border-paper-foreground/10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              ["Domínio próprio", "Um ativo digital que pertence à Ed Fitness."],
              ["9 modalidades em destaque", "Uma vitrine clara para tudo o que a academia oferece."],
              ["WhatsApp como destino", "O visitante chega ao atendimento pronto para conversar."],
            ].map(([title, description], index) => (
              <div key={title} className={`py-7 md:px-7 ${index > 0 ? "border-t border-paper-foreground/10 md:border-t-0 md:border-l" : ""}`}>
                <p className="font-bold">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="oportunidade" aria-labelledby="opportunity-title" className="scroll-mt-20 bg-background py-20 text-foreground md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <h2 id="opportunity-title" className="text-balance font-display text-4xl font-black leading-[.95] tracking-[-0.03em] uppercase sm:text-5xl lg:text-6xl">
                Hoje, uma matrícula pode estar escapando antes do primeiro contato.
              </h2>
              <div className="max-w-2xl lg:pt-2">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A página atual está hospedada em uma infraestrutura de terceiros, tem pouca força de busca própria e funciona de forma passiva. O novo projeto corrige esses três gargalos sem complicar a rotina da recepção.
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-white/15 md:grid-cols-3">
              {opportunities.map(({ icon: Icon, title, description }, index) => (
                <article key={title} className={`py-9 md:px-8 ${index > 0 ? "border-t border-white/15 md:border-t-0 md:border-l" : ""}`}>
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-8 max-w-xs font-display text-2xl font-bold uppercase">{title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="solution-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
              <div>
                <Globe2 className="size-8 text-primary" aria-hidden="true" />
                <h2 id="solution-title" className="mt-8 text-balance font-display text-4xl font-black leading-[.95] tracking-[-0.03em] uppercase sm:text-5xl">
                  Uma vitrine digital feita para a realidade da Ed Fitness.
                </h2>
              </div>
              <div className="grid gap-px bg-paper-foreground/10 sm:grid-cols-2">
                {[
                  ["Domínio oficial", `Ativação do endereço ${proposalConfig.domain}, sujeito à disponibilidade no momento do registro.`],
                  ["Experiência mobile-first", "Leitura rápida, navegação simples e botões de contato pensados primeiro para o celular."],
                  ["Vitrine completa", "Os cinco ambientes, as nove modalidades e as informações decisivas reunidas em uma apresentação profissional."],
                  ["Confiança real", "Espaço preparado para avaliações e depoimentos reais fornecidos e aprovados pela academia."],
                ].map(([title, description]) => (
                  <article key={title} className="bg-paper p-6 sm:p-8">
                    <Check className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-6 font-display text-xl font-bold uppercase">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper-muted">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="investimento" aria-labelledby="investment-title" className="scroll-mt-20 border-y border-paper-foreground/10 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 id="investment-title" className="text-balance font-display text-4xl font-black leading-[.95] tracking-[-0.03em] uppercase sm:text-5xl lg:text-6xl">
                Escolha o nível de autonomia da nova estrutura.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper-muted">
                O desenvolvimento é um investimento único. A diferença entre os planos está na forma como o conteúdo será atualizado depois da publicação.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {proposalConfig.developmentPlans.map((plan) => (
                <article key={plan.name} className={plan.recommended ? "relative bg-background px-7 pt-16 pb-7 text-foreground sm:px-10 sm:pt-16 sm:pb-10" : "border border-paper-foreground/15 bg-paper p-7 sm:p-10"}>
                  {plan.recommended && <p className="absolute top-0 right-0 bg-primary px-4 py-2 text-xs font-bold tracking-[.1em] text-primary-foreground uppercase">Recomendado</p>}
                  <h3 className="max-w-sm font-display text-3xl font-black uppercase">{plan.name}</h3>
                  <p className={`mt-4 max-w-lg leading-relaxed ${plan.recommended ? "text-muted-foreground" : "text-paper-muted"}`}>{plan.description}</p>
                  <p className="mt-10 flex items-start gap-2 tabular-nums"><span className="mt-2 text-sm font-bold">R$</span><span className="font-display text-6xl font-black tracking-[-0.04em]">{plan.price}</span><span className="mt-auto pb-2 text-sm">,00</span></p>
                  <p className={`mt-1 text-xs font-semibold tracking-wide uppercase ${plan.recommended ? "text-muted-foreground" : "text-paper-muted"}`}>Pagamento único</p>
                  <ul className={`mt-9 divide-y ${plan.recommended ? "divide-white/12" : "divide-paper-foreground/10"}`}>
                    {plan.items.map((item) => <li key={item} className="flex gap-3 py-4 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="monthly-title" className="bg-secondary py-20 text-foreground md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-20">
              <h2 id="monthly-title" className="font-display text-4xl font-black leading-[.95] tracking-[-0.03em] uppercase sm:text-5xl">Suporte para manter e acelerar.</h2>
              <p className="max-w-2xl leading-relaxed text-secondary-foreground/75">A gestão mensal é opcional e começa somente após a publicação. Ela mantém a infraestrutura estável ou amplia o projeto com captação automatizada.</p>
            </div>

            <div className="mt-14 grid border-t border-white/20 lg:grid-cols-2">
              {proposalConfig.monthlyPlans.map((plan, index) => (
                <article key={plan.name} className={`py-10 lg:px-10 ${index > 0 ? "border-t border-white/20 lg:border-t-0 lg:border-l" : ""}`}>
                  <div className="flex items-center justify-between gap-4">
                    {index === 0 ? <ShieldCheck className="size-7 text-primary" aria-hidden="true" /> : <Bot className="size-7 text-primary" aria-hidden="true" />}
                    {plan.recommended && <span className="text-xs font-bold tracking-[.1em] text-primary uppercase">Recomendado</span>}
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-black uppercase">{plan.name}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-secondary-foreground/75">{plan.description}</p>
                  <p className="mt-8 tabular-nums"><span className="text-sm font-bold">R$ </span><span className="font-display text-5xl font-black">{plan.price}</span><span className="text-sm">,00 / mês</span></p>
                  <ul className="mt-8 space-y-4">
                    {plan.items.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="size-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="conditions-title" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:gap-20 lg:px-8">
            <div>
              <CreditCard className="size-8 text-primary" aria-hidden="true" />
              <h2 id="conditions-title" className="mt-8 font-display text-4xl font-black leading-[.95] tracking-[-0.03em] uppercase sm:text-5xl">Condições que acompanham o caixa da academia.</h2>
            </div>
            <div className="border-t border-paper-foreground/15">
              <div className="grid gap-4 border-b border-paper-foreground/15 py-7 sm:grid-cols-[160px_1fr]"><p className="font-bold">PIX</p><p className="leading-relaxed text-paper-muted">50% de sinal no fechamento e 50% na aprovação e entrega final do projeto publicado.</p></div>
              <div className="grid gap-4 border-b border-paper-foreground/15 py-7 sm:grid-cols-[160px_1fr]"><p className="font-bold">Cartão</p><p className="leading-relaxed text-paper-muted">Parcelamento em até 12 vezes, com o acréscimo aplicado pela operadora.</p></div>
              <div className="grid gap-4 border-b border-paper-foreground/15 py-7 sm:grid-cols-[160px_1fr]"><p className="font-bold text-primary">Bônus</p><p className="leading-relaxed text-paper-muted">O registro do domínio no primeiro ano será custeado pela equipe de desenvolvimento.</p></div>
            </div>
          </div>
        </section>

        <section aria-labelledby="roi-title" className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14 lg:px-8">
            <TrendingUp className="size-12" aria-hidden="true" />
            <div>
              <h2 id="roi-title" className="max-w-5xl text-balance font-display text-3xl font-black leading-tight uppercase sm:text-4xl">Se a nova estrutura ajudar a fechar apenas uma ou duas matrículas por mês vindas do Google, o investimento começa a trabalhar para se pagar.</h2>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-primary-foreground/80">O resultado depende da procura, do posicionamento e do atendimento comercial. O projeto entrega a base para a Ed Fitness ser encontrada e conduzir melhor cada oportunidade.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="timeline-title" className="bg-background py-20 text-foreground md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
              <div>
                <CalendarDays className="size-8 text-primary" aria-hidden="true" />
                <h2 id="timeline-title" className="mt-8 font-display text-4xl font-black leading-[.95] uppercase sm:text-5xl">Do aceite ao site no ar em 10 a 15 dias úteis.</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">O prazo começa após a aprovação e o recebimento das fotos, horários e demais materiais necessários.</p>
              </div>
              <ol className="border-t border-white/15">
                {deliverySteps.map((step, index) => (
                  <li key={step.label} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[60px_1fr]">
                    <span className="font-display text-2xl font-black text-primary tabular-nums">0{index + 1}</span>
                    <div><h3 className="font-display text-xl font-bold uppercase">{step.label}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section aria-labelledby="next-step-title" className="py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
            <Sparkles className="mx-auto size-8 text-primary" aria-hidden="true" />
            <h2 id="next-step-title" className="mt-8 text-balance font-display text-4xl font-black leading-[.95] tracking-[-0.03em] uppercase sm:text-5xl lg:text-6xl">A próxima matrícula pode começar antes do aluno sair de casa.</h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-paper-muted">Para iniciar o projeto e verificar a disponibilidade do domínio pretendido, basta aprovar a proposta e enviar os materiais da academia.</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ProposalButton href={proposalWhatsappUrl}>Conversar sobre a proposta <MessageCircle className="size-4" /></ProposalButton>
              <ProposalButton href="/" secondary>Rever o protótipo <ArrowUpRight className="size-4" /></ProposalButton>
            </div>
            <p className="mt-8 text-xs font-semibold tracking-wide text-paper-muted uppercase">Proposta válida por {proposalConfig.validity}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-paper-foreground/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div><EdProposalLogo /><p className="mt-4 text-sm text-paper-muted">{proposalConfig.client} · {proposalConfig.address}</p></div>
          <div className="text-sm md:text-right"><p className="font-bold">{proposalConfig.responsible}</p><p className="mt-1 text-paper-muted">{proposalConfig.role} · WhatsApp: (21) 99237-9899</p></div>
        </div>
      </footer>
    </div>
  );
}
