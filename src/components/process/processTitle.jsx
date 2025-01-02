"use client"
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";  

export const ProcessTitle = () => {
  const textContainerRef = useRef(null);
  const subTextContainerRef = useRef(null);

  const textIsInView = useInView(textContainerRef, { once: false, threshold: 0.5 });
  const subTextIsInView = useInView(subTextContainerRef, { once: false, threshold: 0.6 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 30,
        ease: "easeInOut",
        duration: 1,
      } 
    },
  };
  return (
    <div className='mt-28 pt-10'>
      <h4 className="text-lg text-center font-semibold text-colorDark/50 my-10">
        Our Process
      </h4>

      <motion.div 
        ref={textContainerRef}
        initial="hidden"
        animate={textIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className=""
      >
        <motion.h1 
          variants={itemVariants}
          className="text-center text-colorDark text-7xl font-semibold">
        Trust The Process
        </motion.h1>

      <motion.div 
        ref={subTextContainerRef}
        initial="hidden"
        animate={subTextIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="text-center mt-10"
      >
        <motion.p 
          variants={itemVariants}
          className='text-colorDark text-lg font-semibold'>
          Great process makes
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className='text-colorDark text-lg font-semibold'>
          great product
        </motion.p>
      </motion.div>
      </motion.div>
    </div>
  )
}
