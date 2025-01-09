// 'use client' 
// import Image from 'next/image';
// import './contact-section.css'
// import { useScroll, useTransform, motion} from 'framer-motion';
// import { useRef } from 'react';

// export const ContactSection = () => {
    
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ['start start', 'end end']
//     })

//     const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//     // const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//     // const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//     // const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//     // const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

//     const pictures = [
//         {
//             src: '/images/1.jpeg',
//             scale: scale4
//         },
//         // {
//         //     src: '/images/2.jpeg',
//         //     scale: scale5
//         // },
//         // {
//         //     src: '/images/3.jpg',
//         //     scale: scale6
//         // },
      
//         // {
//         //     src: '/images/5.jpg',
//         //     scale: scale6
//         // },
//         // {
//         //     src: '/images/6.jpg',
//         //     scale: scale8
//         // },
//         // {
//         //     src: '/images/7.jpeg',
//         //     scale: scale9
//         // }
//     ]

//     return (
//         <div ref={container} className='relative h-[300vh]'>
//             <div className={ 'sticky'}>
//                 {
//                     pictures.map( ({src, scale}, index) => {
//                         return <motion.div key={index} style={{scale}} className={ 'el'}>
//                             <div className={'imageContainer'}>
//                                 <Image
//                                     src={src}
//                                     fill
//                                     alt="image"
//                                     // placeholder='blur'
//                                 />
//                             </div>
//                         </motion.div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }