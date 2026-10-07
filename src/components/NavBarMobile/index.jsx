import {
  Container,
  LinkList,
  ItemList,
  LinkItem,
  OurAppLinkItem,
} from "./styles";

const MenuNav = ({ toggleMenu }) => {
  return (
    <>
      <Container>
        <LinkList>
          <ItemList>
            <LinkItem href="#inicio" onClick={toggleMenu}>
              Home
            </LinkItem>
          </ItemList>
          <ItemList>
            <LinkItem href="#about" onClick={toggleMenu}>
              Sobre Nós
            </LinkItem>
          </ItemList>
          <ItemList>
            <LinkItem href="#plans" onClick={toggleMenu}>
              Planos
            </LinkItem>
          </ItemList>
          <ItemList>
            <LinkItem href="#experiences" onClick={toggleMenu}>
              Experiências Reais
            </LinkItem>
          </ItemList>
          <ItemList>
            <LinkItem href="#contact" onClick={toggleMenu}>
              Contato
            </LinkItem>
          </ItemList>
          <ItemList>
            <OurAppLinkItem href="#" onClick={toggleMenu}>
              Nosso App
            </OurAppLinkItem>
          </ItemList>
        </LinkList>
      </Container>
    </>
  );
};

export default MenuNav;
