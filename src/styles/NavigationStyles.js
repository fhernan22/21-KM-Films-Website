import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${props => props.theme.background};
  }

  @media screen and (max-width: 1023px) {
    top: 0;
    padding: 20px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 29px 0;
  }
`
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${props => props.theme.background};
        }
      }
    }
  }

  @media screen and (max-width: 1023px) {
    ul {
      height: 70%;
      li {
        height: 70px;

        .link {
          transform: translateX(0) !important;

          .arrow {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    ul {
      /* margin-top: -350px; */
      li {
        height: 50px;
        font-size: 1.75rem;
        line-height: 1.7857142857;
      }
    }
  }
`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${props => props.theme.background};
  }
  svg path {
    fill: ${props => props.theme.background};
  }

  @media screen and (max-width: 1023px) {
    font-size: 0.875rem;
    line-height: 1.0714285714;
  }

  @media screen and (max-width: 767px) {
    bottom: 50px;
    padding: 32px 0;
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`
