---
name: Ed Fitness
description: Landing page esportiva, editorial e direta, orientada à conversão por WhatsApp.
colors:
  background: "#0a0c22"
  background-subtle: "#10132f"
  secondary: "#262a64"
  paper: "#f3f1eb"
  foreground: "#ffffff"
  muted-foreground: "#aeb2d6"
  primary: "#d9142e"
  ring: "#ff8a96"
  border: "rgba(255, 255, 255, 0.09)"
typography:
  display:
    fontFamily: "Archivo, Arial, Helvetica, sans-serif"
    fontSize: "clamp(58px, 7.5vw, 96px)"
    fontWeight: 850
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Archivo, Arial, Helvetica, sans-serif"
    fontSize: "clamp(38px, 5.6vw, 72px)"
    fontWeight: 780
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, Arial, Helvetica, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  square: "0"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.square}"
    height: "46px"
  panel-dark:
    backgroundColor: "{colors.background-subtle}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.square}"
---

# Design System: Ed Fitness

## Overview

**Creative North Star: "Energia Editorial"**

A interface combina fotografia de treino em escala ampla, fundos azul-marinho profundos, tipografia condensada e acentos vermelhos pontuais. O resultado deve parecer atlético e confiante, mas continuar acolhedor, legível e factual; a ação principal é sempre a aula experimental ou o contato com a recepção.

**Key Characteristics:**

- Composição editorial, superfícies retas e bordas finas.
- Contraste forte entre azul profundo, branco, papel claro e vermelho de ação.
- Títulos condensados em caixa alta; corpo e interface sóbrios.
- Conteúdo fácil de escanear, com planos, horários e modalidades em blocos comparáveis.

## Colors

O azul profundo cria a base; branco e cinzas azulados sustentam leitura; o vermelho é reservado para marca, ênfase e conversão. A seção clara em papel quebra o ritmo no contato. Os valores normativos estão no frontmatter e em `theme.tokens.css`.

**The Action Red Rule.** Use `primary` em CTAs com texto branco; o vermelho de marca original (`#ed1930`) fica restrito a grafismos ou texto grande, pois não oferece o mesmo contraste para texto normal.

## Typography

**Display Font:** Archivo variável, condensada para largura aproximada de 82%, em pesos altos.  
**Body/UI Font:** Inter, pesos 400–700.  
**Fallback:** Arial, Helvetica, sans-serif.

Hero e títulos de seção usam Archivo em caixa alta, entrelinha compacta e tracking negativo. Texto corrido, navegação, labels e botões usam Inter. Eyebrows e metadados usam 10–12 px, peso 700 e tracking amplo; não devem carregar conteúdo essencial longo.

**The Two-Font Rule.** Archivo expressa energia e hierarquia; Inter preserva clareza funcional. Não introduzir uma terceira família.

## Layout

O conteúdo vive em um container central de até 1180 px, com 24 px de margem lateral no desktop e 16 px no mobile. Seções usam respiro vertical fluido (`clamp(84px, 10vw, 140px)`), grids assimétricos no hero e na introdução e grids regulares para modalidades, planos e contato.

O sistema é mobile-first no comportamento, com quebras específicas entre 500 e 960 px: navegação vira menu em painel abaixo de 850 px; hero e introduções colapsam perto de 700–760 px; planos passam de quatro para duas e depois uma coluna; modalidades passam de três para duas e uma; contato, benefícios e rodapé também simplificam para uma leitura linear. No mobile, ações do hero empilham e ocupam a largura útil, enquanto o painel lateral do hero é removido.

## Elevation & Depth

A página é plana por padrão. Profundidade vem de alternância tonal, overlays sobre fotografia, transparência com blur no header/painel do hero e bordas de 1 px. Os tokens de sombra existem como reserva em `theme.tokens.css`, mas a implementação atual não usa sombras em cards; não adicionar elevação decorativa sem estender conscientemente o sistema.

## Shapes

A linguagem implementada é predominantemente ortogonal: botões, cards, painéis, imagens e controles não recebem arredondamento. Bordas discretas estruturam a informação; recortes de imagem e blocos vermelhos reforçam o ritmo editorial. Os raios presentes em `theme.tokens.css` são tokens disponíveis, não o padrão visual desta landing page.

## Components

- **Header:** fixo, translúcido, com blur, borda inferior e CTA vermelho; no mobile troca a navegação por botão de 46 × 46 px e painel lateral com links grandes.
- **CTA primário:** retangular, altura mínima de 46 px, fundo vermelho e texto branco; hover escurece e sobe 2 px. Links secundários usam sublinhado/borda inferior.
- **Hero:** fotografia em tela cheia com gradientes de proteção, headline condensada, localização, duas ações e nota explícita sobre a imagem.
- **Faixa de dados:** fundo vermelho e três métricas; empilha em telas estreitas.
- **Galeria e vídeo:** imagens dessaturadas que recuperam cor e ampliam levemente no hover; legendas ficam sobre gradiente. O vídeo mantém controles nativos.
- **Modalidades:** matriz clara separada por linhas, sem cards flutuantes.
- **Planos:** grid de cards escuros; o recomendado usa fundo navy, borda e faixa vermelha, sem depender apenas do texto “Melhor valor”.
- **Benefícios e contato:** listas estruturadas por divisores e cards de contato com uma única variação vermelha para WhatsApp.

Interações duram de 200–500 ms; a entrada do hero dura 650 ms. Movimento comunica estado — hover, abertura do menu e chegada do conteúdo — sem bloquear leitura. Em `prefers-reduced-motion: reduce`, animações e transições são reduzidas a praticamente zero e o scroll suave é removido.

Acessibilidade implementada: link de salto, landmarks semânticos, labels de navegação e ícones, foco visível de 3 px, alvos de 44–48 px, textos alternativos, lazy loading nas imagens secundárias, menu móvel com `Escape`, retenção de foco e restauração do foco ao fechar. Não remover esses comportamentos ao criar variantes.

## Do's and Don'ts

### Do:

- **Do** manter WhatsApp/aula experimental como ação primária e planos como caminho secundário.
- **Do** usar fotografias e vídeo herdados somente como material ilustrativo, acompanhados por aviso visível; eles não comprovam a estrutura física real da Ed Fitness.
- **Do** preservar contraste WCAG AA, foco por teclado, semântica e redução de movimento.
- **Do** priorizar leitura e conversão móvel, mantendo preços, horários e modalidades fáceis de comparar.

### Don't:

- **Don't** transformar a interface em uma coleção de cards arredondados, gradientes decorativos ou sombras gratuitas.
- **Don't** usar mídia ilustrativa como prova, nem inferir resultados, depoimentos, certificações ou instalações não verificadas.
- **Don't** espalhar o vermelho por grandes áreas sem função; sua raridade orienta a ação.
- **Don't** reintroduzir componentes legados presentes no repositório, mas não usados por `src/App.jsx`.
