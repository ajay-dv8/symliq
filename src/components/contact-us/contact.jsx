'use client'
 import { Titles } from "../titles";
 import React, { useRef } from 'react'
import { delay, motion, useInView } from "framer-motion";  
import { TiMail } from "react-icons/ti";

export const Contact = () => {

  const textContainerRef = useRef(null);

  const textIsInView = useInView(textContainerRef, { once: false, threshold: 0.7 });

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
    <div className=" " >  
      <motion.div 
        ref={textContainerRef}
        initial="hidden"
        animate={textIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="mt-16"
      > 
        <motion.h1 
          variants={itemVariants}
          className=" text-4xl md:text-9xl mt-8 text-colorLight font-semibold text-center drop-shadow-xl"
        >
          info@symliq.com
        </motion.h1>
      </motion.div>
 
    </div>
  );
};
