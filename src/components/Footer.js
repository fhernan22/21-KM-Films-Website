import React, { useEffect, useRef } from "react"

// Scroll Animations
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

//Styled Components
import { Container, Flex } from "../styles/GlobalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/FooterStyles"

//Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

//Custom Hooks
import useElementPosition from "../hooks/useElementPosition"

const Footer = ({ setHamburgerPosition, onCursor }) => {
  const instagramRef = useRef(null)
  const instagramPosition = useElementPosition(instagramRef)

  const facebookRef = useRef(null)
  const facebookPosition = useElementPosition(facebookRef)

  const vimeoRef = useRef(null)
  const vimeoPosition = useElementPosition(vimeoRef)

  const animation = useAnimation()
  const [footerRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  const menuHover = x => {
    onCursor("locked")
    setHamburgerPosition({ x: x })
  }

  return (
    <FooterNav
      ref={footerRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Flex spaceBetween>
          <FooterContent>
            <p>432.307.4964</p>
            <p>21km-films@gmail.com</p>
          </FooterContent>
          <FooterContent wider>
            <p>12345 NW 67 CT</p>
            <p>Hialeah Gardens, FL</p>
          </FooterContent>
          <FooterSocial>
            <a
              onMouseEnter={() => menuHover(instagramPosition.x)}
              onMouseLeave={onCursor}
              ref={instagramRef}
              href="https://www.instagram.com/elefantes_de_limon/"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => menuHover(facebookPosition.x)}
              onMouseLeave={onCursor}
              ref={facebookRef}
              href="https://www.facebook.com/ransey.padilla.5"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => menuHover(vimeoPosition.x)}
              onMouseLeave={onCursor}
              ref={vimeoRef}
              href="/"
              target="_blank"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
