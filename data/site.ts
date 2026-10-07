export const siteConfig = {
  name: "Ed Fitness",
  tagline: "Saúde em primeiro lugar",
  description: "Musculação, cardio, aulas coletivas, Pilates e lutas em um só lugar.",
  phone: "5521976374176",
  whatsappMessage: "Olá, quero agendar uma aula experimental na Ed Fitness.",
  instagram: "https://instagram.com/edfitnessoficial",
  address: {
    street: "Rua Barroso, 20",
    district: "Vila São Luís",
    city: "Nova Iguaçu",
    state: "RJ",
  },
  hours: {
    weekdays: "Segunda a sexta: 6h às 22h",
    saturday: "Sábado: 7h30 às 13h30",
    sunday: "Domingo: fechado",
  },
  navigation: [
    { label: "A academia", href: "#academia" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  modalities: [
    ["Musculação", "Força e condicionamento"],
    ["Cardio", "Resistência e energia"],
    ["Bike", "Aulas coletivas"],
    ["Ritmos", "Movimento e diversão"],
    ["Localizada", "Treino coletivo"],
    ["Pilates", "Controle e mobilidade"],
    ["Jiu-Jitsu", "Técnica e disciplina"],
    ["Judô", "Esporte e evolução"],
    ["Muay Thai", "Potência e foco"],
  ],
  plans: [
    { name: "Anual", price: "99,90", detail: "12 parcelas de R$ 99,90", featured: true },
    { name: "Semestral", price: "109,90", detail: "6 parcelas de R$ 109,90", featured: false },
    { name: "Recorrente", price: "119,90", detail: "cobrança mensal", featured: false },
    { name: "Mensal", price: "159,90", detail: "pagamento mensal", featured: false },
  ],
  faq: [
    ["A primeira aula é gratuita?", "Sim. Fale com a recepção pelo WhatsApp para confirmar o melhor horário e agendar sua aula experimental."],
    ["Quais modalidades estão disponíveis?", "A Ed Fitness oferece musculação, cardio, bike, ritmos, localizada, Pilates, Jiu-Jitsu, Judô e Muay Thai. Consulte a recepção sobre horários e acesso em cada plano."],
    ["A avaliação física está incluída?", "A matrícula custa R$ 60 e inclui a avaliação física. O treino é preparado em até um dia e há reavaliação trimestral."],
    ["Qual é o horário de funcionamento?", "De segunda a sexta, das 6h às 22h. Aos sábados, das 7h30 às 13h30. A academia não abre aos domingos."],
    ["Existe plano família?", "Sim. O valor informado é de R$ 130 por pessoa/mês. Consulte as condições diretamente com a recepção."],
    ["Onde fica a Ed Fitness?", "Na Rua Barroso, 20, Vila São Luís, em Nova Iguaçu — RJ."],
  ],
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
export const mapUrl = "https://www.google.com/maps/search/?api=1&query=Rua%20Barroso%2020%20Vila%20São%20Luís%20Nova%20Iguaçu%20RJ";
