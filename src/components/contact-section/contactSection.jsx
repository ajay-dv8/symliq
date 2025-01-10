// 'use client' 
// import Image from 'next/image'; 
// import { useScroll, useTransform, motion} from 'framer-motion';
// import { useRef } from 'react';
// import { ContactTitle } from '../contact-intro';
// import { Contact } from '../contact-us/contact';

// export const ContactSection = () => {
    
//     const openContainer = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: openContainer,
//         offset: ['start start', 'end end']
//     })

//     const scale = useTransform(scrollYProgress, [0, 1], [1, 10]); 

//   return (
//     <div ref={openContainer} className='relative h-[300vh] z-0'>
//       <div className="sticky top-0 overflow-hidden h-[100vh]"> 
//             <motion.div 
//               style={{scale}} 
//               className="w-[100%] h-[100%] top-0 absolute flex justify-center items-center "
//             >
//               <div className={'relative w-[10vw] h-[10vh] bg-teal/80'}>
              
//                 {/* <ContactTitle/>
//                 <Contact/> */}
//               </div>  
//             </motion.div>  
//       </div>
//     </div>
//   )
// }

 