// import { Button } from "@/components/ui/button";
import Ripple from "@/components/ui/ripple";
// import BoxReveal from "@/components/ui/ripple";

export const MobileHero = () => {
  return (
    <div className=" flex h-screen w-full flex-col items-center justify-center rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        Ripple
      </p>
      <Ripple /> 
    </div> 
  );
}
