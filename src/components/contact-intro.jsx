'use client' 
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
import { Contact } from "./contact-us/contact";
import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion";  
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger )

export const ContactIntro = () => {

  useEffect(() => {
    // useGSAP(() => {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '#clip',
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        }
      })
      clipAnimation.to('.mask-clip-path', {
        width: '100vw',
        height: "100vh",
        borderRadius: 0
      })
    // })
  }, [])
 
  return (
    <div className=" w-screen min-h-screen ">
      <div id="clip" className="h-dvh w-screen ">
        <div className="mask-clip-path about-image bg-colorDark">
          <Image
            src="/darkbg.webp"
            alt="bg"
            height={500}
            width={500}
            className="absolute left-0 top-0 size-full object-cover"
          />  
            
            <ContactTitle/>
            <Contact/>
         
        </div>
      </div>
    // </div>
  )
}



export const ContactTitle = () => {

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
  <div className='mt-16 pt-10'>
  <h4 className="text-lg text-center font-semibold text-colorLight/50 my-10">
    Contact Us
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
      className="text-center text-colorLight text-7xl font-semibold">
      Let's Work Together
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
      className='text-colorLight text-lg font-semibold'>
      on building something cool!
    </motion.p>
    {/* <motion.p 
      variants={itemVariants}
      className='text-colorLight text-lg font-semibold'>
      great product
    </motion.p> */}
  </motion.div>
  </motion.div>
</div>
  )
}
