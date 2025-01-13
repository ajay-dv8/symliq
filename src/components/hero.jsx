'use client';
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Rounded from './RoundedButton';
import { HiArrowDown } from "react-icons/hi2";

export const Hero = () => {
  return (
    <div id="home" className="h-[95dvh] relative w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={'/hbg.webp'}
        width={1080}
        height={720}
        alt="bg"
        className="object-cover w-full h-full absolute z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute w-full inset-0 bg-gradient-to-t from-colorLight via-zinc-300/50 to-transparent z-10"></div>

      {/* Hero text */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <HeroTitle />
      </div>
    </div>
  );
};

const HeroTitle = () => {
  const words = `We turn ideas into reality with design & software solutions that drive results.`;
  return (
    <div className="text-center px-4 md:px-20 xl:px-32">
      <p className="text-colorDark/70 py-6 md:py-6">We are Symliq</p>
      <h2 className="text-3xl md:text-6xl font-semibold leading-2 uppercase">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words={words}
          textClassName="text-colorDark z-50 ~text-3xl/7xl"
        />
      </h2>
 
      <div className="flex justify-center items-center mt-14 relative top-40"> 
        <div className={` bg-teal/20 border border-teal backdrop-blur-sm rounded-full relative cursor-pointer flex justify-center items-center z-0 w-10 h-14 hover:bg-teal/20 pt-2`}> 
          <HiArrowDown className="text-teal animate-bounce text-3xl z-50 text-center " />
        </div> 
      </div>
    </div>
  );
};


 