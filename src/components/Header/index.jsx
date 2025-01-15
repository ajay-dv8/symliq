'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../RoundedButton'; 
import Image from 'next/image';
import Link from 'next/link';

export default function index() {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    const button = useRef(null);

    useEffect( () => {
      if(isActive) setIsActive(false)
    }, [pathname])

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {gsap.to(button.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
                onEnterBack: () => {gsap.to(button.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
            }
        })
    }, [])

    return (
        <div className='w-screen z-50'>
        <div ref={header} className={styles.header}>
            <Link href={"/"} className="flex cursor-pointer">
                <Image width={150} height={70} src="/fullLogo.png" alt="logo" className="w-24 md:w-40"/>
            </Link>
            
        </div>

        <div ref={button} className={`${styles.headerButtonContainer}`}>
            <Rounded onClick={() => {setIsActive(!isActive)}} className={`${styles.button} bg-colorDark/30 backdrop-blur-sm size-12 m-4 md:size-20 md:m-5 rounded-full relative cursor-pointer flex justify-center items-center`}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </Rounded>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
        </div>
    )
}
