import React from 'react'
import { useEffect, useRef } from 'react'; 
import gsap from 'gsap'; 
import { Magnetic } from '../magnetic';
import { cn } from '@/lib/utils';

export default function index({className, children, backgroundColor="#008080", ...attributes}) {

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div 
        style={{overflow: "hidden"}} 
        onMouseEnter={() => {manageMouseEnter()}} 
        onMouseLeave={() => {manageMouseLeave()}} 
        {...attributes}
        className={cn("rounded-full cursor-pointer relative flex items-center justify-center p-3 m-6", className)} 
      >
          { children }
        <div 
          ref={circle} 
          style={{backgroundColor}} 
          className="w-full h-[150%] absolute rounded-full top-[100%]"
        ></div>
      </div>
    </Magnetic>
  )
}


 