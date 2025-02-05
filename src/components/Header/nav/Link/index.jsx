import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";

export default function Index({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index } = data;

  const handleSmoothScroll = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault(); // Prevent default link behavior
      const section = document.getElementById(href.slice(1)); // Get the section by ID

      if (section) {
        const targetPosition = section.offsetTop - 50; // Get the target scroll position
        const startPosition = window.scrollY; // Get current scroll position
        const distance = targetPosition - startPosition; // Calculate the distance to scroll
        const duration = 1500; // Scroll duration in milliseconds
        let startTime = null;

        const easeInOutQuad = (t, b, c, d) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        const animationLoop = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const run = easeInOutQuad(elapsedTime, startPosition, distance, duration);

          window.scrollTo(0, run);

          if (elapsedTime < duration) requestAnimationFrame(animationLoop);
        };

        requestAnimationFrame(animationLoop);
        setSelectedIndicator(href); // Update the active state
        closeMenu(); // Close the navbar
      }
    } else {
      closeMenu(); // Close the navbar for external links as well
    }
  };

  return (
    <>
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="size-[10px] bg-colorLight rounded-full absolute left-[-30px] z-[50]"
      ></motion.div>
      <Link 
        href={href} 
        onClick={handleSmoothScroll}
        className='text-2xl md:text-7xl mb-8'>
        {title}
      </Link>
    </motion.div>
      {/* <Link href="#contact" className='text-2xl md:text-7xl mb-8'>Contact2</Link> */}
    </>
  );
}


 