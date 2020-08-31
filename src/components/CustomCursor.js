import React, { useState, useEffect, useRef } from "react"

import { Cursor } from "../styles/GlobalStyles"
import { useGlobalStateContext } from "../context/globalContext"

const CustomCursor = ({ toggleMenu }) => {
  const { cursorType } = useGlobalStateContext()
  const cursor = useRef(null)

  const onMouseMove = event => {
    const { x, y } = event
    cursor.current.style.left = `${x}px`
    cursor.current.style.top = `${y}px`
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor
        ref={cursor}
        className={`${!!cursorType ? "hovered" : ""} ${cursorType} ${
          toggleMenu ? "nav-open" : ""
        }`}
      />
    </>
  )
}

export default CustomCursor
