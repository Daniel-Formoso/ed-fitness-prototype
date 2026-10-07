export const proposalConfig = {
  client: "Academia Ed Fitness",
  address: "R. Barroso, 20 — Vila São Luís",
  responsible: "Daniel Formoso",
  role: "Desenvolvedor Web",
  issuedAt: "07 de outubro de 2026",
  validity: "15 dias",
  domain: "academiaedfitness.com.br",
  phone: "5521992379899",
  whatsappMessage:
    "Olá, Daniel. Analisei a proposta digital da Ed Fitness e gostaria de conversar sobre o projeto.",
  developmentPlans: [
    {
      name: "Plano Essencial",
      price: "1.700",
      description: "Uma presença digital premium, rápida e pronta para converter visitas em conversas.",
      items: [
        "Site completo com design focado em conversão",
        "Fotos, modalidades e tabela de horários fixa",
        "Experiência mobile-first e contato por WhatsApp",
        "Estrutura técnica preparada para SEO local",
      ],
      recommended: false,
    },
    {
      name: "Plano Dinâmico com Painel",
      price: "2.400",
      description: "Autonomia para a recepção manter o site atualizado, com entrega do painel já configurado.",
      items: [
        "Tudo o que está incluído no Plano Essencial",
        "Painel de gerenciamento exclusivo",
        "Atualização de fotos e horários das aulas",
        "Gestão de promoções pela própria equipe",
        "Hospedagem, suporte contínuo e manutenção mensal contratados separadamente",
      ],
      recommended: true,
    },
  ],
  monthlyPlans: [
    {
      name: "Infraestrutura Essencial",
      price: "150",
      description: "Para manter o site rápido, seguro e profissional todos os dias.",
      items: [
        "Hospedagem de alta velocidade",
        "Certificado de segurança SSL",
        "Atualizações do sistema",
        "E-mail profissional da academia",
      ],
      recommended: false,
    },
    {
      name: "Automação Premium",
      price: "400",
      description: "Um bot de atendimento no WhatsApp para captar e qualificar interessados, inclusive fora do expediente.",
      items: [
        "Toda a infraestrutura do plano Essencial",
        "Mini-CRM para organizar novos contatos",
        "Bot de atendimento inicial no WhatsApp, disponível 24h",
        "Fluxo para preços, horários, localização e aula experimental",
        "Qualificação e encaminhamento dos interessados para a recepção",
        "Uma rodada mensal de ajustes no conteúdo do fluxo",
        "Custos de API do WhatsApp e ferramentas de terceiros contratados à parte",
      ],
      recommended: true,
    },
  ],
} as const;

export const proposalWhatsappUrl = `https://wa.me/${proposalConfig.phone}?text=${encodeURIComponent(
  proposalConfig.whatsappMessage,
)}`;
