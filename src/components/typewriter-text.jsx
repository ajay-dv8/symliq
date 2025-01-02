import React from 'react' 
import TypeWriter from "./typewrite";

const typeWriter = ["apples", "pears", "bananas"];

export const TypewriterText = () => {
  return (
    <div className="typewriter-holder text-colorDark ">
        <p className=' text-7xl text-colorDark relative'> 
          <TypeWriter data={typeWriter} />
        </p>
      </div>
  )
}
