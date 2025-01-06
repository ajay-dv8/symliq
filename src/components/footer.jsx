import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { MouseHighlight } from './ui/mouse-highlight'
import { TiSocialInstagram, TiSocialLinkedin } from 'react-icons/ti';

const quickLinks = ["About", "Services", "Products", "Case study", "Contact" ];

export const Footer = () => {
  return (
    <footer className='~p-8/24 w-full bg-colorDark'>
      <MouseHighlight containerClassName={"rounded-2xl p-10 w-full text-colorLight/70"}>
     
        <div className="flex flex-col md:gap-x-20 md:flex-row md:items-start items-center text-center md:justify-between space-y-8 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="~space-y-4/10">
            <div className=" ">
               <Image src={"/fullLogo.png"} alt='logo' width={250} height={100}/> 
            </div>
            <p className="text-xl md:text-4xl font-serif max-w-xs">
              Creative solutions to Grow your brand
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col text-center items-center md:items-start md:flex-row space-y-2 md:space-y-0 md:space-x-12">
            <div className="space-y-2 md:space-y-8">
              <Link href="/branding" className="block hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/realisations" className="block hover:text-white transition-colors">
                Cases
              </Link>
              <Link href="/site-web" className="block hover:text-white transition-colors">
                About
              </Link>
            </div>
            <div className="space-y-2 md:space-y-8">
              <Link href="/ressources" className="block hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/campagne" className="block hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 md:flex-col md:space-x-0 md:space-y-6">
            <Link href="#" className="hover:text-white transition-colors">
              <TiSocialInstagram className="h-6 w-6" />
              {/* <span className="sr-only">Instagram</span> */}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <path d="M22 7h-7V2H9v5H2l10 8.5L22 7zM2 17v2h20v-2H2z" />
              </svg>
              {/* <span className="sr-only">Behance</span> */}
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <TiSocialLinkedin className="h-6 w-6" />
              {/* <span className="sr-only">LinkedIn</span> */}
            </Link>
          </div>
        </div>
      </MouseHighlight>

        {/* Legal Mentions */}
        {/* <div className="mt-12 pt-4 border-t border-gray-800">
          <Link href="/mentions-legales" className="text-sm hover:text-white transition-colors">
            Mentions légales
          </Link>
        </div> */} 
 
    </footer>
  )
} 



