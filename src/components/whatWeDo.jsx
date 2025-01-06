'use client';
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";  

export const WhatWeDo = () => { 

  const videoRefs = useRef([]);
  const imagesContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const subTextContainerRef = useRef(null);

  const imagesIsInView = useInView(imagesContainerRef, { once: false, threshold: 0.3 });
  const textIsInView = useInView(textContainerRef, { once: false, threshold: 0.4 });
  const subTextIsInView = useInView(subTextContainerRef, { once: false, threshold: 0.5 });

  const handleMouseEnter = (index) => {
    videoRefs.current[index]?.play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index]?.pause();
    videoRefs.current[index].currentTime = 0; // Reset to the start
  };

  const videos = [
    { id: '1', src: "/vid/vidf.webm", size: "w-52" },
    { id: '2', src: "/vid/vidf.webm", size: "w-64 ", autoplay: true }, // Middle video
    { id: '3', src: "/vid/vidf.webm", size: "w-52" },
  ];

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
    <div className="w-full bg-colorLight text-colorDark p-10 ~mt-10/40" >
      <motion.div
        ref={imagesContainerRef}
        className="hidden md:flex justify-center ~gap-16/20 items-end"
        initial="hidden"
        animate={imagesIsInView ? "show" : "hidden"}
        variants={containerVariants}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${video.size}`}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            whileHover={{ scale: 1.5 }} // Scale animation on hover
            variants={itemVariants}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              src={video.src}
              ref={(el) => (videoRefs.current[index] = el)}
              muted={!video.autoplay}
              autoPlay={video.autoplay || false}
              loop={video.autoplay || false}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        ))}
      </motion.div>

      <p className="font-bold text-colorDark/50 text-center text-xl ~mt-1/20 mb-16">
        What We Do
      </p>
 

      {/* big title */}
      <motion.div
        className="flex justify-center flex-col md:flex-row ~gap-8/20"
        ref={textContainerRef}
        initial="hidden"
        animate={textIsInView ? "show" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2
          className="text-center text-colorDark ~text-5xl/7xl font-semibold"
          variants={itemVariants}
        >
          Design &nbsp; <p className="hidden md:visible">.</p>  
        </motion.h2>
        <motion.h2
          className="text-center text-colorDark ~text-5xl/7xl font-semibold"
          variants={itemVariants}
        >
          Develop &nbsp; <p className="hidden md:visible">.</p>   
        </motion.h2>
        <motion.h2
          className="text-center text-colorDark ~text-5xl/7xl font-semibold"
          variants={itemVariants}
        >
          Deploy &nbsp;
        </motion.h2>
 
      </motion.div>

      <motion.div 
        ref={subTextContainerRef}
        initial="hidden"
        animate={subTextIsInView ? "show" : "hidden"}
        variants={containerVariants}
        className="mt-16" 
      >
        <motion.p 
          variants={itemVariants} 
          className="text-center text-base block md:hidden"
        >
          We craft cutting-edge digital products that blend stunning design, seamless development, and the power of the latest technology!
        </motion.p>
        <motion.p 
          variants={itemVariants} 
          className="text-center text-xl font-semibold hidden md:block"
        >
          We craft cutting-edge digital products that blend stunning design,
        </motion.p>
        <motion.p 
          variants={itemVariants}
          className="text-center text-xl font-semibold hidden md:block"
        >
          seamless development, and the power of the latest technology!
        </motion.p>
      </motion.div>
    </div>
  );
};

 