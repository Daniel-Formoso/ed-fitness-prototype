import styled from "styled-components";
import { motion } from "motion/react";
import { media } from "../../styles/globalStyles";

export const ContainerSectionContact = styled.section`
  padding-top: 130px;

  @media ${media.tablet} {
    padding-top: 150px;
  }

  @media ${media.desktop} {
    padding-top: 180px;
  }

  & > div.container-forms-map {
    @media ${media.desktop} {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
  }
`;

export const ContainerForms = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media ${media.tablet} {
    margin: 40px 15% 0 15%;
  }

  @media ${media.desktop} {
    margin: 50px 0 0 0;
  }

  & > label {
    font-size: 18px;
    font-family: var(--roboto);
    font-weight: 600;
    padding: 0 0 5px 15px;
  }

  & > input {
    height: 45px;
    padding-left: 15px;
    margin-bottom: 25px;
    outline: 0;
    border-radius: 10px;
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    @media ${media.desktop} {
      height: 50px;
      width: 400px;
    }

    @media ${media.desktopLarge} {
      width: 500px;
    }

    &::placeholder {
      font-size: 15px;
    }
  }

  & > button {
    border: none;
    outline: 0;
    margin-top: 20px;
    height: 40px;
    font-size: 18px;
    font-family: var(--montserrat);
    background-color: #ffcc00;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.5s ease;

    @media ${media.desktop} {
      &:hover {
        background-color: rgba(255, 204, 0, 0.36);
      }
    }
  }

  & > select {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    outline: 0;
    border: 0;
    border-radius: 10px;
    height: 45px;
    padding-left: 15px;
    font-family: var(--montserrat);
    font-size: 15px;
    margin-bottom: 25px;
    cursor: pointer;
    color: #000000;

    @media ${media.desktop} {
      height: 60px;
    }

    & > option {
      font-family: var(--montserrat);
      font-size: 18px;
    }
  }

  & > textarea {
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    resize: none;
    height: 100px;
    border-radius: 20px;
    padding: 10px 15px;

    &::placeholder {
      font-size: 15px;
      font-family: var(--montserrat);
    }
  }
`;

export const MotionContainerForms = motion(ContainerForms);

export const ContainerLocation = styled.div`
  margin-top: 50px;
  width: 100%;

  & .container-info-location {
    @media ${media.desktop} {
      text-align: right;
    }

    & > p {
      width: 100%;
      font-size: 25px;
      font-family: var(--ageo);
      font-weight: 800;
      margin-bottom: 15px;

      & > span {
        color: #ffcc00;
      }
    }

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      list-style: none;
      font-family: var(--roboto);
    }
  }

  @media ${media.tablet} {
    width: 100%;
    padding: 0 15%;
  }

  @media ${media.desktop} {
    padding: 0;
    margin-top: 60px;
  }

  & > iframe {
    margin-bottom: 20px;
    width: 100%;
    height: 300px;
    border: 0;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    @media ${media.desktop} {
      height: 400px;
      width: 100%;
    }
  }
`;

export const MotionContainerLocation = motion(ContainerLocation);
