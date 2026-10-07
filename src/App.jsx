import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCheck,
  FiClock,
  FiInstagram,
  FiMapPin,
  FiMenu,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import {
  Action,
  BenefitsGrid,
  Brand,
  ContactCard,
  ContactGrid,
  Container,
  FeatureImage,
  Footer,
  Gallery,
  Header,
  Hero,
  HeroCopy,
  HeroImage,
  HeroPanel,
  Intro,
  MobileNav,
  Modalities,
  Nav,
  NavButton,
  Plan,
  Plans,
  Section,
  SectionHeading,
  SkipLink,
  StatBar,
  VideoStage,
} from "./styles";

const whatsapp =
  "https://wa.me/5521976374176?text=Olá%2C%20quero%20agendar%20uma%20aula%20experimental%20na%20Ed%20Fitness.";

const modalities = [
  ["Musculação", "Força e condicionamento"],
  ["Cardio", "Resistência e energia"],
  ["Bike", "Aulas coletivas"],
  ["Ritmos", "Movimento e diversão"],
  ["Localizada", "Treino coletivo"],
  ["Pilates", "Controle e mobilidade"],
  ["Jiu-Jitsu", "Técnica e disciplina"],
  ["Judô", "Esporte e evolução"],
  ["Muay Thai", "Potência e foco"],
];

const plans = [
  { name: "Anual", price: "99,90", period: "12 parcelas de R$ 99,90", featured: true },
  { name: "Semestral", price: "109,90", period: "6 parcelas de R$ 109,90" },
  { name: "Recorrente", price: "119,90", period: "cobrança mensal" },
  { name: "Mensal", price: "159,90", period: "pagamento mensal" },
];

function Logo() {
  return (
    <Brand href="#inicio" aria-label="Ed Fitness — início">
      <span>ED</span>
      <strong>FITNESS</strong>
    </Brand>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) return () => (document.body.style.overflow = "");

    const focusable = menuRef.current?.querySelectorAll("a[href], button:not([disabled])");
    focusable?.[0]?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <SkipLink href="#conteudo">Ir para o conteúdo</SkipLink>
      <Header>
        <Container>
          <Logo />
          <Nav aria-label="Navegação principal">
            <a href="#experiencia">A academia</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </Nav>
          <Action href={whatsapp} target="_blank" rel="noreferrer">
            Aula experimental <FiArrowUpRight aria-hidden="true" />
          </Action>
          <NavButton
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </NavButton>
        </Container>
      </Header>

      <MobileNav id="menu-mobile" ref={menuRef} data-open={menuOpen} aria-hidden={!menuOpen}>
        <a href="#experiencia" onClick={closeMenu}>A academia</a>
        <a href="#modalidades" onClick={closeMenu}>Modalidades</a>
        <a href="#planos" onClick={closeMenu}>Planos</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
        <Action href={whatsapp} target="_blank" rel="noreferrer">
          Falar com a recepção <FiArrowUpRight />
        </Action>
      </MobileNav>

      <main id="conteudo">
        <Hero id="inicio">
          <HeroImage>
            <img src="/assets/foto-1.webp" alt="Pessoa treinando levantamento de peso em academia" />
          </HeroImage>
          <Container>
            <HeroCopy>
              <div className="location">Nova Iguaçu, RJ</div>
              <h1>Seu treino.<br />Seu ritmo.<br /><em>Sua evolução.</em></h1>
              <p>
                Musculação, cardio, aulas coletivas, Pilates e lutas em um só lugar.
                Comece com uma aula experimental gratuita.
              </p>
              <div className="hero-actions">
                <Action href={whatsapp} target="_blank" rel="noreferrer">
                  Agendar aula grátis <FiArrowUpRight />
                </Action>
                <a className="text-link" href="#planos">
                  Conhecer planos <FiArrowDownRight />
                </a>
              </div>
              <small className="hero-note">Imagem ilustrativa deste protótipo.</small>
            </HeroCopy>
            <HeroPanel>
              <span>Saúde em primeiro lugar</span>
              <strong>Aberta de segunda a sexta, das 6h às 22h.</strong>
              <a href="#contato">Ver todos os horários <FiArrowDownRight /></a>
            </HeroPanel>
          </Container>
        </Hero>

        <StatBar aria-label="Destaques da Ed Fitness">
          <Container>
            <div><strong>9</strong><span>modalidades</span></div>
            <div><strong>1ª</strong><span>aula gratuita</span></div>
            <div><strong>6h–22h</strong><span>segunda a sexta</span></div>
          </Container>
        </StatBar>

        <Section id="experiencia">
          <Container>
            <Intro>
              <SectionHeading>
                <h2>Estrutura para quem está <em>começando</em> e para quem não para.</h2>
              </SectionHeading>
              <div>
                <p>
                  Acompanhamento desde a avaliação física, treino preparado em até um dia
                  e reavaliações a cada três meses para orientar sua rotina.
                </p>
                <p className="asset-note">Imagens ilustrativas deste protótipo.</p>
              </div>
            </Intro>
            <Gallery>
              <FeatureImage className="wide">
                <img src="/assets/foto-2.webp" alt="Área de musculação de uma academia" loading="lazy" />
                <span>Musculação</span>
              </FeatureImage>
              <FeatureImage>
                <img src="/assets/foto-6.webp" alt="Pessoa realizando exercício funcional" loading="lazy" />
                <span>Movimento</span>
              </FeatureImage>
              <FeatureImage>
                <img src="/assets/foto-7.webp" alt="Equipamentos de academia" loading="lazy" />
                <span>Estrutura</span>
              </FeatureImage>
            </Gallery>
            <VideoStage>
              <video controls preload="metadata" poster="/assets/video/poster-video.webp" aria-label="Vídeo ilustrativo de uma experiência de treino em academia">
                <source src="/assets/video/video-academia.mp4" type="video/mp4" />
                Seu navegador não oferece suporte a vídeo. Você ainda pode conhecer as modalidades e os planos nesta página.
              </video>
              <figcaption><strong>Treino em movimento</strong><span>Vídeo ilustrativo do protótipo.</span></figcaption>
            </VideoStage>
          </Container>
        </Section>

        <Section id="modalidades" data-tone="light">
          <Container>
            <Intro>
              <SectionHeading>
                <h2>Um lugar. Várias formas de <em>se movimentar.</em></h2>
              </SectionHeading>
              <p>Encontre o treino que combina com sua rotina. Consulte a recepção sobre o acesso de cada plano.</p>
            </Intro>
            <Modalities>
              {modalities.map(([name, detail]) => (
                <article key={name}>
                  <div><strong>{name}</strong><span>{detail}</span></div>
                </article>
              ))}
            </Modalities>
          </Container>
        </Section>

        <Section id="planos">
          <Container>
            <Intro>
              <SectionHeading>
                <h2>Escolha seu compromisso com a <em>sua saúde.</em></h2>
              </SectionHeading>
              <p>Todos os planos dão acesso à musculação. Matrícula: R$ 60, com avaliação física incluída.</p>
            </Intro>
            <Plans>
              {plans.map((plan) => (
                <Plan key={plan.name} data-featured={plan.featured || undefined}>
                  {plan.featured && <small>Melhor valor</small>}
                  <h3>{plan.name}</h3>
                  <div className="price"><sup>R$</sup><strong>{plan.price}</strong></div>
                  <span>{plan.period}</span>
                  <ul>
                    <li><FiCheck /> Avaliação física incluída</li>
                    <li><FiCheck /> Treino personalizado</li>
                    <li><FiCheck /> Acesso por reconhecimento facial</li>
                  </ul>
                  <a href={whatsapp} target="_blank" rel="noreferrer">
                    Quero este plano <FiArrowUpRight />
                  </a>
                </Plan>
              ))}
            </Plans>
            <p className="family-note">Plano família: R$ 130 por pessoa/mês. Consulte condições com a recepção.</p>
          </Container>
        </Section>

        <Section data-tone="navy">
          <Container>
            <BenefitsGrid>
              <SectionHeading>
                <h2>Você não precisa descobrir tudo <em>sozinho.</em></h2>
                <Action href={whatsapp} target="_blank" rel="noreferrer">
                  Começar agora <FiMessageCircle />
                </Action>
              </SectionHeading>
              <ul>
                <li><FiCheck /><span><strong>Primeira aula gratuita</strong>Conheça o espaço antes de decidir.</span></li>
                <li><FiCheck /><span><strong>Avaliação incluída</strong>Um ponto de partida para o seu treino.</span></li>
                <li><FiCheck /><span><strong>Treino em até um dia</strong>Mais agilidade para começar.</span></li>
                <li><FiCheck /><span><strong>Reavaliação trimestral</strong>Acompanhe a evolução da sua rotina.</span></li>
              </ul>
            </BenefitsGrid>
          </Container>
        </Section>

        <Section id="contato" data-tone="light">
          <Container>
            <Intro>
              <SectionHeading>
                <h2>Seu próximo treino pode <em>começar aqui.</em></h2>
              </SectionHeading>
              <p>Fale com a recepção para confirmar a modalidade, o horário e agendar sua aula gratuita.</p>
            </Intro>
            <ContactGrid>
              <ContactCard>
                <FiMapPin />
                <div><span>Endereço</span><strong>Rua Barroso, 20<br />Vila São Luís — Nova Iguaçu, RJ</strong></div>
                <a href="https://www.google.com/maps/search/?api=1&query=Rua%20Barroso%2020%20Vila%20São%20Luís%20Nova%20Iguaçu%20RJ" target="_blank" rel="noreferrer">Abrir no mapa <FiArrowUpRight /></a>
              </ContactCard>
              <ContactCard>
                <FiClock />
                <div><span>Horários</span><strong>Seg–Sex: 6h às 22h<br />Sábado: 7h30 às 13h30</strong></div>
                <small>Domingo: fechado</small>
              </ContactCard>
              <ContactCard data-accent>
                <FiMessageCircle />
                <div><span>WhatsApp</span><strong>Agende sua aula experimental com a recepção.</strong></div>
                <a href={whatsapp} target="_blank" rel="noreferrer">Iniciar conversa <FiArrowUpRight /></a>
              </ContactCard>
            </ContactGrid>
          </Container>
        </Section>
      </main>

      <Footer>
        <Container>
          <Logo />
          <p>Saúde em primeiro lugar.</p>
          <a href="https://instagram.com/edfitnessoficial" target="_blank" rel="noreferrer" aria-label="Instagram da Ed Fitness"><FiInstagram /></a>
          <small>Protótipo comercial · {new Date().getFullYear()}</small>
        </Container>
      </Footer>
    </>
  );
}

export default App;
