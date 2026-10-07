import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { media } from "../../styles/globalStyles";
import { motion } from "motion/react";

export const StyledSwiper = styled(Swiper)`
  font-family: var(--roboto);
  margin-top: 40px;
  padding: 1%;
`;

export const AnimationSwiper = styled.div``;

export const MotionAnimationSwiper = motion(AnimationSwiper);

export const StyledSwiperSlide = styled(SwiperSlide)`
  padding: 10%;
  border-radius: 20px;
  height: 450px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  @media ${media.tablet} {
    padding: 5%;
  }

  @media ${media.desktopLarge} {
    padding: 4%;
  }

  @media ${media.desktopUltraLarge} {
    padding: 3.4%;
  }

  & .name {
    font-size: 20px;
    font-weight: 800;
    margin: 30px 0;
    letter-spacing: 1px;
  }
`;

export const InfoSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > img {
    width: 70px;
    border-radius: 100px;
  }

  & > div {
    color: #fabb05;
    font-size: 20px;
  }
`;

export const ContainerTestemonials = styled.div`
  position: relative;
  padding: 15px 0;
  padding-left: 5px;
  font-size: 16px;
  line-height: 25px;

  @media ${media.desktopLarge} {
    padding-left: 0;
  }

  & .quotes-left {
    font-size: 15px;
    position: absolute;
    top: 0;
    left: -15px;

    @media ${media.desktop} {
      font-size: 18px;
      left: -18px;
    }

    @media ${media.desktopLarge} {
      font-size: 20px;
      left: -25px;
    }
  }

  & .quotes-right {
    position: absolute;
    bottom: 0;
    right: -10px;

    @media ${media.desktop} {
      font-size: 18px;
      right: -13px;
    }

    @media ${media.desktopLarge} {
      font-size: 20px;
      right: -18px;
    }
  }
`;
