'use client' 
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";  
import { Magnetic } from './../magnetic';
import { generalInfo } from '@/constants/info';
import { TiPhone, TiPhoneOutline } from 'react-icons/ti';

export const Contact = () => {
  const textContainerRef = useRef(null);
  const textRef = useRef(null);
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
          <a href={generalInfo.emailLink} className=' '>
        <Magnetic>
          <motion.h1 
            ref={textRef}
            variants={itemVariants}
            className="text-4xl md:text-9xl mt-8 text-colorLight font-semibold text-center drop-shadow-xl"
          >
            info@symliq.com
          </motion.h1>
        </Magnetic>  
          </a>
      </motion.div>

       {/* <Phone /> */}
    </div>
  );
};


const Phone = () => {

  const textContainerRef = useRef(null);
  const textRef = useRef(null);
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
    <div className="">
      <motion.div 
        ref={textContainerRef}
        initial="hidden"
        animate={textIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="mt-24 flex justify-center gap-x-8"
      > 
          <a href={generalInfo.phoneLineOneLink} className=' '>
        <Magnetic>
          <motion.p 
            ref={textRef}
            variants={itemVariants}
            className="text-base inline-flex items-center gap-x-2 md:text-lg mt-8 text-colorLight font-semibold text-center drop-shadow-xl"
          >
             <TiPhoneOutline className='text-xl rotate-90'/>{" "}{generalInfo.phoneLineOne} 
          </motion.p>
        </Magnetic>  
          </a>


          <a href={generalInfo.phoneLineTwoLink} className=' '>
        <Magnetic>
          <motion.p 
            ref={textRef}
            variants={itemVariants}
            className="text-base inline-flex items-center gap-x-2 md:text-lg mt-8 text-colorLight font-semibold text-center drop-shadow-xl"
          >
             <TiPhoneOutline className='text-xl rotate-90'/>{" "}{generalInfo.phoneLineTwo} 
          </motion.p>
        </Magnetic>  
          </a>
      </motion.div>
    </div>
  )
}