import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 110px;
  right: 0;
  left: 0;
  margin: 0 4%;
`;

export const LinkList = styled.ul`
  list-style: none;
  font-size: 15px;
  background-color: #f5f5f5;
  z-index: 10;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const ItemList = styled.li`
  width: 100%;
  height: 50px;
`;

export const LinkItem = styled.a`
  display: flex;
  align-items: center;
  padding-left: 15px;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000000;
  font-family: var(--roboto);

  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    transition: 0.3s;
    font-weight: bold;
  }
`;

export const OurAppLinkItem = styled(LinkItem)`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #ffcc00;
`;
