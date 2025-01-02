"use client"
import { SwapBtn } from "./swapBtn";
import { Titles } from "./titles";
import Card from "./ui/projectCard";
 

const projects  = [
  { 
    id: 1, 
    name: 'Project 1', 
    type: 'Web Development', 
    backgroundImage: '', 
    description: 'This is project 1' 
  }, 
  { 
    id: 2, 
    name: 'Project 2',
    backgroundImage: '',
    type: 'Web Development',  
    description: 'This is project 2' 
  },
  { 
    id: 3, 
    backgroundImage: '',
    name: 'Project 3', 
    type: 'Web Development',  
    description: 'This is project 3' 
  },
  { 
    id: 4, 
    backgroundImage: '',
    name: 'Project 4', 
    type: 'Web Development',  
    description: 'This is project 4' 
  }
];




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
      
      <div className="">
        {projects.map((project) => (
          <div 
            key={project.id}  
            className="sticky top-40" 

          >
            <Card 
            key={project.id}  
            type={project.type} 

            name={project.name}
            description={project.description}
            backgroundImage={project.backgroundImage}
          />
          </div>
        ))}
      </div> 

      <div className="justify-center flex mt-8">
        <SwapBtn
        className="text-colorDark w-28 bg-colorLight border border-colorDark hover:bg-colorLight"
        link={"#"}
        children={"More"}
        />
      </div>
    </div>
  )
}

 