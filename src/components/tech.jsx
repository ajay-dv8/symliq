"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

export function TechStack() {

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
      className="w-full px-8"
      ref={textContainerRef} 
      initial="hidden"
      animate={textIsInView ? "show" : "hidden"}
      variants={containerVariants}
    >
      <motion.p 
        variants={itemVariants}
        className="text-colorDark/70 w-full text-center text-pretty text-lg font-semibold my-20"
      >
        Empowering Clients with the Perfect Tech Stack for Outstanding Results
      </motion.p> 
    </motion.div>

      <div
        className=" rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative my-4 overflow-hidden">
        <InfiniteMovingCards type="image" items={stack} direction="left" speed="fast" />
      </div> 

      <div
        className=" rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative my-4 overflow-hidden">
        <InfiniteMovingCards type="image" items={stack} direction="right" speed="fast" />
      </div> 
    
    </>
  );
}

const stack = [
  {
     name: "github", 
     image: "/svg/github.svg"
  },
  {
    name: "git", 
     image: "/svg/git.svg"
  },
  {
    name: "javascript", 
     image: "/svg/js.svg"
  },
  {
    name: "prisma", 
     image: "/svg/prisma.svg"
  },
  {
    name: "react", 
     image: "/svg/react.svg"
  },
  {
    name: "tailwind", 
     image: "/svg/tailwind.svg"
  },
  {
    name: "mongodb", 
     image: "/svg/mongodb.svg"
  },
  {
    name: "typescript", 
     image: "/svg/ts.svg"
  },
  {
    name: "python", 
     image: "/svg/py.svg"
  }, 
  {
    name: "postman", 
     image: "/svg/postman.svg"
  },
  {
    name: "postgre", 
     image: "/svg/postgre.svg"
  }, 
];
