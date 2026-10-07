import styled from "styled-components";
import { media } from "../../styles/globalStyles";

export const ContainerPaddingTop = styled.div`
  padding-top: 120px;

  @media ${media.tablet} {
    padding-top: 160px;
  }

  @media ${media.desktop} {
    padding-top: 180px;
  }
`;
