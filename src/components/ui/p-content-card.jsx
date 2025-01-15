"use client" 
import { cn } from "@/lib/utils" 
import { motion, useInView } from "framer-motion"
import { useRef } from "react";
import { HiLink } from "react-icons/hi2";

export const ProContentCard = ({ 
  className,
  backgroundImage, 
  title,
  description
} ) => {

  const imageContainerRef = useRef(null);

  const imageIsInView = useInView(imageContainerRef, { once: false, threshold: 0.6 });
 

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
    <motion.div 
      ref={imageContainerRef}
      initial="hidden"
      animate={imageIsInView ? "show" : "hidden"}
      variants={containerVariants}
      className=" w-full group/card"
    >
      <motion.div
        variants={itemVariants}
        className={cn(
          "cursor-pointer overflow-hidden relative w-full card ~h-52/96 rounded-2xl shadow-xl flex flex-col bg-cover border-2 border-teal/40 ",
          className
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute w-[calc(100%+1rem)] h-full bottom-0 left-0 right-0 transition duration-300 group-hover/card:bg-black opacity-60" />

        <div className="hidden group-hover/card:flex mt-[30%] relative w-[calc(100%+1rem)] flex-row justify-center ~gap-2/4 items-center z-10">
          <HiLink className="text-xl text-white"/>
          <p className="">Visit {" "} {title} </p>
        </div>

        <div className="text absolute content bottom-0 bg-black opacity-60 w-[calc(100%+1rem)] mx-0 ~px-2/5 ~pt-1/2">

        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>

          <HiLink className="text-xl text-white mr-2 md:hidden"/>
        </div>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-2 md:my-4">
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}