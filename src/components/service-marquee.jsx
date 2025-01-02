"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function ServicesMarquee() {

  const textContainerRef = useRef(null);

  const textIsInView = useInView(textContainerRef, { once: false, threshold: 0.4 });

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
    <>
    <motion.div
      className="container"
      ref={textContainerRef} 
      initial="hidden"
      animate={textIsInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.p 
        variants={itemVariants}
        className="text-colorDark/50 text-center text-lg font-semibold my-10"
      >
        Our Services
      </motion.p> 
    </motion.div>

      <div
        className=" rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative my-4 overflow-hidden">
        <InfiniteMovingCards type="text" items={stack} direction="left" speed="fast" />
      </div> 
 
    </>
  );
}

const stack = [
  {
     text: "Web Development", 
     name: "github", 
     image: "/svg/github.svg"
  },
  {
    text: "Mobile App Development", 
    name: "git", 
     image: "/svg/git.svg"
  },
  {
    text: "Graphic Design", 
    name: "javascript", 
     image: "/svg/js.svg"
  },
  {
    text: "UI/UX Design", 
    name: "prisma", 
     image: "/svg/prisma.svg"
  },
  {
    text: "Enterprise Applications", 
    name: "react", 
     image: "/svg/react.svg"
  },
  {
    text: "eCommerce Website", 
    name: "tailwind", 
     image: "/svg/tailwind.svg"
  },
  {
    text: "Website Redesign", 
    name: "mongodb", 
     image: "/svg/mongodb.svg"
  },
  {
    text: "IOS App Development", 
    name: "typescript", 
     image: "/svg/ts.svg"
  },
  {
    text: "Android Application", 
    name: "python", 
     image: "/svg/py.svg"
  }, 
];
