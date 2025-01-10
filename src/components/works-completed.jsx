"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion' 
import { Magnetic } from './magnetic';

export const WorksCompleted = () => {
  const textContainerRef = useRef(null); 

  const textIsInView = useInView(textContainerRef, { once: false, threshold: 0.4 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <motion.div
      ref={textContainerRef}
      initial="hidden"
      animate={textIsInView ? "show" : "hidden"}
      variants={containerVariants}
      className='bg-teal/80 flex flex-col justify-center md:flex-row ~pb-1/16 gap-8 md:pt-2 px-10'
    >
      <Magnetic>
      <motion.div 
        variants={itemVariants}
        className="border-x-2 flex items-center border-gradient-to-br from-indigo-300 to-violet-300 rounded-full ~py-3/5 px-10"
      >
        <h2 className='~text-4xl/6xl font-semibold text-gradient-to-br from-indigo-300 to-violet-300'> 75+ </h2>
        <div className='border-r-2 w-[1px] mx-4 h-[60%]'/>
        <h3 className='~text-xl/3xl text-gradient-to-br from-indigo-300 to-violet-300 '>Projects <br/>Completed</h3>
      </motion.div>
      </Magnetic>

      <Magnetic>
      <motion.div 
        variants={itemVariants}
        className="border-x-2 flex items-center border-gradient-to-br from-indigo-300 to-violet-300 rounded-full ~py-3/5 px-10"
      >
        <h2 className='~text-4xl/6xl font-semibold text-gradient-to-br from-indigo-300 to-violet-300'>30+</h2>
        <div className='border-r-2 w-[1px] mx-4 h-[60%]'/>
        <h3 className='~text-xl/3xl text-gradient-to-br from-indigo-300 to-violet-300 '>Startups <br/>Developed</h3>
      </motion.div> 
      </Magnetic>

      <Magnetic>
      <motion.div 
        variants={itemVariants}
        className="border-x-2 flex items-center border-gradient-to-br from-indigo-300 to-violet-300 rounded-full ~py-3/5 px-10"
      >
        <h2 className='~text-4xl/6xl font-semibold text-gradient-to-br from-indigo-300 to-violet-300'>120+</h2>
        <div className='border-r-2 w-[1px] mx-4 h-[60%]'/>
        <h3 className='~text-xl/3xl text-gradient-to-br from-indigo-300 to-violet-300 '>Happy <br/>Customers</h3>
      </motion.div> 
      </Magnetic>
    </motion.div>
  )
}
