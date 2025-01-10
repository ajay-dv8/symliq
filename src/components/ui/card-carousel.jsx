"use client";;
import React, {
  useEffect, 
  useState,
  createContext, 
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight, 
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; 

export const CarouselContext = createContext({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({
  items,
  initialScroll = 0
}) => {
  const carouselRef = React.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    (<CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}>
          {/* <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}></div> */}

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              // remove max-w-4xl if you want the carousel to span the full width of its container
              "max-w-7xl mx-auto"
            )}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-colorLight flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-teal/80" />
          </button>
          <button
            className="relative z-40 h-10 w-10 rounded-full bg-colorLight flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-teal/80" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>)
  );
};

export const Card = ({
  card,
  index,
  layout = false
}) => {
 
  return (<> 
    <motion.button
      layoutId={layout ? `card-${card.name}` : undefined} 
      className="rounded-3xl bg-gradient-to-br from-teal/60 to-teal/10 border border-colorLight/50 ~h-48/52 w-72 md:w-96 overflow-hidden flex flex-col items-center justify-center relative p-4 shadow-2xl hover:scale-105 transition-all duration-700 ease-in-out">
      <div
        className="absolute w-full h-full top-0 inset-x-0 z-30 pointer-events-none" />
      <div className="relative z-40 ">
        <motion.p
          layoutId={layout ? `category-${card.testimonial}` : undefined}
          className="text-colorLight  text-sm md:text-base font-sans text-left">
          {card.testimonial}  
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.name}` : undefined}
          className="text-white text-xl md:text-2xl font-semibold max-w-xs text-left [text-wrap:balance] ~mt-2/4">
          {card.name} 
        </motion.p>
        <motion.p
          layoutId={layout ? `title-${card.position}` : undefined}
          className="text-colorLight/60 text-sm md:text-base  max-w-xs text-left [text-wrap:balance] font-sans ">
          {card.position} 
        </motion.p>
      </div> 
    </motion.button>
  </>);
};

 