"use client";
import React from "react"; 
 
export function NewHero() {
  return (
    <div className="relative w-full h-screen">
      {/* <!-- Top Half (Teal Color) --> */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#008080]/90"></div>

      {/* <!-- Bottom Half (Light Gray) --> */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#eeeeee]"></div>

      {/* <!-- Centered Div --> */}
      <div className="w-[85vw] h-[80vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal shadow-2xl rounded-2xl p-8">
        <p className="text-center text-lg font-semibold">Centered Content</p>
      </div>
    </div>
  );
}
























// 'use client' 
// import React, { useEffect } from "react"; 
// import {
//   useMotionTemplate,
//   useMotionValue,
//   motion,
//   animate,
// } from "framer-motion";
// import { HiArrowDown } from "react-icons/hi2";

// const COLORS_TOP = ["#008080", "#13FFAA" ];

// export const NewHero = () => {
//   const color = useMotionValue(COLORS_TOP[0]);

//   useEffect(() => {
//     animate(color, COLORS_TOP, {
//       ease: "easeInOut",
//       duration: 10,
//       repeat: Infinity,
//       repeatType: "mirror",
//     });
//   }, []);

//   const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #eee 50%, ${color})`;
//   const border = useMotionTemplate`1px solid ${color}`;
//   const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

//   return (
//     <motion.section
//       style={{
//         backgroundImage,
//       }}
//       className="relative grid min-h-screen place-content-center overflow-hidden bg-teal px-4 py-24 text-gray-200 "
//     >
//       <div className="relative z-10 flex flex-col items-center ">
//         {/* <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
//           Beta Now Live!
//         </span> */}
//         <h1 className="max-w-5xl bg-gradient-to-br from-teal to-teal bg-clip-text text-center text-3xl font-semibold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
//         We turn ideas into reality with design & software solutions that drive results
//         </h1>
//         {/* <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
//           distinctio eum impedit nihil ipsum modi.
//         </p> */}
//         <motion.button
//           style={{
//             border,
//             boxShadow,
//           }}
//           whileHover={{
//             scale: 1.015,
//           }}
//           whileTap={{
//             scale: 0.985,
//           }}
//           className="group relative flex w-fit mt-64 items-center gap-1.5 rounded-full bg-gray-950/10 px-2 py-4 text-gray-50 transition-colors hover:bg-gray-950/50"
//         >
//           <HiArrowDown className="transition-transform group-hover:-rotate-45 group-active:-rotate-12 text-teal z-50 text-3xl animate-bounce"/> 
//           {/* <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" /> */}
//         </motion.button>
//       </div>
 
//     </motion.section>
//   );
// };