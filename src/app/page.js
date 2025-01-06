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
import { Unveil } from '@/components/unvail/unvail';

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
        <ContactCTA/> 
        <ContactIntro/> 
        {/* <div className='bg-colorDark w-full mx-0 px-0'>  */}
          <WorksCompleted/>
          {/* <Unveil/> */}
          {/* <div className='bg-colorDark'>  */}
            <Testimonials/>
            <Footer/>
          {/* </div> */}
        {/* </div> */}
      </ReactLenis>
    </div>
  );
}


//TODO: add lenis smooth scrolling 