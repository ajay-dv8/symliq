"use client"
import { ReactLenis } from 'lenis/react' 
import { useState, useEffect } from 'react';

import { ParallaxHero } from "@/components/parallaxHero"; 
import { Hero } from "@/components/hero/hero" 
import { WhatWeDo } from "@/components/whatWeDo"
import { Projects } from "@/components/projects"; 
import { Process } from "@/components/process/process";
import { TechStack } from "@/components/tech";
import { ContactCTA } from "@/components/CTA-Card";  
import { ServicesMarquee } from "@/components/service-marquee"; 
import { ContactIntro } from "@/components/contact-intro";
import { Footer } from '@/components/footer'; 
import { WorksCompleted } from '@/components/works-completed';
import { Testimonials } from '@/components/testimonials'; 
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout( () => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0,0);
        }, 2000)
      }
    )()
  }, [])


//   useEffect( () => {
//     const lenis = new Lenis()
   
//     function raf(time) {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)
// },[])

  return (
    <div className=" p-0 m-0">
      <ReactLenis root>
        <AnimatePresence mode='wait'>
           {isLoading && <Preloader/>}
        </AnimatePresence>
        <Hero/>
        <WhatWeDo/>
        <ServicesMarquee/>
        <ParallaxHero/>  
        <Projects />  
        <TechStack/> 
        <Process/> 
 {/* <ContactSection/> */}
        <ContactCTA/> 
        <ContactIntro/>  
        <WorksCompleted/> 
          <Testimonials/>
        <div className='relative h-[720px] md:h-[500px]'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        > 
          <div className='relative h-[calc(100vh+720px)] md:h-[calc(100vh+500px)] -top-[100vh]'> 
            <div className='h-[720px] md:h-[500px] sticky top-[calc(100vh-720px)] md:top-[calc(100vh-500px)]'> 
              <Footer />
            </div> 
          </div> 
        </div>
      </ReactLenis>
    </div>
  );
}

 