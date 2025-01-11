 
import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import { navItems } from '@/constants/nav-items';

// const navItems = [ 
//   {
//     title: "About",
//     href: "#about",
//   },
//   {
//     title: "Services",
//     href: "#service",
//   },
//   {
//     title: "case study",
//     href: "#work",
//   },
//   {
//     title: "Contact",
//     href: "#contact",
//   },
// ]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  
  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={`${styles.body} z-50`}>
          <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
            <div className={styles.header}>
              <p>Navigation</p>
            </div>
            {
              navItems.map( (data, index) => { 
                return <Link 
                key={index} 
                data={{...data, index}} 
                isActive={selectedIndicator == data.href} 
                setSelectedIndicator={setSelectedIndicator}>
                </Link>
              })
            }
          </div>
          <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}

























// import React, { useState, useEffect } from "react";
// import styles from "./style.module.scss";
// import { motion } from "framer-motion";
// import { usePathname, useRouter } from "next/navigation";
// import { menuSlide } from "../animation";
// import Curve from "./Curve";
// import Footer from "./Footer";

// const navItems = [
//   {
//     title: "About",
//     href: "#about", // Updated to use section IDs
//   },
//   {
//     title: "Services",
//     href: "#services", // Updated to use section IDs
//   },
//   {
//     title: "Case Study",
//     href: "#case-study", // Updated to use section IDs
//   },
//   {
//     title: "Contact",
//     href: "#contact", // Updated to use section IDs
//   },
// ];

// export default function Index() {
//   const pathname = usePathname();
//   const [selectedIndicator, setSelectedIndicator] = useState(pathname);
//   const router = useRouter();

//   // Smooth scroll handler
//   const handleSmoothScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
//     }
//   };

//   useEffect(() => {
//     const hash = router.asPath.split("#")[1]; // Extract the hash from the URL
//     if (hash) {
//       handleSmoothScroll(hash); // Scroll to the section on page load
//     }
//   }, [router.asPath]);

//   return (
//     <motion.div
//       variants={menuSlide}
//       initial="initial"
//       animate="enter"
//       exit="exit"
//       className={styles.menu}
//     >
//       <div className={`${styles.body} z-50`}>
//         <div
//           onMouseLeave={() => {
//             setSelectedIndicator(pathname);
//           }}
//           className={styles.nav}
//         >
//           <div className={styles.header}>
//             <p>Navigation</p>
//           </div>
//           {navItems.map((data, index) => (
//             <a
//               key={index}
//               href={data.href}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleSmoothScroll(data.href.slice(1)); // Remove "#" and pass ID
//                 setSelectedIndicator(data.href); // Update selected indicator
//               }}
//               className={`${styles.link} ${
//                 selectedIndicator === data.href ? styles.active : ""
//               }`}
//             >
//               {data.title}
//             </a>
//           ))}
//         </div>
//         <Footer />
//       </div>
//       <Curve />
//     </motion.div>
//   );
// }


