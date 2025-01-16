import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { MouseHighlight } from './ui/mouse-highlight' 
import { generalInfo } from '@/constants/info';

const quickLinks = ["Home", "About", "Services", "Products", "Case study", "Contact" ];

export const Footer = () => {
  return (
    <footer 
      className='p-0 w-full bg-colorLight ' 
    >
      <MouseHighlight containerClassName={"~p-8/24 w-full text-colorLight/70"}>
     
        <div className="flex flex-col md:gap-x-20 md:flex-row md:items-start items-center text-center md:justify-between space-y-8 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="~space-y-4/10">
            <div className=" ">
               <Image 
                src={"/fullLogo.webp"} 
                alt="logo" 
                width={350} 
                height={150}
              /> 
            </div>
            <p className="text-base md:text-2xl text-center text-balance md:text-left max-w-md">
            At Symliq, we combine teamwork, innovation, and expertise to deliver high-quality, creative solutions. Our collaborative approach ensures every project exceeds client expectations, bringing your vision to life with excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col text-center items-center md:items-start md:flex-row space-y-2 md:space-y-0 md:space-x-12">
            <div className="space-y-2 md:space-y-8">
              <Link href="#home" className="block hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#work" className="block hover:text-white transition-colors">
                Cases
              </Link>
              <Link href="#about" className="block hover:text-white transition-colors">
                About
              </Link>
            </div>
            <div className="space-y-2 md:space-y-8">
              <Link href="#service" className="block hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#testimonials" className="block hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          {/* Social Icons  */}
          <div className="flex justify-center space-x-6 md:flex-col md:space-x-0 md:space-y-6">
          <ul>
            <li className='text-zinc-400 hover:text-zinc-100 ~mb-2/5 transition-all ease-in-out duration-500 cursor-pointer'>
              Nii Okaiman West <br/>
              Silver St, GA-462-6116
            </li> 
            <li> 
              <a 
                href={generalInfo.phoneLineOneLink}
                className='text-zinc-300 hover:text-zinc-100 ~mb-2/5 transition-all ease-in-out duration-500'
              >
                  {generalInfo.phoneLineOne}
              </a>
            </li>
            <li> 
              <a 
                href={generalInfo.phoneLineTwoLink} 
                className='text-zinc-300 hover:text-zinc-100 mb-2 md:5 transition-all ease-in-out duration-500 '
              >
                {generalInfo.phoneLineTwo}
              </a>
            </li>
            <li> 
              <a 
                href={generalInfo.emailLink}
                className='text-zinc-300 hover:text-zinc-100 mb-2 transition-all ease-in-out duration-500 '
              >
                {generalInfo.email}
              </a>
            </li>
          </ul>
          </div>
        </div>

        <div className="border-t border-zinc-500 mt-10 text-zinc-400 text-center pt-3">
        Copyright ©2024 All rights reserved Symliq
      </div>
      </MouseHighlight>
 
    </footer>
  )
} 



