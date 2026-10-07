import {
  ContainerFooter,
  ContainerInfo,
  ContainerLinksAboutCreator,
} from "./styles";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
  return (
    <ContainerFooter>
      <div className="container-image-footer">
        <img
          src="/assets/LOGO-AMARELA.svg"
          alt="Logo Elite Gym Footer"
          loading="lazy"
        />
        <div className="name-creator">
          <p>Desenvolvido por Daniel Formoso, 2025</p>

          <ContainerLinksAboutCreator>
            <div className="social-link">
              <div className="link">
                <a href="#">
                  <FaInstagramSquare />
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
              <div className="link">
                <a href="#">
                  <TbWorld />
                </a>
              </div>
            </div>
          </ContainerLinksAboutCreator>
        </div>
      </div>

      <div className="container-info-geral">
        <ContainerInfo className="tips-articles">
          <ul>
            <p>Dicas e Artigos</p>
            <li>
              <a href="#">Treino em Casa</a>
            </li>
            <li>
              <a href="#">Dicas de Motivação</a>
            </li>
            <li>
              <a href="#">Treinos Funcionais</a>
            </li>
            <li>
              <a href="#">Dicas de Alongamento</a>
            </li>
          </ul>
        </ContainerInfo>

        <ContainerInfo className="programs-classes">
          <ul>
            <p>Programas e Aulas</p>
            <li>
              <a href="#">Treinos em Grupo</a>
            </li>
            <li>
              <a href="#">Aulas de Yoga</a>
            </li>
            <li>
              <a href="#">Treinamento par Atletas</a>
            </li>
            <li>
              <a href="#">Workshop Fitness</a>
            </li>
          </ul>
        </ContainerInfo>

        <ContainerInfo className="partners">
          <ul>
            <p>Parceiros</p>
            <li>
              <a href="#">Parceiros de Nutrição</a>
            </li>
            <li>
              <a href="#">Parceiros de Equipamentos</a>
            </li>
            <li>
              <a href="#">Parceiros de Suplementos</a>
            </li>
            <li>
              <a href="#">Parceiros de Fisioterapia</a>
            </li>
          </ul>
        </ContainerInfo>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
