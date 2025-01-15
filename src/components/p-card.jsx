"use client"

import { Titles } from "./titles";
import { ProContentCard } from "@/components/ui/p-content-card"
import { projects } from "@/constants/projects" 

export function ProCard() { 
  return (
    <div id="work" className='w-full md:px-10 pb-20 mb-20' >
      <div className="mb-10"> 
        <Titles 
          smallTitle='Case Study'
          bigTitle="Featured Projects"
          subLineOne="Discover innovative solutions"
          subLineTwo="That our customers Love"
        />
     </div> 
 
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 ~mx-8/20">
      {projects.map((project, index) => (
        <div key={index} className="hover:scale-105 transition-all ease-in-out duration-700 rounded-lg">
          <ProContentCard
            backgroundImage={project.backgroundImage} 
            title={project.name} 
            description={project.desc} 
          />
        </div>
      ))}
    </div>
    </div>
  )
}