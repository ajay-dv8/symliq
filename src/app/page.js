 
import { ReactLenis } from 'lenis/react' 

import { ParallaxHero } from "@/components/parallaxHero";  
import { WhatWeDo } from "@/components/whatWeDo" 
import { Process } from "@/components/process/process";
import { TechStack } from "@/components/tech";
import { ContactCTA } from "@/components/CTA-Card";  
import { ServicesMarquee } from "@/components/service-marquee"; 
import { ContactIntro } from "@/components/contact-intro";
import { Footer } from '@/components/footer'; 
import { WorksCompleted } from '@/components/works-completed';
import { Testimonials } from '@/components/testimonials'; 
import { Hero } from '@/components/hero';
import { ProCard } from '@/components/p-card';


export default function Home() {
 
  return (
    <div className=" ">
      <ReactLenis root>  
        <Hero/>
        <WhatWeDo/> 
        <ServicesMarquee/> 
        <ParallaxHero/>   
        <ProCard/>
        <TechStack/> 
        <Process/> 
        <ContactCTA/> 
        <ContactIntro/> 
        <WorksCompleted/> 
          <Testimonials/>
        <div className='relative h-[720px] md:h-[500px] bottom-0 '
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

 