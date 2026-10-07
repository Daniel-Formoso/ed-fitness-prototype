# Extração de movimento — Smart Fit

Referência analisada: <https://www.smartfit.com.br/>  
Data da captura: 07/10/2026  
Viewport observado: 1373 × 1244 px

## Resumo

A home da Smart Fit não apresenta preloader nem uma intro coreografada. O primeiro impacto é imediato: um vídeo de 13 segundos ocupa todo o hero, inicia automaticamente, sem áudio, e repete em loop. O hero permanece preso ao topo durante o primeiro trecho da rolagem enquanto o conteúdo branco avança sobre ele. Ao sair do topo, o cabeçalho troca de transparente para branco em 200 ms. O restante da página usa movimento de forma funcional: carrosséis por `translateX`, cards com expansão no hover, três planos entrando em cascata e um marquee lento na faixa de países.

## Linha do tempo

| t / evento | elemento | efeito | from → to | duração | delay | easing | gatilho | origem |
|---|---|---|---|---:|---:|---|---|---|
| 0 ms | hero | vídeo de fundo | poster → reprodução | loop de 13 s | 0 | linear da mídia | carregamento | medido |
| 0 ms | hero/copy | conteúdo já visível | sem reveal detectado | — | — | — | carregamento | observado |
| 100 ms | Plano Black | `enter-up` | `opacity: 0; translateY(30px)` → `opacity: 1; translateY(0)` | 300 ms | 100 ms | `ease-in` | montagem da página | medido |
| 200 ms | Plano Fit | `enter-up` | `opacity: 0; translateY(30px)` → `opacity: 1; translateY(0)` | 300 ms | 200 ms | `ease-in` | montagem da página | medido |
| 300 ms | Plano Smart | `enter-up` | `opacity: 0; translateY(30px)` → `opacity: 1; translateY(0)` | 300 ms | 300 ms | `ease-in` | montagem da página | medido |
| scroll > hero | cabeçalho | troca de superfície | transparente → branco com borda preta a 10% | 200 ms | 0 | `cubic-bezier(.4,0,.2,1)` | rolagem | medido |
| scroll inicial | hero | composição sticky | hero fixo no topo → conteúdo branco sobreposto | acompanha o scroll | 0 | relação 1:1 | rolagem | medido pela geometria |
| hover | card de produto | expansão vertical | `scaleY(1)` → `scaleY(1.05)` | 300 ms | 0 | `cubic-bezier(0,0,.2,1)` | hover desktop | medido |
| hover | imagem do card | expansão horizontal | `scaleX(1)` → `scaleX(1.05)` | 300 ms | 0 | `cubic-bezier(0,0,.2,1)` | hover desktop | medido |
| hover | descrição do card | reveal | `max-height: 0; opacity: 0; margin-top: 0` → conteúdo visível | 300 ms | 0 | `cubic-bezier(0,0,.2,1)` | hover desktop | medido |
| hover | seta do card | entrada curta | `translateY(8px); opacity: 0` → `translateY(0); opacity: 1` | 300 ms | 0 | `cubic-bezier(0,0,.2,1)` | hover desktop | medido |
| interação | carrossel de produtos | deslocamento horizontal | posição atual → próximo grupo | ~300–500 ms | 0 | ease-out | clique/arraste | estimado; interação bloqueada pelo navegador seguro |
| quando visível | países | marquee | `translateX(0)` → `translateX(calc(-50% - 4px))` | 40 s | 0 | linear | loop, pausável no hover | medido no CSS; ativação por visibilidade inferida |
| autoplay | indicador de carrossel | preenchimento | `width: 0%` → `width: 100%` | 4 s | 0 | linear | slide ativo | medido no CSS |
| hover | links e botões | troca de cor/opacidade | estado base → hover | 150 ms | 0 | `cubic-bezier(.4,0,.2,1)` | hover/focus | medido |
| abrir dropdown | painel | pop-in | `opacity: 0; translateY(12px) scale(.94)` → estado normal | 300 ms | 0 | `cubic-bezier(.16,1,.3,1)` | abrir | medido no CSS |
| fechar dropdown | painel | pop-out | estado normal → `opacity: 0; translateY(8px) scale(.97)` | 200 ms | 0 | `cubic-bezier(.4,0,1,1)` | fechar | medido no CSS |
| abrir modal desktop | modal | pop-in | `opacity: 0; translateY(12px) scale(.94)` → estado normal | 300 ms | 0 | `cubic-bezier(.16,1,.3,1)` | abrir | medido no CSS |
| abrir modal mobile | sheet | slide-up | `translateY(100%)` → `translateY(0)` | 300 ms | 0 | `cubic-bezier(.32,.72,0,1)` | abrir | medido no CSS |

## Técnica e bibliotecas detectadas

- Next.js com bundle Turbopack e utilitários Tailwind.
- Movimento principal feito com CSS, vídeo HTML e transformações controladas por React.
- Não foram encontrados GSAP, Framer Motion, Lottie, Rive, canvas ou WebGL na página observada.
- O carrossel usa um trilho transformado por `matrix(...)`; o padrão é compatível com Embla, mas a biblioteca não pôde ser confirmada. Tratar como inferência.
- A seção inicial usa `position: sticky`, não parallax por JavaScript.
- O vídeo desktop medido é `https://www.smartfit.com.br/assets/content/home/smart-fit.mp4`. É material proprietário da Smart Fit e não deve ser reutilizado.

## Valores medidos

- Vídeo desktop: 13 s, `autoplay`, `muted`, `loop`, playback rate 1.
- Header: 200 ms para `background-color` e `box-shadow`, `cubic-bezier(.4,0,.2,1)`.
- Hover dos cards: 300 ms, `cubic-bezier(0,0,.2,1)`.
- `enter-up`: 300 ms, `ease-in`, deslocamento vertical de 30 px, com delays de 100/200/300 ms.
- Marquee: 40 s, linear, infinito.
- Progresso de autoplay: 4 s, linear.
- Links e botões: 150 ms, `cubic-bezier(.4,0,.2,1)`.
- Dropdown/modal: 150–300 ms, com curvas declaradas na tabela.

## Valores estimados

- A duração do deslocamento do carrossel foi estimada em aproximadamente 300–500 ms. A tentativa de acionar o controle foi impedida pela política de navegação segura da aba, então não há amostragem temporal confiável desse item.
- A ativação do marquee ao entrar no viewport é inferida: fora da área visível, o estado computado estava pausado.
- Não há evidência de stagger no hero. O conteúdo aparece pronto e o vídeo fornece o movimento inicial.

## Recriação recomendada para a Ed Fitness

O movimento mais valioso para adaptar é a combinação `vídeo/foto com vida + hero sticky + superfície clara que avança`, mantendo a identidade verde da Ed Fitness. O código abaixo usa Framer Motion para os reveals e CSS para o sticky; não reutiliza mídia nem marca da Smart Fit.

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const enterUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};

export function MotionGroup({ children }: PropsWithChildren) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={container}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({ children }: PropsWithChildren) {
  return <motion.div variants={enterUp}>{children}</motion.div>;
}
```

```tsx
export function StickyHero() {
  return (
    <div className="relative h-[140svh]">
      <section className="sticky top-0 h-svh overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/ed-fitness-hero-poster.webp"
        >
          <source src="/video/ed-fitness-hero.webm" type="video/webm" />
          <source src="/video/ed-fitness-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex h-full items-end px-6 pb-16 lg:items-center lg:px-12">
          {/* copy e CTA da Ed Fitness */}
        </div>
      </section>
    </div>
  );
}
```

```css
@media (hover: hover) and (pointer: fine) {
  .service-card {
    transform-origin: bottom;
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
  }

  .service-card:hover {
    transform: scaleY(1.05);
  }

  .service-card__image {
    transform-origin: bottom;
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
  }

  .service-card:hover .service-card__image {
    transform: scaleX(1.05);
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero-video {
    display: none;
  }
}
```

## Aplicação sugerida no protótipo

1. Manter o conteúdo do hero imediatamente legível; não criar preloader.
2. Usar um vídeo próprio de 8–15 s, mudo, comprimido e com poster otimizado. Até existir vídeo real da academia, manter a imagem atual.
3. Aplicar `enter-up` somente quando cada seção entra no viewport. A Smart Fit anima os planos na montagem, o que pode terminar antes de o usuário vê-los; para a Ed Fitness, `whileInView` é melhor.
4. Reaproveitar o hover de 300 ms nos cards de modalidades, mas limitar o scale a 1.02–1.03 para evitar distorção excessiva das fotos.
5. Usar o marquee apenas para fatos curtos e reais, como modalidades ou benefícios; não para texto essencial.
6. Manter CTAs com feedback de 150 ms e o header com troca de superfície em 200 ms.

## Acessibilidade e performance

- Respeitar `prefers-reduced-motion`; os cards e o marquee da referência já usam `motion-reduce:animate-none`.
- Não esconder o título/CTA aguardando animação. O conteúdo deve existir no primeiro frame.
- Animar prioritariamente `transform` e `opacity`. O reveal por `max-height` da referência funciona, mas causa layout; no protótipo, prefira transformar um wrapper ou reservar espaço.
- Usar `poster`, `preload="metadata"`, `playsInline` e versões WebM/MP4 do vídeo.
- Evitar autoplay de vídeo no mobile quando a economia de dados estiver ativa; a imagem de poster deve sustentar o layout sozinha.
- Pausar vídeo e marquee fora do viewport e quando a aba estiver oculta.
- Nunca depender apenas do hover: o texto completo deve estar disponível em touch e teclado.

## Limitações

- A aba de inspeção não expôs `document.getAnimations()`, portanto as medições vieram de CSSOM, estilos computados, geometria e estado da mídia, não de WAAPI.
- A política segura do navegador bloqueou uma tentativa de interação no controle do carrossel por ambiguidade com um link de portal; a duração do slide ficou rotulada como estimativa.
- Não foi copiado código-fonte proprietário, logo, foto ou vídeo. A especificação cobre apenas o comportamento do movimento.

