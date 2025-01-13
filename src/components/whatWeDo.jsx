'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";  
import { Magnetic } from "./magnetic";
import MorphingText from "@/components/ui/morphing-text";

const texts = [
  "@symliq", 
  "We Design",
  "We Develop",
  "We Deploy", 
];

const BlendingText = () => {
  return <MorphingText className={"text-colorDark"} texts={texts} />;
}

export const WhatWeDo = () => { 
 
  const subTextContainerRef = useRef(null);  
  const subTextIsInView = useInView(subTextContainerRef, { once: false, threshold: 0.5 });
  
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
    <div id="about" className="w-full bg-colorLight text-colorDark p-10 ~mt-10/40" >
    
      <p className="font-bold text-colorDark/50 text-center text-xl mb-16">
        What We Do
      </p>
  
      {/* big title */}
      <Magnetic> 
      <div className="flex justify-center"> 
        <BlendingText /> 
      </div> 
      </Magnetic>

      <motion.div 
        ref={subTextContainerRef}
        initial="hidden"
        animate={subTextIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="mt-16" 
      >
        <motion.p 
          variants={itemVariants} 
          className="text-center text-base block md:hidden text-colorDark/70"
        >
          We craft cutting-edge digital products that blend stunning design, seamless development, and the power of the latest technology!
        </motion.p>
        <motion.p 
          variants={itemVariants} 
          className="text-center text-xl font-semibold hidden md:block text-colorDark/70"
        >
          We craft cutting-edge digital products that blend stunning design,
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="text-center text-xl font-semibold hidden md:block text-colorDark/70"
        >
          seamless development, and the power of the latest technology!
        </motion.p>
      </motion.div>
    </div>
  );
};

 
 