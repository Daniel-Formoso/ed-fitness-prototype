# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoas de Nova Iguaçu e arredores que estão comparando academias, querem conhecer a estrutura, consultar modalidades e planos e reduzir a insegurança antes de começar a treinar.

## Product Purpose

Apresentar a Ed Fitness em um protótipo comercial convincente e facilitar a decisão de agendar uma aula experimental gratuita ou conversar com a recepção pelo WhatsApp.

## Positioning

A Ed Fitness reúne musculação, cardio, aulas coletivas, Pilates e lutas no mesmo endereço, com acompanhamento desde a avaliação física até as reavaliações periódicas.

## Operating Context

O visitante normalmente acessa pelo celular, compara estrutura, modalidades, horários e preços e então entra em contato com a recepção. A conversão principal acontece pelo WhatsApp.

## Capabilities and Constraints

- Site de apresentação responsivo em React 19, Vite 6 e styled-components.
- Navegação por âncoras dentro de uma landing page.
- Galeria, vídeo, apresentação de modalidades, planos e contato.
- O protótipo deve substituir a identidade e o conteúdo da Elite Gym pela Ed Fitness.
- O repositório-base `elite-gym` deve permanecer sem alterações; todo trabalho ocorre neste repositório separado.
- Não inventar depoimentos, certificações, resultados, números de alunos ou outros fatos não presentes na referência.

## Brand Commitments

- Nome: Ed Fitness.
- Assinatura: “Saúde em primeiro lugar”.
- Referência de marca e conteúdo: https://pallmfour.com.br/edfitness/
- Identidade escura com azul profundo, vermelho intenso e branco, conforme `design-system.md` e `theme.tokens.css`.
- Tom direto, acolhedor, energético e sem promessas exageradas.

## Evidence on Hand

- Design System medido e documentado em `design-system.md`.
- Tokens de implementação em `theme.tokens.css`.
- Fotografias e vídeos de academia em `public/assets/`; são ativos herdados para prototipagem e não comprovam a estrutura física real da Ed Fitness.
- A referência pública informa endereço, modalidades, horários, preços, benefícios e canais de contato da Ed Fitness.
- Não há depoimentos reais fornecidos para este protótipo; o trabalho não deve apresentar depoimentos fictícios como prova social.

## Product Principles

- Mostrar a experiência de treino antes de pedir compromisso.
- Tornar modalidades, horários e preços fáceis de localizar e comparar.
- Manter a aula experimental e o WhatsApp como caminhos de ação claros.
- Usar apenas fatos verificáveis da referência e identificar ativos meramente ilustrativos.
- Priorizar leitura, navegação e conversão em telas móveis.

## Accessibility & Inclusion

O site deve manter contraste WCAG AA para texto normal, navegação por teclado, foco visível, alvos de toque confortáveis, semântica adequada e respeito a `prefers-reduced-motion`.
