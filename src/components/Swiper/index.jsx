import {
  MotionAnimationSwiper,
  StyledSwiper,
  StyledSwiperSlide,
  InfoSlide,
  ContainerTestemonials,
} from "./styles";
import "swiper/css";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const Testemonials = () => {
  return (
    <MotionAnimationSwiper
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <StyledSwiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          820: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        speed={1000}
        loop={true}
      >
        <StyledSwiperSlide>
          <InfoSlide>
            <img
              src="/assets/avatar-1.svg"
              alt="ícone Depoimento 1"
              loading="lazy"
            />
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </InfoSlide>

          <div className="name">
            <p>Amanda Rodrigues</p>
          </div>

          <ContainerTestemonials>
            <div className="quotes-left">
              <FaQuoteLeft />
            </div>
            <p>
              Antes de entrar na Elite Gym, eu me sentia cansada e sem energia.
              Hoje, me sinto mais forte, confiante e determinada. Cada treino é
              um passo para me tornar a melhor versão de mim mesma. A equipe e o
              ambiente da academia são incríveis e me motivam a ir além!
            </p>
            <div className="quotes-right">
              <FaQuoteRight />
            </div>
          </ContainerTestemonials>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <InfoSlide>
            <img
              src="/assets/avatar-2.svg"
              alt="ícone Depoimento 2"
              loading="lazy"
            />
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </InfoSlide>
          <div className="name">
            <p>João Rodrigues</p>
          </div>
          <ContainerTestemonials>
            <div className="quotes-left">
              <FaQuoteLeft />
            </div>
            <p>
              A Elite Gym mudou minha vida! Com o acompanhamento dos
              profissionais e a estrutura de qualidade, consegui atingir meus
              objetivos de forma rápida e saudável. O ambiente é motivador, e os
              treinos são sempre ajustados às minhas necessidades.
            </p>
            <div className="quotes-right">
              <FaQuoteRight />
            </div>
          </ContainerTestemonials>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <InfoSlide>
            <img
              src="/assets/avatar-3.svg"
              alt="ícone Depoimento 3"
              loading="lazy"
            />
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </InfoSlide>
          <div className="name">
            <p>Lucas Mendes</p>
          </div>
          <ContainerTestemonials>
            <div className="quotes-left">
              <FaQuoteLeft />
            </div>
            <p>
              Na Elite Gym, encontrei a motivação que sempre faltou para manter
              uma rotina de treinos. Com o apoio dos profissionais, consegui
              definir metas claras e já vejo grandes resultados. O ambiente aqui
              me incentiva a sempre dar o meu melhor.”
            </p>
            <div className="quotes-right">
              <FaQuoteRight />
            </div>
          </ContainerTestemonials>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <InfoSlide>
            <img
              src="/assets/avatar-4.svg"
              alt="ícone Depoimento 4"
              loading="lazy"
            />
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </InfoSlide>
          <div className="name">
            <p>Camila Ferreira</p>
          </div>
          <ContainerTestemonials>
            <div className="quotes-left">
              <FaQuoteLeft />
            </div>
            <p>
              O ambiente na Elite Gym é incrível! Me sinto super motivada a cada
              treino, e os instrutores estão sempre prontos para ajudar. É ótimo
              treinar em um lugar onde me sinto acolhida e consigo ver
              resultados reais.
            </p>
            <div className="quotes-right">
              <FaQuoteRight />
            </div>
          </ContainerTestemonials>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <InfoSlide>
            <img
              src="/assets/avatar-5.svg"
              alt="ícone Depoimento 5"
              loading="lazy"
            />
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </InfoSlide>
          <div className="name">
            <p>Felipe Andrade</p>
          </div>
          <ContainerTestemonials>
            <div className="quotes-left">
              <FaQuoteLeft />
            </div>
            <p>
              A Elite Gym oferece tudo o que preciso para melhorar meu
              desempenho. Os equipamentos são ótimos e os instrutores são muito
              dedicados. Já vejo uma grande diferença desde que comecei a
              treinar aqui!
            </p>
            <div className="quotes-right">
              <FaQuoteRight />
            </div>
          </ContainerTestemonials>
        </StyledSwiperSlide>

        <StyledSwiperSlide>
          <InfoSlide>
            <img
              src="/assets/avatar-6.svg"
              alt="ícone Depoimento 6"
              loading="lazy"
            />
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </InfoSlide>
          <div className="name">
            <p>Juliana Costa</p>
          </div>
          <ContainerTestemonials>
            <div className="quotes-left">
              <FaQuoteLeft />
            </div>
            <p>
              Treinar na Elite Gym foi uma mudança completa para mim. Os treinos
              são dinâmicos e os instrutores são super atenciosos. Em poucos
              meses, já comecei a ver resultados e me sinto mais forte e
              confiante a cada dia.
            </p>
            <div className="quotes-right">
              <FaQuoteRight />
            </div>
          </ContainerTestemonials>
        </StyledSwiperSlide>
      </StyledSwiper>
    </MotionAnimationSwiper>
  );
};

export default Testemonials;
