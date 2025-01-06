'use client'
import React from 'react'
import './unveil.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

export const Unveil = () => {
  React.useEffect(() => {
    gsap.utils.toArray(".comparisonSection").forEach(section => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          // start: "top top",
          end: () => "+=" + section.offsetWidth,
          // end: "end center",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1
        },
        defaults: {ease: "none"}
      });
      tl.fromTo(section.querySelector(".afterImage"), 
        { xPercent: 100, x: 0 }, 
        { xPercent: 0 }
      ).fromTo(section.querySelector(".afterImage img"), 
        { xPercent: -100, x: 0 }, 
        { xPercent: 0 }, 
        0
      );
    });
  }, []);

  return (
    <div className="min-h-screen "> 
      <section className="comparisonSection">
        <div className="comparisonImage beforeImage">
          <p className='text-5xl text-colorLight'>unveil </p>
          <img src="https://assets.codepen.io/16327/before.jpg" alt="before"/>
        </div>
        <div className="comparisonImage afterImage">
          <img src="https://assets.codepen.io/16327/after.jpg" alt="after"/>
        </div>
      </section>
    </div>
  )
}
