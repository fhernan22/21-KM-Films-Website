import styled from "styled-components"
import { motion } from "framer-motion"

export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;

  @media (max-width: 767px) and (max-width: 1023px) {
    margin-bottom: 150px;
  }
`

export const Video = styled.div`
  height: 100%;
  width: 100%;

  video {
    object-fit: cover;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: block;

  @media (max-width: 767px) {
    display: none;
  }
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -120px;
  left: -18px;
  color: ${props => props.theme.text};
  pointer-events: none;

  @media (max-width: 1023px) {
    left: -10px;
    bottom: -92px;
  }

  @media (max-width: 767px) {
    max-width: calc(100% + 6px);
    overflow: hidden;
    left: -6px;
    bottom: -62px;
  }
`

export const Headline = styled(motion.span)`
  display: block;
  font-size: 23rem;
  font-weight: 900;
  line-height: 0.76;

  @media (max-width: 1023px) {
    line-height: 0.7821428571;
    font-size: 15rem;
  }

  @media (max-width: 767px) {
    line-height: 0.78125;
    font-size: 8.75rem;
  }
`

export const Content = styled.h2`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};

  @media (max-width: 1023px) {
    width: 100%;
    line-height: 1.1;
    font-size: 2.625rem;
    margin: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    line-height: 1;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }
`

export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;

  /* @media (max-width: 1023px) {
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 40px;
  } */
`

export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${props => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${props => props.theme.text};
        }
      }
    }
  }

  @media (max-width: 1023px) {
    margin-left: 0;
    position: relative;
    left: 0;
    top: 17px;
    width: 100%;
    padding-left: 0;
    padding-top: 0;

    .meta {
      display: none;
    }
  }

  @media (max-width: 767px) {
    height: 190px;
    padding-bottom: 0;
    h3 {
      margin: 0;
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }

    .meta {
      display: none;
    }

    .featured-title {
      font-size: 3.75rem;
      line-height: 0.861428571;
    }

    .arrow {
      width: 76.19px;
      height: 43px;
    }
  }
`

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;

  @media (max-width: 1023px) {
    margin: 0 -32px;
  }

  @media (max-width: 767px) {
    height: 190px;
  }

  @media (max-width: 1023px) {
    width: calc(100% + 64px);
  }
`

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`

export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${props => props.theme.text};
  }

  @media (max-width: 1023px) {
    width: 100%;
    margin-left: 0;
    flex-basis: 100%;

    h2 {
      margin: 0 0 34px;
      width: 100%;
      font-size: 2.5rem;
      line-height: 1;
    }

    p {
      width: 100%;
      margin: 0;
    }
  }
`

export const Services = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 86px;
    padding-top: 0;
  }
`

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 300;
  }
`
