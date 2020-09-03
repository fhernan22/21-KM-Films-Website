import React, { useRef, useEffect } from "react"

import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles"

import useWindowSize from "../../hooks/useWindowSize"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext"

const HomeBanner = ({ onCursor }) => {
  let canvas = useRef(null)
  const size = useWindowSize()
  const { currentTheme, toggledTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()

    let renderingCtx = renderingElement.getContext("2d")
    let drawingContext = drawingElement.getContext("2d")

    let lastX, lastY

    let moving = false

    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", evt => {
      moving = true
      lastX = evt.pageX - renderingElement.offsetLeft
      lastY = evt.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", evt => {
      moving = false
      lastX = evt.pageX - renderingElement.offsetLeft
      lastY = evt.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", evt => {
      //   dispatch({
      //     type: "TOGGLE_THEME",
      //     theme: currentTheme,
      //     toggledTheme: false,
      //   })

      if (moving) {
        drawingContext.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"

        let currentX = evt.pageX - renderingElement.offsetLeft
        let currentY = evt.pageY - renderingElement.offsetTop
        drawingContext.lineJoin = "round"
        drawingContext.moveTo(lastX, lastY)
        drawingContext.lineTo(currentX, currentY)
        drawingContext.closePath()
        drawingContext.lineWidth = 120
        drawingContext.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
      //   if (toggledTheme) {
      //     moving = false
      //     renderingCtx.globalCompositeOperation = "source-over"
      //     renderingCtx.fillStyle = currentTheme === "dark" ? "#000" : "#fff"
      //     renderingCtx.fillRect(0, 0, size.width, size.height)
      //   }
    })
  }, [currentTheme])

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          src={require("../../assets/video/video.mp4")}
        ></video>
      </Video>
      <Canvas
        width={size.width}
        height={size.height}
        ref={canvas}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>DIG</Headline>
        <Headline variants={child}>DEEP</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
