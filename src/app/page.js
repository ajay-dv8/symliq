import { ReactLenis } from 'lenis/react' 

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
import { DrawerDemo } from '@/components/drawer';

export default function Home() {
  return (
    <div className=" p-0 m-0">
      <ReactLenis root>
        <Hero/>
        <WhatWeDo/>
        <ServicesMarquee/>
        <ParallaxHero/>  
        <Projects />  
        <TechStack/> 
        <Process/>
        <DrawerDemo/>
        <ContactCTA/> 
        <ContactIntro/>  
        <WorksCompleted/> 
          <Testimonials/>
        <div className='relative h-[500px]'
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        > 
          <div className='relative h-[calc(100vh+500px)] -top-[100vh]'> 
            <div className='h-[500px] sticky top-[calc(100vh-500px)]'> 
              <Footer />
            </div> 
          </div> 
        </div>
      </ReactLenis>
    </div>
  );
}


//TODO: add lenis smooth scrolling 