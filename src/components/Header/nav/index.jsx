import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import { navItems } from '@/constants/nav-items';

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(true); 

  const closeMenu = () => setIsMenuOpen(false); 

  return (
    isMenuOpen && ( 
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="h-screen w-[90%] bg-[rgb(41,41,41)] fixed right-0 top-0 text-white z-[30] md:w-[50%]"
      >
        <div className="box-border h-full flex flex-col justify-between z-[40] p-[100px] md:p-[40px_32px]">
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className="flex flex-col text-[56px] gap-[12px] mt-[80px] md:text-[32px] md:mt-[40px]"
          >
            <div className="text-[rgb(153,153,153)] border-b border-[rgb(153,153,153)] uppercase text-[11px] mb-[40px] md:mb-[20px]">
              <p>Navigation</p>
            </div>
            {navItems.map((data, index) => (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator === data.href}
                setSelectedIndicator={setSelectedIndicator}
                closeMenu={closeMenu} 
                className="z-50"
              />
            ))}
          </div>
          <Footer />
        </div>
        <Curve />
      </motion.div>
    )
  );
}
 

 