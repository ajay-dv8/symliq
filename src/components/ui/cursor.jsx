"use client"
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

export const Cursor = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0, y: 0
  }); 

  const mouseVariant = {
    default: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 10,
    }
  }

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
    })}

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    } 

  }, []);

  return (
    <>
    <motion.div 
      variants={mouseVariant}
      animate="default"
      className='hidden md:block bg-transparent mix-blend-difference border border-teal p-1 z-50 rounded-full fixed top-0 left-0'
    >
      <div className="hidden md:block size-2 bg-teal/80 rounded-full"/>
    </motion.div>
    </>
      
  )
}

 
 


 