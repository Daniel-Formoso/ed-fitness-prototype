import {
  MotionTitleSection,
  MotionSubtitleSection,
  ContainerGeral,
} from "../AboutUs/styles";

import {
  ContainerCards,
  MotionContainerCard,
  TitlePlans,
  NoteBetterPlan,
  ContainerPricePlan,
  InfoCards,
  ContainerButton,
} from "./styles";

import { FaAsterisk } from "react-icons/fa6";

const PlansAndServices = () => {

  return (
    <ContainerGeral id="plans">
      <MotionTitleSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, Y: 0 }}
        transition={{ duration: 1 }}
      >
        Nossos Planos
      </MotionTitleSection>
      <MotionSubtitleSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, Y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Descubra o plano feito <span>sob medida</span> para você!
      </MotionSubtitleSection>
      <ContainerCards>
        <MotionContainerCard
          className="elite"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NoteBetterPlan>
            <span>
              O mais <span>vantajoso</span>
            </span>
          </NoteBetterPlan>

          <TitlePlans>Plano Elite</TitlePlans>

          <InfoCards>
            <p>
              Leve seus treinos ao máximo com o Plano Elite. Acesso 24h,
              treinamento personalizado e suporte completo para você atingir
              seus melhores resultados.
            </p>

            <ContainerPricePlan>
              <p>A partir de</p>
              <h1>
                R$ 99,90
                <i>
                  <FaAsterisk />
                </i>
              </h1>
              <p>
                <span>por 3 meses</span>, depois R$ 179,90/mês
              </p>
            </ContainerPricePlan>

            <p>12 meses de fidelidade</p>
          </InfoCards>

          <ContainerButton>
            <button>
              <a href="#">Contratar agora</a>
            </button>
          </ContainerButton>
        </MotionContainerCard>

        <MotionContainerCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <TitlePlans>Plano Fit</TitlePlans>

          <InfoCards>
            <p>
              Comece sua jornada fitness com o Plano Fit. Acesso à academia e
              aulas de grupo semanais para ajudar você a manter a forma com
              praticidade e qualidade.
            </p>

            <ContainerPricePlan>
              <p>A partir de</p>
              <h1>
                R$ 89,90
                <i>
                  <FaAsterisk />
                </i>
              </h1>
              <p>
                <span>no 1° mês</span>, depois R$ 109,90/mês
              </p>
            </ContainerPricePlan>

            <p>12 meses de fidelidade</p>
          </InfoCards>

          <ContainerButton>
            <button>
              <a href="#">Contratar agora</a>
            </button>
          </ContainerButton>
        </MotionContainerCard>

        <MotionContainerCard>
          <TitlePlans>Plano Power</TitlePlans>

          <InfoCards>
            <p>
              Desafie seus limites com o Plano Power. Foco em musculação intensa
              e treinos avançados para quem quer resultados rápidos e
              impactantes. Venha experimentar!
            </p>

            <ContainerPricePlan>
              <p>A partir de</p>
              <h1>
                R$ 129,90
                <i>
                  <FaAsterisk />
                </i>
              </h1>
              <p>
                <span>por 3 meses</span>, depois R$ 149,90/mês
              </p>
            </ContainerPricePlan>

            <p>12 meses de fidelidade</p>
          </InfoCards>

          <ContainerButton>
            <button>
              <a href="#">Contratar agora</a>
            </button>
          </ContainerButton>
        </MotionContainerCard>

        <MotionContainerCard>
          <TitlePlans>Plano Pro</TitlePlans>

          <InfoCards>
            <p>
              Supere ainda mais seus limites com o Plano Pro. Treinamento de
              alta performance para quem busca resultados extraordinários em
              competições. Vai encarar?
            </p>

            <ContainerPricePlan>
              <p>A partir de</p>
              <h1>
                R$ 269,90
                <i>
                  <FaAsterisk />
                </i>
              </h1>
              <p>
                <span>no 1° mês</span>, depois R$ 299,90/mês
              </p>
            </ContainerPricePlan>

            <p>Sem fidelidade</p>
          </InfoCards>

          <ContainerButton>
            <button>
              <a href="#">Contratar agora</a>
            </button>
          </ContainerButton>
        </MotionContainerCard>
      </ContainerCards>
    </ContainerGeral>
  );
};

export default PlansAndServices;
