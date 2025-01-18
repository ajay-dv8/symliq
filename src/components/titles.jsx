"use client"
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";  
import { cn } from '@/lib/utils'; 

export const Titles = ({ smallTitle, bigTitle, subLineOne, subLineTwo, className, subClassName, smallClassName }) => {
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
    <div className=' '>
      <h4 className={cn("text-lg text-center font-normal text-colorDark/60 my-10", smallClassName)}>
        {smallTitle}
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
          className={cn("text-center text-colorDark ~text-3xl/7xl font-normal", className)}>
        {bigTitle}
        </motion.h1> 

      <motion.div 
        ref={subTextContainerRef}
        initial="hidden"
        animate={subTextIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="text-center ~mt-3/10" 
      >
        <motion.p 
          variants={itemVariants}
          className={('text-colorDark/60 ~text-base/lg font-normal md:font-normal', subClassName)}>
          {subLineOne}
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className={('text-colorDark/60 ~text-base/lg font-normal md:font-normal', subClassName)}>
          {subLineTwo}
        </motion.p>
      </motion.div>
      </motion.div>
    </div>
  )
}
