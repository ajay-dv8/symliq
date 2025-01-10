'use client'
import { useEffect } from "react";
import gsap from "gsap"
import { cn } from "@/lib/utils";

export const SwapBtn = ({ children, link, className }) => {
  useEffect(() => {
    const buttons = gsap.utils.toArray(".button");
    
    buttons.forEach((button) => {
      const p = button.querySelector("p");
      const tl = gsap.timeline({ paused: true });

      tl.to(p, { 
        duration: 0.2, 
        yPercent: -150, 
        ease: "power2.in" 
      });
      tl.set(p, { yPercent: 150 });
      tl.to(p, { 
        duration: 0.2, 
        yPercent: 0,
        ease: "power2.out" 
      });

      button.addEventListener("mouseenter", () => tl.play(0));
    });

    // Cleanup function to remove event listeners
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <a href={link} className={cn("button text-colorDark hover:bg-teal/80 transition-all hover:text-colorLight ease-in-out duration-700 bg-colorLight rounded-full inline-grid p-2 overflow-hidden text-center w-full border border-teal ", className)}>
      <p>{children}</p>
    </a>
  ); 
};

 
      