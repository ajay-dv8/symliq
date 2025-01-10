// import { Button } from "@/components/ui/button";
import Ripple from "@/components/ui/ripple";
import Image from "next/image";
// import BoxReveal from "@/components/ui/ripple";

export const MobileHero = () => {
  return (
    <div className=" flex h-screen w-full flex-col items-start justify-center rounded-lg border bg-background md:shadow-xl">
      <div className="flex justify-start">
      <Image 
        src={"/fullLogo.png"} 
        alt="logo" 
        width={240} 
        height={120}
        className="px-8 mb-8"
      />
      </div>
      <p className="z-10 whitespace-pre-wrap text-left px-8 text-5xl font-medium tracking-tighter text-white">
        Crafting Digital Solutions
        that Drive Success 
      </p>
      <Ripple /> 
    </div> 
  );
}
