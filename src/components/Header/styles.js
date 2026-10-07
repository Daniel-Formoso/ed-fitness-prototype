import { LuMenu } from "react-icons/lu";
import styled, { css } from "styled-components";
import { motion } from "motion/react";
import { media } from "../../styles/globalStyles";

export const IconOpenMenu = styled(LuMenu)`
  font-size: 40px;
  cursor: pointer;

  @media ${media.desktop} {
    display: none;
  }
`;

export const ContainerMenuMobile = styled.div`
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-15px);
  position: fixed;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: translateY(0px);
      z-index: 100;
    `}
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 4% 0 4%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  @media ${media.desktop} {
    padding: 1% 15%;
  }

  @media ${media.desktopLarge} {
    padding: 1% 20%;
  }

  @media ${media.desktopUltraLarge} {
    padding: 0.5% 25%;
  }
`;

export const MotionHeaderContainer = motion(HeaderContainer);

export const LinkImage = styled.a`
  text-decoration: none;

  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
`;

export const Image = styled.img`
  width: 80px;

  @media ${media.desktop} {
    width: 100px;
  }

  @media ${media.desktopUltraLarge} {
    width: 120px;
  }
`;

// ! Menu Desktop
export const ContainerMenuDesktop = styled.div`
  display: none;

  @media ${media.desktop} {
    display: block;
  }
`;

export const ListMenuDesktop = styled.ul`
  @media ${media.desktop} {
    display: flex;
    gap: 25px;
    list-style: none;
  }
`;

export const LinkListMenuDesktop = styled.li`
  @media ${media.desktop} {
    & > a {
      text-decoration: none;
      color: #000000;
      font-size: 15px;
      font-family: var(--montserrat);
      border-bottom: 1px solid transparent;
      transition: border-bottom-color 0.5s ease;

      &:hover {
        border-bottom-color: #ffcc00;
        border-bottom-width: 2px;
      }
    }
  }
`;

export const OurAppMenuDesktop = styled.li`
  @media ${media.desktop} {
    & > a {
      font-family: var(--montserrat);
      text-decoration: none;
      color: #000000;
      padding: 7px 15px;
      font-size: 15px;
      background-color: #ffcc00;
      border-radius: 20px;
      transition: 0.5s ease;

      &:hover {
        background-color: rgba(255, 204, 0, 0.36);
      }
    }
  }
`;
