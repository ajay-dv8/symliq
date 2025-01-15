'use client'; 
import { TextGenerateEffect } from "./ui/text-generate-effect"; 
import { motion } from "framer-motion";


export const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Top Half */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#008080]/90 z-0"
        animate={{
          y: ["0%", "100%"],  
        }}
        transition={{
          duration: 25, 
          repeat: Infinity, 
          repeatType: "loop",  
          ease: "linear", 
        }}
      ></motion.div>

      {/* Animated Bottom Half */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#eeeeee] z-0"
        animate={{
          y: ["0%", "-100%"], 
        }}
        transition={{
          duration: 25,  
          repeat: Infinity, 
          repeatType: "loop", 
          ease: "linear", 
        }}
      ></motion.div>

      {/* Centered Div */}
      <div
        className="w-[100vw] h-[100vh] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal/60 rounded-2xl p-8 backdrop-filter backdrop-blur-xl z-0"
      >
        <HeroTitle />
      </div>
    </div>
  );
};





// export const Hero = () => {
//   return ( 
//     <div className="relative w-full h-screen">
//     {/* <!-- Top Half (Teal Color) --> */}
//     <div className="absolute top-0 left-0 w-full h-1/2 bg-[#008080]/90"></div>

//     {/* <!-- Bottom Half (Light Gray) --> */}
//     <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#eeeeee]"></div>

//     {/* <!-- Centered Div --> */}
//     <div 
//       className=" w-[100vw] h-[90vh] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal/60  rounded-2xl p-8 backdrop-filter backdrop-blur-xl">
//       <HeroTitle/>
//     </div>
    
//   </div>
//   );
// };

const HeroTitle = () => {
  const words = `We turn ideas into reality with software solutions that drive results.`;
  return (
    <div className="text-center px-4 md:px-10 ">
      {/* <p className="text-colorDark/70 py-6 md:py-6">We are Symliq</p> */}
      <h2 className="text-3xl md:text-6xl font-semibold leading-2 uppercase">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          textClassName="drop-shadow-lg z-50 ~text-3xl/7xl "
        />
      </h2>
  
    </div>
  );
};


 