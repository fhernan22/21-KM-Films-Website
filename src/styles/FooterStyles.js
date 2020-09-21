import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;

  @media screen and (max-width: 1023px) {
    margin-top: 96px;
  }
`

export const FooterContent = styled.div`
  color: #ea281e;
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  flex: 1;
  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}

  @media only screen and (max-width: 1023px) {
    flex-basis: 100%;
    width: 100%;
  }
`

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
    margin-top: 20px;

    a {
      padding-left: 0;
    }
  }
`
