import { ParallaxHero } from "@/components/parallaxHero"; 
import { Hero } from "@/components/hero/hero" 
import { WhatWeDo } from "@/components/whatWeDo"
import { Projects } from "@/components/projects";
import { ProcessTitle } from "@/components/process/processTitle";
import { Process } from "@/components/process/process";
import { TechStack } from "@/components/tech";
import { ContactCTA } from "@/components/CTA-Card";  
import { ServicesMarquee } from "@/components/service-marquee"; 
import { Contact } from "@/components/contact-us/contact";
import { ContactIntro } from "@/components/contact-intro";


export default function Home() {
  return (
    <div className=" ">
      <Hero/>
      <WhatWeDo/>
      <ParallaxHero/>  
      <ServicesMarquee/>
      <Projects />  
      <TechStack/>
      <ProcessTitle />
      <Process/>
      <ContactCTA/> 
      <ContactIntro/>  
      {/* <div className="h-96"></div>  */}
        {/* <Contact/> */}
      {/* <div className="w-full h-[50rem]">
        test
      </div> */}
    </div>
  );
}


//TODO: add lenis smooth scrolling 