import React from 'react'
import Image from 'next/image'
import { MouseHighlight } from './ui/mouse-highlight'

const quickLinks = ["About", "Services", "Products", "Case study", "Contact" ];

export const Footer = () => {
  return (
    <div className='~p-8/24 w-full bg-colorDark'>
      <MouseHighlight containerClassName={"rounded-2xl"}>
        <div className=" p-16">

          <div className=" col-span-2 border-r border-r-colorLight border-spacing-x-10">
            <Image 
              src="/fullLogo.png" 
              alt="logo" 
              width={250}
              height={150}
              className=""
            />

            <h2 className='~text-3xl/6xl mt-5 capitalize'>
              Activate and grow your brand
            </h2>
          </div>

          <div className=" ">
            <div className=" ">
              <p className='text-2xl'> links</p>
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className=" "
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="">
              
            </div>
          </div>
        </div>  
      </MouseHighlight>
    </div>
  )
} 



