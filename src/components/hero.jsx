'use client'; 
import { TextGenerateEffect } from "./ui/text-generate-effect"; 

 
import { BackgroundGradientAnimation } from "@/components/ui/bg-grdient-animation";
import { HiArrowDown } from "react-icons/hi2";

export function Hero() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-[25] inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/50">
        <HeroTitle />
        </div>

        <div className="w-10 h-16 border-2 rounded-full absolute bottom-6 p-2"> 
          <HiArrowDown className="w-full h-full text-white animate-bounce" />
        </div>
      </div> 
    </BackgroundGradientAnimation>
  );
}

 
 
const HeroTitle = () => {
  const words = `We turn ideas into reality with software solutions that drive results.`;
  return (
    <div className="text-center px-4 md:px-20 ">
      {/* <p className="text-colorDark/70 py-6 md:py-6">We are Symliq</p> */}
      <h2 className="text-3xl md:text-6xl font-[300] leading-2 uppercase">
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


 