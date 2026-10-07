import styled from "styled-components";
import { media } from "../../styles/globalStyles";

export const ContainerFooter = styled.footer`
  margin-top: 100px;
  padding: 20px 4% 0 4%;
  background-color: rgba(231, 231, 231, 0.75);
  box-shadow: rgba(100, 100, 111, 0.2) 0px -7px 29px 0px;

  @media ${media.tablet} {
    padding: 3% 5%;
  }

  @media ${media.desktop} {
    padding: 3% 15%;
  }

  @media ${media.desktopLarge} {
    padding: 2% 20%;
  }

  @media ${media.desktopUltraLarge} {
    padding: 2% 25%;
  }

  & > div.container-image-footer {
    display: flex;
    align-items: center;

    & > div.name-creator {
      font-family: var(--roboto);
      font-weight: 600;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      gap: 15px;
      font-size: 16px;
      /* height: 100%; */

      @media ${media.tablet} {
        font-size: 18px;
        align-items: flex-end;
      }
    }
  }

  & > div.container-image-footer img {
    width: 80px;

    @media ${media.tablet} {
      width: 100px;
    }

    @media ${media.desktopLarge} {
      width: 110px;
    }

    @media ${media.desktopUltraLarge} {
      width: 120px;
    }
  }

  & > div.container-info-geral {
    @media ${media.tablet} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ContainerLinksAboutCreator = styled.div`
  color: #000000;
  font-family: var(--roboto);

  & .social-link {
    display: inline-flex;
    gap: 10px;
    cursor: pointer;
    width: 100%;

    & .link a {
      font-size: 30px;
      color: #000000;
    }

    @media ${media.desktop} {
      & .link a {
        transition: all.3s ease;

        &:hover {
          color: #ffcc00;
        }
      }
    }
  }
`;

export const ContainerInfo = styled.div`
  font-family: var(--roboto);
  font-size: 18px;
  margin: 30px 0;

  & > ul {
    list-style: none;

    @media ${media.tablet} {
      text-align: center;
    }

    & > p {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    & > li {
      padding: 2px 0;
    }

    & > li a {
      text-decoration: none;
      color: #000000;

      @media ${media.desktop} {
        transition: all.3s ease;

        &:hover {
          color: #ffcc00;
          border-bottom: 1px solid #ffcc00;
        }
      }
    }
  }
`;
