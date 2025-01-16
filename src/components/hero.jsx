 
'use client'; 
import { TextGenerateEffect } from "./ui/text-generate-effect"; 
 
import { BackgroundGradientAnimation } from "@/components/ui/bg-grdient-animation";
import { HiArrowDown } from "react-icons/hi2";

export function Hero() {
  const words = `We turn ideas into software solutions that drive results.`;
  return (
    <div className=" bg-teal/70">
    <BackgroundGradientAnimation>
      <div className="absolute z-[25] inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="text-center px-4 md:px-20 text-3xl md:text-6xl leading-2 uppercase">
        
          <TextGenerateEffect
            duration={2}
            filter={false}
            words={words}
            textClassName="drop-shadow-lg z-50 ~text-3xl/7xl "
          />
        </div>

        <div className="w-10 h-16 border-2 rounded-full absolute bottom-6 p-2"> 
          <HiArrowDown className="w-full h-full text-white animate-bounce" />
        </div>
      </div> 
    </BackgroundGradientAnimation>
    </div>
  );
}
 