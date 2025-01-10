"use client"

import * as React from "react" 
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { projects } from "@/constants/projects"
import { Titles } from "./titles";
import Card from "./ui/projectCard";
import Image from "next/image";
 

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  function handleCardClick(project) {
    setSelectedProject(project);
  }

  return (
    <div id="work" className='w-full px-10 pb-20 mb-20' >
      <div className="mb-10"> 
        <Titles 
          smallTitle='Case Study'
          bigTitle="Featured Projects"
          subLineOne="Discover innovative solutions"
          subLineTwo="That our customers Love"
        />
     </div> 
      
     <Drawer>
        {projects.map((project) => (
          <div  className="sticky top-28" key={project.id}>
            {/* Use the trigger to open the drawer */}
            <DrawerTrigger asChild>
              <div onClick={() => handleCardClick(project)}>
                <Card
                  key={project.id}
                  name={project.name}
                  backgroundImage={project.backgroundImage}
                />
              </div>
            </DrawerTrigger>
          </div>
        ))}

        <DrawerContent >

          {selectedProject && (
            // selectedProjectDrawer 
            <div className=" w-full h-[95dvh] md:h-[90dvh] overflow-y-auto">
              <div className="flex flex-col md:flex-row w-full md:gap-x-24">
                <div className="flex flex-col flex-[45%] max-w-[30rem] p-4 ">
                  <DrawerHeader >
                    <DrawerTitle 
                      className=" text-left my-4 md:my-10 md:mx-8">
                        {selectedProject.name}
                      </DrawerTitle>
                      
                    <DrawerDescription 
                      className="~text-lg/4xl text-left md:mx-8 max-w-[20rem]"
                    >
                      {selectedProject.desc}
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className=" pb-0">
                    <div className="flex flex-col ">

                      <div className="mt-5 md:mt-8 md:mx-12">
                        <p className="text-lg font-semibold mb-4">
                          The Project:
                        </p>
                        <p className="text-colorLight/70">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div className="text-left mt-6 md:mt-10 md:mx-12">
                        <p className="text-lg font-semibold">
                          Technologies:
                        </p>
                        <ul className="flex flex-wrap gap-x-4 text-colorLight/70">
                          {selectedProject.stack.map((tech, index) => (
                            <li 
                              key={index}
                              className="inline-block border border-teal rounded-md px-3 mt-4 py-1" 
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col flex-[55%] justify-center items-center">
                  <div className="p-5 md:p-10">
                    <Image 
                      src={selectedProject.backgroundImage} 
                      alt="" 
                      width={720} 
                      height={480}
                      className="aspect-video w-full object-cover rounded-2xl"
                    />      
                  </div>  

                  <div className="flex flex-col md:flex-row w-full"> 
                    <div className="rounded-xl w-full px-5 py-5 md:px-10 md:py-5 "> 
                      <Image 
                        src={selectedProject.backgroundImage} 
                        alt="" 
                        width={360} 
                        height={360}
                        className="aspect-square w-full object-cover rounded-2xl"
                      />        
                    </div>

                    <div className="rounded-xl w-full px-5 md:px-10 md:py-5 "> 
                      <Image 
                        src={selectedProject.backgroundImage} 
                        alt="" 
                        width={360} 
                        height={360}
                        className="aspect-square w-full object-cover rounded-2xl"
                      />        
                    </div>
                  </div>        
                </div>
              </div>

              <DrawerFooter>
                
              </DrawerFooter>
              
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  )
}








 