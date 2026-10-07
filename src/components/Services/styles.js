import styled from "styled-components";
import { media } from "../../styles/globalStyles";
import { motion } from "motion/react";



export const ContainerCards = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${media.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContainerCard = styled.div`
  border-radius: 20px;
  width: 100%;
  max-height: 480px;
  position: relative;
  padding: 0 6%;
  font-family: var(--roboto);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  &.elite {
    background-color: #3b3b40;
    color: #ffffff;
  }

  @media ${media.desktop} {
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.04);
    }
  }
`;

export const MotionContainerCard = motion(ContainerCard);

export const NoteBetterPlan = styled.div`
  background-color: #ffcc00;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  border-radius: 20px;
  position: absolute;
  top: -15px;
  left: 30px;
  color: #000000;

  & > span {
    font-size: 18px;
  }

  & > span > span {
    font-weight: bolder;
  }
`;

export const TitlePlans = styled.h1`
  padding-top: 45px;
  font-size: 25px;
`;

export const InfoCards = styled.div`
  & > p {
    line-height: 25px;
    margin: 25px 0;
  }

  & > p:nth-of-type(2) {
    margin-bottom: 0;
    font-size: 14px;
  }
`;

export const ContainerPricePlan = styled.div`
  line-height: 35px;

  & > p {
    text-transform: uppercase;
  }

  & > h1 {
    font-size: 35px;
    position: relative;
  }

  & > h1 > i {
    color: #ffffff;
    font-size: 18px;
    position: absolute;
    top: 0px;
  }

  & > p:nth-of-type(2) {
    text-transform: none;

    & > span {
      font-weight: bold;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  margin: 15px 0 25px 0;

  & > button {
    width: 100%;
    background-color: #ffcc00;
    border: none;
    border-radius: 20px;
    transition: 0.5s ease;

    &:hover {
      background-color: rgba(255, 204, 0, 0.36);
    }

    & > a {
      font-family: var(--montserrat);
      text-decoration: none;
      color: #000000;
      font-size: 15px;
      display: block;
      padding: 10px;
      border-radius: 20px;
    }
  }
`;
