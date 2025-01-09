"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./hero.css";
import { useEffect } from "react";
import Image from "next/image"; 

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  useEffect(() => { 
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".trigger",
          scrub: 0.5,
          pin: true,
          start: "top top",
          end: "+=150%",
        },
      })
      .to(".box", {
        force3D: true,
        duration: 1,
        xPercent: 100,
        ease: "power1.inOut",
        stagger: { amount: 1 },
      })
      .to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
      .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);
  }, []);

  return (
    <section className="trigger overflow-x-hidden relative h-dvh">
      <span className="left px-8">
        <h2 className="text-6xl font-semibold">
          Software Design 
        </h2>
        <h2 className="text-6xl font-semibold">
          and  Development
        </h2>
        <br />
        <p className="font-light text-colorLight/70">
        We’re a team of software experts dedicated to building powerful, tailor-made software-solutions for businesses like yours. Let’s turn your ideas into impactful digital experiences.
        </p>
      </span>

      <span className="right px-8">
        <Image 
          src="/symliqlogo.png" 
          alt="logo" 
          height={70} 
          width={150}
          className="mb-8 animate-slowPulse"
        />
        <h2 className="text-6xl font-semibold">
          Crafting Digital Solutions
        </h2> 
        <h2 className="text-6xl font-semibold">
          that Drive Success
        </h2>

        {/* TODO: turn p to a link  */}
        <p className="inline-block mt-20 nav-hover-btn ">
          Explore 
        </p>
      </span>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="box"></div>
      ))}
    </section> 
  );
};


 