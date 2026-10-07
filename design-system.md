# Design System — Ed Fitness

Referência auditada: https://pallmfour.com.br/edfitness/

Modo: **otimizado**. A inspeção foi feita no site renderizado em desktop (1299 × 1244 px), usando estilos computados do navegador. Portanto, cores, tipografia, raios e sombras abaixo são valores medidos no DOM, não aproximações visuais.

## 1. O que foi feito

- O vermelho original `#ED1930` foi preservado como cor de marca, mas branco sobre ele mede **4,39:1**, ligeiramente abaixo de WCAG AA para texto normal. Para botões, tabs e outros controles com texto branco, foi criado o vermelho interativo `#D9142E`, com **5,13:1**.
- O verde original do WhatsApp `#1DA851` tem contraste de apenas **3,10:1** com texto branco. O token interativo foi ajustado para `#14803D`, elevando o contraste para **5,02:1**.
- A tipografia medida é Arial/Helvetica. Para dar mais personalidade esportiva sem perder legibilidade, a proposta usa **Archivo** nos títulos e **Inter** em corpo e interface.

## 2. Documentação do Design System

### Cores

#### Fundos e superfícies

| Token | HEX / valor | Origem | Intenção |
|---|---:|---|---|
| `background` | `#0A0C22` | Medido (`--bg`) | Fundo principal, profundo e quase preto |
| `background-subtle` | `#10132F` | Medido (`--bg2`) | Alternância suave de seções |
| `card` | `#151938` | Medido (`--card`) | Cards, painéis e superfícies elevadas |
| `card-strong` | `#1A1D48` | Medido no DOM | Superfície de maior destaque |
| `secondary` | `#262A64` | Medido (`--navy`) | Controles secundários e blocos azul-violeta |
| `overlay` | `rgba(10, 12, 34, 0.78)` | Medido no DOM | Gradiente/overlay sobre fotografia |
| `border` | `rgba(255, 255, 255, 0.09)` | Medido (`--line`) | Divisores e contornos discretos |
| `border-strong` | `rgba(255, 255, 255, 0.28)` | Medido no DOM | Botão ghost, foco visual e separadores fortes |

#### Texto e conteúdo

| Token | HEX / valor | Origem | Intenção |
|---|---:|---|---|
| `foreground` | `#FFFFFF` | Medido | Títulos, valores e texto de alto destaque |
| `muted-foreground` | `#AEB2D6` | Medido (`--mut`) | Parágrafos e metadados; contraste 9,31:1 no fundo principal |
| `subtle-foreground` | `#D3D6F0` | Medido no DOM | Texto secundário mais claro |
| `disabled-foreground` | `rgba(255, 255, 255, 0.55)` | Medido no DOM | Estados inativos; usar apenas em texto grande ou não essencial |

#### Marca e estados

| Token | HEX | Origem | Intenção |
|---|---:|---|---|
| `brand` | `#ED1930` | Medido (`--red`) | Vermelho original da marca; grafismos, ícones e texto grande |
| `primary` | `#D9142E` | Otimizado | CTA, botão, tab ativa e controles com texto branco; contraste 5,13:1 |
| `primary-foreground` | `#FFFFFF` | Medido | Conteúdo sobre `primary` |
| `brand-soft` | `#FF8A96` | Medido no DOM | Destaque rosado e informação auxiliar |
| `brand-subtle` | `#FFD5DA` | Medido no DOM | Texto/ícone suave em áreas de marca |
| `brand-tint` | `rgba(237, 25, 48, 0.13)` | Medido no DOM | Badge, fundo de label e halo sutil |
| `success-original` | `#1DA851` | Medido (`--wpp`) | Registro da cor original do WhatsApp; não usar com texto branco normal |
| `success` | `#14803D` | Otimizado | Ação positiva/WhatsApp com texto branco; contraste 5,02:1 |
| `success-foreground` | `#FFFFFF` | Medido | Conteúdo sobre `success` otimizado |
| `destructive` | `#D9142E` | Otimizado | Erro ou ação destrutiva; distinguir por ícone e texto, não só pela cor |
| `ring` | `#FF8A96` | Medido e ressignificado | Foco de teclado visível sobre fundos escuros |

### Tipografia

#### Famílias

- **Display — Archivo**: títulos, números de preço e chamadas de campanha. Pesos 700 e 800.
- **Sans/UI — Inter**: corpo, navegação, botões, labels e dados. Pesos 400, 600 e 700.
- Fallback: `Arial, Helvetica, sans-serif`.

#### Escala recomendada

| Papel | Desktop | Mobile | Peso | Entrelinha | Tracking |
|---|---:|---:|---:|---:|---:|
| Display XL | 72 px | 48 px | 800 | 1.02 | -0.02em |
| Título de seção | 42 px | 34 px | 700 | 1.10 | -0.014em |
| Título de card | 22 px | 20 px | 700 | 1.20 | -0.01em |
| Corpo grande | 17 px | 16 px | 400 | 1.50 | 0 |
| Corpo | 16 px | 16 px | 400 | 1.50 | 0 |
| UI/label | 14 px | 14 px | 700 | 1.50 | 0.03em |
| Eyebrow | 12 px | 11 px | 700 | 1.40 | 0.20em |

Os valores de 72 px, 42 px, 22 px e 17 px foram medidos no site; a troca de família e a regularização responsiva fazem parte da otimização.

### Formas e efeitos

#### Raios

| Token | Valor | Uso |
|---|---:|---|
| `radius-sm` | 8 px | Badges compactos e pequenos controles |
| `radius-md` | 10 px | Tabs de dia, inputs e controles segmentados |
| `radius-lg` | 14 px | Botões, cards compactos e ações |
| `radius-xl` | 20 px | Cards editoriais e painéis principais |
| `radius-2xl` | 24 px | Modais e superfícies de grande escala |
| `radius-full` | 999 px | Pills, chips e navegação compacta |

O padrão dominante medido é 14 px nos controles e 20 px nos cards editoriais.

#### Bordas

- Padrão: `1px solid rgba(255, 255, 255, 0.09)`.
- Ghost/ênfase: `1px solid rgba(255, 255, 255, 0.28)`.
- Foco: anel externo de 3 px em `#FF8A96`, com offset de 2 px usando `#0A0C22`.

#### Elevação

| Nível | Sombra | Uso |
|---|---|---|
| `shadow-card` | `0 10px 30px -18px rgba(0,0,0,.55), 0 2px 8px rgba(0,0,0,.18)` | Card em repouso |
| `shadow-card-hover` | `0 18px 42px -20px rgba(0,0,0,.68), 0 6px 16px rgba(0,0,0,.22)` | Card em hover/foco |
| `shadow-primary` | `0 12px 30px -10px rgba(217,20,46,.55), 0 4px 12px rgba(217,20,46,.22)` | CTA primário |
| `shadow-modal` | `0 28px 80px -24px rgba(0,0,0,.78), 0 10px 28px rgba(0,0,0,.32)` | Modal e overlay |

A referência usa `0 12px 30px -10px rgba(237,25,48,.75)` no CTA. A versão otimizada reduz a opacidade e adiciona uma segunda camada curta para evitar uma sombra dura.

## 3. Arquivo de tema

O workspace está vazio e não contém `package.json`; portanto, a versão do Tailwind não pôde ser confirmada. A integração deve ser gerada somente após escolher:

- **Tailwind v4**: `app/globals.css` com `@theme`, sem `tailwind.config.ts`.
- **Tailwind v3**: `app/globals.css` com variáveis shadcn/ui e `tailwind.config.ts` contendo apenas `theme.extend`.

Enquanto isso, os valores independentes de framework estão em `theme.tokens.css`.

## 4. Validação

- Todos os tokens de cor documentados têm intenção explícita.
- Os pares de texto interativo branco atendem WCAG AA após a otimização.
- Valores originais que não atendem ao contraste foram preservados apenas como registro de marca, não como recomendação de uso interativo.
- Nenhum componente ou tela foi mapeado/gerado; o escopo permanece exclusivamente no Design System.
