import { MotionTitleSection, MotionSubtitleSection } from "../AboutUs/styles";
import {
  ContainerSectionContact,
  MotionContainerForms,
  MotionContainerLocation,
} from "./styles";

const Contact = () => {

  return (
    <ContainerSectionContact id="contact">
      <MotionTitleSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contate-me
      </MotionTitleSection>
      <MotionSubtitleSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <span>Fale conosco</span> e dê o primeiro passo para sua nova rotina!
      </MotionSubtitleSection>

      <div className="container-forms-map">
        <MotionContainerForms
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <label>Nome:</label>
          <input type="text" placeholder="Nome" />

          <label>E-mail:</label>
          <input type="email" placeholder="exemplo@email.com" />

          <label>Telefone:</label>
          <input type="tel" placeholder="(DDD) 00000-0000" />

          <label>Plano de Interesse:</label>
          <select>
            <option>Plano Fit</option>
            <option>Plano Power</option>
            <option>Plano Elite</option>
            <option>Plano Pro</option>
          </select>

          <label>Mensagem:</label>
          <textarea placeholder="Deixe sua mensagem" />

          <button type="submit">Enviar</button>
        </MotionContainerForms>

        <MotionContainerLocation
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4337.1639437463255!2d-46.716992023913434!3d-23.591499462701577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce56e6b07e20fd%3A0x3e92884f86367c11!2sRua%20dos%20Tr%C3%AAs%20Irm%C3%A3os%2C%20850%20-%20Vila%20Progredior%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005615-190!5e1!3m2!1spt-BR!2sbr!4v1743203665222!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
          />

          <div className="container-info-location">
            <p>
              Nosso <span>Endereço:</span>
            </p>
            <ul>
              <li>
                <p>Rua dos Três Irmãos, 850</p>
              </li>
              <li>
                <p>Vila Progredir, São Paulo - SP</p>
              </li>
              <li>
                <p>04277 - 040</p>
              </li>
              <li>
                <p>De 6h às 23h</p>
              </li>
            </ul>
          </div>
        </MotionContainerLocation>
      </div>
    </ContainerSectionContact>
  );
};

export default Contact;
