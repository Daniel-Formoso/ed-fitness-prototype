import { useState } from "react";
import MenuNav from "../NavBarMobile";
import {
  MotionHeaderContainer,
  LinkImage,
  Image,
  IconOpenMenu,
  ContainerMenuMobile,
  ContainerMenuDesktop,
  ListMenuDesktop,
  LinkListMenuDesktop,
  OurAppMenuDesktop,
  // Line,
} from "./styles";

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <>
      <MotionHeaderContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <LinkImage href="#inicio">
          <Image src="/assets/LOGO-AMARELA.svg" />
        </LinkImage>

        <ContainerMenuMobile isVisible={menuIsVisible}>
          <MenuNav toggleMenu={toggleMenu} />
        </ContainerMenuMobile>

        <IconOpenMenu onClick={toggleMenu} />

        <ContainerMenuDesktop>
          <ListMenuDesktop>
            <LinkListMenuDesktop>
              <a href="#inicio">Home</a>
            </LinkListMenuDesktop>
            <LinkListMenuDesktop>
              <a href="#about">Sobre Nós</a>
            </LinkListMenuDesktop>
            <LinkListMenuDesktop>
              <a href="#plans">Planos</a>
            </LinkListMenuDesktop>
            <LinkListMenuDesktop>
              <a href="#experiences">Experiências Reais</a>
            </LinkListMenuDesktop>
            <LinkListMenuDesktop>
              <a href="#contact">Contato</a>
            </LinkListMenuDesktop>
            <OurAppMenuDesktop>
              <a href="#">Nosso App</a>
            </OurAppMenuDesktop>
          </ListMenuDesktop>
        </ContainerMenuDesktop>
      </MotionHeaderContainer>

      {/* <Line /> */}
    </>
  );
};

export default Header;
