"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { navItems } from "@/constants/nav-items";
import { HiArrowLeft, HiArrowRight, HiCalendar, HiOutlineCloudArrowUp } from "react-icons/hi2";
import Link from "next/link";
import { HiOutlineChevronDown, HiHome } from "react-icons/hi2";
import { sectors } from "@/constants/sectors";

export const NewHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      rotateX: -42,
      rotateY: -18,
      rotateZ: -25,
    },
    visible: {
      opacity: 1,
      rotateX: -42,
      rotateY: -18,
      rotateZ: -25,
      transition: {
        staggerChildren: 0.7, // Stagger each child animation by 0.3 seconds
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.5 } },
  };

  return (
    <>
      <div className="relative w-full h-screen md:h-[128vh] flex flex-col items-center overflow-hidden bg-colorDark">
        <div className="max-w-[53rem] mt-36 px-6">
          <h2 className="~text-3xl/7xl font-semibold leading-8">
            Driving growth through innovative software solutions
          </h2>

          <p className="max-w-[40rem] font-normal ~text-sm/xl ~mt-4/8 text-colorLight/70">
            We’re a team of software experts dedicated to building powerful, tailor-made software-solutions for businesses like yours. Let’s turn your ideas into impactful digital experiences.
          </p>
        </div>

        {/* Diagonal Div */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ perspective: 800 }}
          className="absolute p-[2px] ~top-[20rem]/[25rem] left-[7rem] md:left-16 bg-colorDark w-[calc(100vw+10.5rem)] h-[45rem] text-white rounded-tl-2xl shadow-lg border-t border-l border-colorLight/20"
        >
          <div className="flex flex-row w-full rounded-2xl">
            {/* LEFT MENU DIV */}
            <motion.div
              variants={childVariants}
              className="flex-[25%] ~p-2/4 h-full w-full bg-colorDark rounded-tl-2xl"
            >
              {/* 1st Menu Items */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <div className="~size-2/4 rounded-full bg-gray-500"></div>
                  <div className="~size-2/4 rounded-full bg-gray-500"></div>
                  <div className="~size-2/4 rounded-full bg-gray-500"></div>
                </div>
                <div className="flex gap-2">
                  <HiArrowLeft className="~text-lg/3xl font-extralight text-gray-200" />
                  <HiArrowRight className="~text-lg/3xl font-extralight text-gray-500" />
                </div>
              </div>

              {/* Logo and Icons */}
              <motion.div
                variants={childVariants}
                className="flex justify-between mt-2 mb-6 items-center"
              >
                <Image src="/fullLogo.png" width={128} height={70} className="~w-20/40"/>
                <div className="flex gap-2">
                  <HiCalendar className="~text-lg/3xl font-extralight text-gray-500" />
                  <HiOutlineCloudArrowUp className="~text-lg/3xl font-extralight text-gray-300" />
                </div>
              </motion.div>

              {/* Nav Items */}
              <motion.div variants={childVariants} className="flex flex-col ~gap-1/3 px-4 ~mb-1/4">
                <div className="mb-3">
                  <p className="~text-lg/2xl font-semibold ~mt-3/6 bg-gray-700 bg-opacity-50 py-1 ~px-2/4 rounded-lg">
                    Navigation
                  </p>
                </div>

                <div className="flex ~gap-x-2/4 ~mb-1/3">
                  <HiHome className="~text-lg/3xl text-gray-200" />
                  <p className="text-gray-200 ~text-lg/2xl">Home</p>
                </div>

                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-gray-300 ~text-base/lg hover:scale-105 hover:text-white self-start flex ~gap-x-2/4 transition-all ease-in-out duration-700"
                  >
                    {item.icon}
                    {item.title}
                  </Link>
                ))}
              </motion.div>

              {/* Services */}
              <motion.div variants={childVariants} className="~mt-3/6">
                <div className="flex items-center">
                  <p className="~text-lg/2xl text-gray-300 font-semibold ~mt-3/6 ~mb-2/4 bg-opacity-50 py-1 ~px-2/4 rounded-lg">
                    Sectors
                  </p>
                  <HiOutlineChevronDown className="~text-base/xl text-gray-300" />
                </div>

                {sectors.map((sector, id) => (
                  <p
                    key={sector.id}
                    className="~text-base/lg mb-2 self-start text-gray-300 ~px-2/4"
                  >
                    {sector.name}
                  </p>
                ))}
              </motion.div>
            </motion.div>

            {/* Dash Image */}
            <motion.div
              variants={childVariants}
              className="flex-[75%] h-full w-full pt-4"
            >
              <Image
                src="/dash.webp"
                width={1280}
                height={920}
                className="object-cover rounded-tl-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};























// "use client"
// import React from 'react' 
// import { motion } from "framer-motion";
// import Image from 'next/image';
// import { navItems } from '@/constants/nav-items'
// import { TiArrowLeft, TiArrowRight, TiCode, TiCalendar } from 'react-icons/ti';
// import Link from 'next/link';
// import { HiOutlineChevronDown, HiHome } from "react-icons/hi2";  
// import { sectors } from '@/constants/sectors';
 

// export const NewHero = () => { 
//   return (
//     <> 
//     <div className="relative w-full h-screen md:h-[128vh] flex flex-col items-center overflow-hidden bg-colorDark ">
 
//       <div className="max-w-5xl mt-36 mx-auto">
//         <h2 className="~text-3xl/7xl font-bold leading-8">
//         Driving growth and success through innovative software solutions
//         </h2>
//       </div>
  
//       {/* Diagonal Div */}
//       <motion.div
//         initial={{ rotateX: -42, rotateY: -18 , rotateZ: -25,}} 
//         transition={{ duration: 0.5 }}
//         style={{ perspective: 800 }}
//         className="absolute p-[2px] top-[25rem] left-16 bg-colorDark w-[calc(100vw+10.5rem)] h-[45rem] text-white rounded-tl-2xl shadow-lg border-t border-l border-colorLight/20 "
//       >   
//         <div className="flex flex-row w-full rounded-2xl "> 
//           {/* LEFT MENU DIV */}
//           <div className="flex-[25%] p-4 h-full w-full bg-colorDark rounded-tl-2xl">
//             {/* 1st menu items  */}
//             <div className='flex justify-between items-center mb-4 '>
//               {/* 3 dots */}
//               <div className="flex gap-2">
//                 <div className="size-4 rounded-full bg-gray-500"></div>
//                 <div className="size-4 rounded-full bg-gray-500"></div>
//                 <div className="size-4 rounded-full bg-gray-500"></div>
//               </div>

//               {/* arrow icons */}
//               <div className='flex gap-2'>
//                 <TiArrowLeft className="text-4xl font-extralight text-gray-200" />
//                 <TiArrowRight className="text-4xl font-extralight text-gray-500" />
//               </div>
//             </div>

//             {/* logo and icons */}
//             <div className=" flex justify-between mt-2 mb-6 items-center">
//               <Image src="/fullLogo.png" width={128} height={70}/>

//               <div className="flex gap-2">
//                 <TiCalendar className="text-3xl font-extralight text-gray-500"/>
//                 <TiCode className="text-4xl font-extralight text-gray-300"/> 
//               </div>
//             </div> 

//             {/* Nav Items */}
//             <div className="flex flex-col gap-3 px-4 mb-4">

//             <div className="mb-3">
//               <p className='text-2xl font-semibold mt-6 bg-gray-700 bg-opacity-50 py-1 px-4 rounded-lg'>Navigation</p>
//             </div>

//               <div className=" flex gap-x-4 mb-3">
//                 <HiHome className='text-3xl text-gray-200'/>
//                 <p className=" text-gray-200 text-2xl">Home</p>
//               </div>
              
//               {navItems.map((item, index) => (
//                 <Link key={index} href={item.href} className='text-gray-300 text-lg hover:scale-105 hover:text-white self-start flex gap-x-4 transition-all ease-in-out duration-700'>
//                   {item.icon}
//                   {item.title} 
//                 </Link>
//               ))}
//             </div>

//             {/* Services */}
//             <div className="mt-6">
//               <div className="flex items-center">
//                 <p className='text-2xl text-gray-300 font-semibold mt-6 mb-4 bg-opacity-50 py-1 px-4 rounded-lg'>Sectors</p>
//                 <HiOutlineChevronDown className="text-xl text-gray-300"/>
//               </div>

//               {sectors.map((sector, id) => (
//                 <p key={sector.id} className="text-lg mb-2 self-start text-gray-300 px-4">
//                   {sector.name}
//                 </p>
//               ))}
//             </div>
//           </div>
 
//            {/* Dash Image */}     
//           <div className="flex-[75%] h-full w-full pt-4">
//             <Image src="/dash.webp" width={1280} height={920} className='object-cover rounded-tl-2xl'/>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//     </>
//   )
// }

 




//       {/* gradient overlay */}
//     {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(22,22,22,0.007)] to-colorLight  opacity-95 z-10 pointer-events-none rounded-tl-2xl"></div> */}

// {/* gradient overlay */}
//         {/* <div className="absolute inset-0 bg-gradient-to-t from-colorLight via-gray-900 to-black opacity-80 z-10 pointer-events-none rounded-tl-2xl"></div> */}



// // <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(22,22,22,0.087)] to-[rgba(238,238,238,1)] opacity-80 z-10 pointer-events-none rounded-tl-2xl"></div>
// // bg-gradient-to-b from-transparent via-[rgba(22,22,22,0.087)] to-[rgba(238,238,238,1)]