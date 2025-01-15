"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react"; 
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../RoundedButton";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

export default function index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
 
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement, 
        start: 0,
        end: "max", // Keep listening to scroll events
        scrub: false, 
        onUpdate: (self) => {
          // Optional: Add additional logic if needed for button scaling
          gsap.to(button.current, {
            scale: 1,
            duration: 0.2,
            ease: "power1.out",
          });
        },
      },
    }); 
  }, []);

  //     font-weight: 300;
  return (
    <div className="w-screen z-50">
      <div
        ref={header}
        className="absolute flex top-0 text-colorLight p-9 justify-between w-full items-center z-[1]"
      >
        <Link href={"/"} className="flex cursor-pointer">
          <Image
            width={150}
            height={70}
            src="/fullLogo.png"
            alt="logo"
            className="w-24 md:w-40"
          />
        </Link>
      </div>

      <div ref={button} className="fixed right-0 z-[50]">
        <Rounded
          onClick={() => setIsActive(!isActive) }
          className={` bg-teal/50 backdrop-blur-lg size-12 m-4 md:size-16 md:m-5 rounded-full relative cursor-pointer flex flex-col justify-center items-center z-50 shadow-xl`}
        >
           {isActive ? (
          <HiXMark className="text-3xl z-[90] text-colorLight" />  
        ) : (
          <HiBars3BottomRight className="text-4xl z-[90] text-colorLight ml-[2px]" /> // Menu icon
        )}
 
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
