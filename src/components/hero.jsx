 
'use client'; 
 
import { BackgroundGradientAnimation } from "@/components/ui/bg-grdient-animation";
import { HiArrowDown } from "react-icons/hi2";
import TypeWriter from "./typewrite";

const title = [
  "We Create Software Solutions",
  "We Transform Businesses",
  "We Drive Growth And Success", 
]

export function Hero() { 
  return (
    <div id="home" className=" bg-teal">
    <BackgroundGradientAnimation>
      <div className="absolute z-[25] inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="text-center px-4 md:px-20 text-3xl md:text-6xl leading-2 uppercase">
 
          <TypeWriter 
            data={title}
            className="~text-3xl/5xl text-colorLight drop-shadow-lg font-intertight font-normal"
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
 