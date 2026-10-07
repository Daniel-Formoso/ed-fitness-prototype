import styled from "styled-components";
import { motion } from "motion/react";
import { media } from "../../styles/globalStyles";

export const ContainerContent = styled.section`
  padding-top: 100px;

  @media ${media.desktop} {
    padding-top: 130px;
  }

  @media ${media.desktopUltraLarge} {
    padding-top: 160px;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  margin-top: 40px;
  font-family: var(--ageo);
  font-weight: 800;

  & > span:nth-of-type(1) {
    color: #ffcc00;
    font-family: var(--ageo);
  }
`;

export const MotionTitle = motion(Title);

export const Name = styled.span`
  position: relative;
  display: inline-block;
  font-family: var(--ageo);

  &::after {
    content: " ";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #ffcc00;
    transform: rotate(-2deg);
    filter: blur(3px);
    border-radius: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 30px;
  margin: 40px 0;
  font-family: var(--roboto);
`;

export const MotionSubtitle = motion(Subtitle);

export const ContainerImages = styled.div`
  @media ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2px;
    row-gap: 2px;
    padding: 0 10%;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: none;

  &.foto-1 {
    display: block;
    border-radius: 20px;
  }

  @media ${media.tablet} {
    &.foto-1 {
      border-radius: 0;
      border-top-left-radius: 20px;
    }

    &.foto-2 {
      border-top-right-radius: 20px;
    }

    &.foto-3 {
      border-bottom-left-radius: 20px;
    }

    &.foto-4 {
      border-bottom-right-radius: 20px;
    }

    &.foto-2,
    &.foto-3,
    &.foto-4 {
      display: block;
    }
  }

  @media ${media.desktop} {
    &.foto-1,
    &.foto-2,
    &.foto-3,
    &.foto-4 {
      transition: filter 0.3s ease;
      filter: grayscale(100%);

      &:hover {
        filter: grayscale(0%);
      }
    }
  }
`;

export const MotionImage = motion(Image);
