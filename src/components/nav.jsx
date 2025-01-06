'use client' 
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow, TiMail, TiPhone } from "react-icons/ti"; 
import Image from "next/image.js";
import { Button } from "./button";
 
const navItems = ["About", "services", "Products", "Case study" ];

export const Navbar = () => { 
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
 
  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      // @ts-expect-error-possiblyNull
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      // @ts-expect-error-possiblyNull
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      // @ts-expect-error-possiblyNull
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 mix-blend-difference sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <Image width={150} height={70} src="/fullLogo.png" alt="logo" className=" w-24 md:w-40" /> 
          </div> 

          {/* nav links */}
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mix-blend-normal">
              <Button
                id="product-button"
                title="Contact"
                rightIcon={<TiMail className="text-colorLight" size={20} />}
                containerClass="bg-colorDark px-6 hover:bg-colorDark/80 md:flex hidden !important"
              />
            </div>
          {/* </div> */}
        </nav>
      </header>

      
    </div>
  );
};
