import React from 'react';
import NextLink from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../animation";

export default function Index({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index } = data;

  const handleSmoothScroll = (e) => {
    if (href.startsWith("#")) {
      e.preventDefault(); // Prevent default link behavior
      const section = document.getElementById(href.slice(1)); // Get the section by ID

      if (section) {
        const targetPosition = section.offsetTop; // Get the target scroll position
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
        className="size-[10px] bg-colorLight rounded-full absolute left-[-30px]"
      ></motion.div>
      <NextLink href={href} onClick={handleSmoothScroll}>
        {title}
      </NextLink>
    </motion.div>
  );
}

























// import Link from "next/link";
// import { motion } from "framer-motion";
// import { slide, scale } from "../../animation";

// export default function Index({ data, isActive, setSelectedIndicator }) {
//   const { title, href, index } = data; 

//   const handleSmoothScroll = (e) => {
//     if (href.startsWith("#")) {
//       e.preventDefault(); // Prevent default link behavior
//       const section = document.getElementById(href.slice(1)); // Get the section by ID
  
//       if (section) {
//         const targetPosition = section.offsetTop; // Get the target scroll position
//         const startPosition = window.scrollY; // Get current scroll position
//         const distance = targetPosition - startPosition; // Calculate the distance to scroll
//         const duration = 1500; // Scroll duration in milliseconds
//         let startTime = null;
  
//         const easeInOutQuad = (t, b, c, d) => {
//           t /= d / 2;
//           if (t < 1) return (c / 2) * t * t + b;
//           t--;
//           return (-c / 2) * (t * (t - 2) - 1) + b;
//         };
  
//         const animationLoop = (currentTime) => {
//           if (startTime === null) startTime = currentTime;
//           const elapsedTime = currentTime - startTime;
//           const run = easeInOutQuad(elapsedTime, startPosition, distance, duration);
  
//           window.scrollTo(0, run);
  
//           if (elapsedTime < duration) requestAnimationFrame(animationLoop);
//         };
  
//         requestAnimationFrame(animationLoop);
//         setSelectedIndicator(href); // Update the active state
//       }
//     }
//   };
  

//   return (
//     <motion.div
//       className="relative flex items-center"
//       onMouseEnter={() => setSelectedIndicator(href)}
//       custom={index}
//       variants={slide}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//     >
//       <motion.div
//         variants={scale}
//         animate={isActive ? "open" : "closed"}
//         className="size-[10px] bg-colorLight rounded-full absolute left-[-30px]"
//       ></motion.div>
//       <Link href={href} onClick={handleSmoothScroll}>
//         {title}
//       </Link>
//     </motion.div>
//   );
// }
 































// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import { slide, scale } from '../../animation';

// // export default function Index({data, isActive, setSelectedIndicator}) {
  
// //     const { title, href, index} = data;
  
// //     return (
// //       <motion.div 
// //         className="relative flex items-center"
// //         onMouseEnter={() => {setSelectedIndicator(href)}} 
// //         custom={index} 
// //         variants={slide} 
// //         initial="initial" 
// //         animate="enter" 
// //         exit="exit"
// //       >
// //         <motion.div 
// //           variants={scale} 
// //           animate={isActive ? "open" : "closed"} 
// //           className="size-[10px] bg-colorLight rounded-full absolute left-[-30px]">
// //         </motion.div>
// //         <Link href={href}>{title}</Link>
// //       </motion.div>
// //     )
// // }


 