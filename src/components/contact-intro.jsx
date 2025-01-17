'use client'; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Contact } from "./contact-us/contact";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"; 

gsap.registerPlugin(ScrollTrigger);

export const ContactIntro = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 }); // Trigger once when 20% of the element is visible

  useEffect(() => { 
    if (inView) {
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '#clip',
          start: "center center",
          end: "+=800 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });
      clipAnimation.to('.mask-clip-path', {
        width: '100vw',
        height: "100vh",
        borderRadius: 0,
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial hidden state
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      className="w-screen min-h-screen contact-intro-fade-in"
    >
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image bg-teal/80">
          <ContactTitle />
          <Contact />
        </div>
      </div>
    </motion.div>
  );
};

 

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
      className="text-center text-colorLight ~text-3xl/7xl font-semibold">
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
  </motion.div>
  </motion.div>
</div> 
  )
}
  
