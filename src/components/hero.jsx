"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { HiArrowDown } from "react-icons/hi2";


const words = `Building Software Solutions that drives growth. `;

export function Hero() {
  return (
    <div
      className="h-screen w-full flex  items-center  justify-center bg-teal antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0">
        <div className="flex justify-center items-center">
          {/* <TextGenerate/> */}
          <TextGenerateEffect 
            words={words} 
            textClassName={"text-4xl md:text-7xl md:max-w-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 capitalize"}
          />
        </div>
        <p
          className="mt-8 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto">
          Transform your vision into reality with tailored software solutions that empower your business to thrive and exceed expectations.
        </p>
      </div>

      <div className="w-10 h-16 border-2 rounded-full absolute bottom-6 p-2"> 
          <HiArrowDown className="w-full h-full text-white animate-bounce" />
        </div>
    </div> 
  );
}



 