import styled from "styled-components";
import { motion } from "motion/react";
import { media } from "../../styles/globalStyles";

export const ContainerButton = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const Button = styled.button`
  background-color: #ffcc00;
  padding: 10px 20px;
  border: none;
  outline: 0;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 400;
  font-family: var(--montserrat);
  cursor: pointer;
  transition: 0.5s ease;
  color: #000000;

  @media ${media.desktop} {
    &:hover {
      background-color: rgba(255, 204, 0, 0.36);
    }
  }
`;

export const MotionButton = motion(Button);
