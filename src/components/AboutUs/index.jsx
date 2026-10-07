import {
  ContainerGeral,
  MotionSubtitleSection,
  MotionTitleSection,
  TextAboutUs,
  MotionVideoAboutUs,
  MotionContainerTextVideo,
  MotionTextAbout,
  MotionListDifferences,
  ButtonAboutUs,
  ContainerButtonAboutUs,
} from "./styles";
import { FaDumbbell, FaUserTie, FaClipboardList } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";

const AboutUs = () => {
  return (
    <ContainerGeral id="about">
      <MotionTitleSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        Sobre Nós
      </MotionTitleSection>
      <MotionSubtitleSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1, delay: 0.5 }}
      >
        Conheça nossa <span>jornada!</span>
      </MotionSubtitleSection>
      <MotionContainerTextVideo>
        <TextAboutUs>
          <MotionTextAbout
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 1, delay: 0.8 }}
          >
            Acreditamos que cada jornada de fitness é única e merece um ambiente
            de apoio e motivação. Nosso compromisso é criar um espaço onde você
            se sinta desafiado, inspirado e impulsionado a atingir seus
            objetivos. Oferecemos treinamentos personalizados, aulas energéticas
            e acompanhamento contínuo, sempre com foco no seu bem-estar. Com a
            nossa equipe de especialistas ao seu lado, você estará pronto para
            conquistar novos patamares em sua saúde e forma física. Venha fazer
            parte dessa transformação e experimente a mudança que você merece!
          </MotionTextAbout>
          <MotionListDifferences
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 1, delay: 1.2 }}
          >
            <div className="titleDifferences">
              <p>
                Nossos <span>Diferenciais:</span>
              </p>
            </div>

            <ul>
              <li>
                <TbClock24 className="icon" />
                Atendimento 24h
              </li>
              <li>
                <FaUserTie className="icon" />
                Professores Qualificados
              </li>
              <li>
                <FaDumbbell className="icon" />
                Equipamentos Modernos
              </li>
              <li>
                <FaClipboardList className="icon" />
                Treinos Personalizados
              </li>
            </ul>
            <ContainerButtonAboutUs>
              <ButtonAboutUs>
                <a href="#">Venha nos conhecer!</a>
              </ButtonAboutUs>
            </ContainerButtonAboutUs>
          </MotionListDifferences>
        </TextAboutUs>
        <div>
          <MotionVideoAboutUs
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "tween", duration: 1, delay: 1.5 }}
          >
            <video
              className="horizontal-video"
              poster="/assets/video/poster-video.webp"
              controls
              loading="lazy"
            >
              <source
                src="/assets/video/video-academia.mp4"
                type="video/mp4"
                media="(max-width: 820px)"
              />
            </video>

            <video
              className="vertical-video"
              poster="/assets/video/poster-video-vertical.webp"
              controls
              loading="lazy"
            >
              <source
                src="/assets/video/video-academia-vertical.webm"
                media="(min-width: 1200px)"
              />
            </video>
          </MotionVideoAboutUs>
        </div>
      </MotionContainerTextVideo>
    </ContainerGeral>
  );
};

export default AboutUs;
