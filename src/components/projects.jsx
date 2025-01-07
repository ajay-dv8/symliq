"use client"
import { SwapBtn } from "./swapBtn";
import { Titles } from "./titles";
import Card from "./ui/projectCard";
 import { projects } from '../constants/projects'

export const Projects = () => {
 
  return (
    <div className='w-full px-10 pb-20 mb-20' >
      <div className="mb-10"> 
        <Titles 
          smallTitle='Our Projects'
          bigTitle="Featured Projects"
          subLineOne="Discover innovative solutions"
          subLineTwo="That our customers Love"
        />
     </div> 
      
      <div className="relative">
        {projects.map((project) => (
          // <div 
            // key={project.id}  
            // className="sticky top-40 md:top-28" 

          // >
            <Card 
            key={project.id}  
            type={project.type} 

            name={project.name}
            description={project.description}
            backgroundImage={project.backgroundImage}
          />
          // </div>
        ))}
      </div> 

      {/* Fix product button */}

      {/* <div className="justify-center flex mt-48">
        <SwapBtn
        className="text-colorDark bg-colorLight  hover:bg-colorLight"
        link={"#"}
        children={"More"}
        />
      </div> */}
    </div>
  )
}

 
 