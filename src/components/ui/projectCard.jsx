"use client"
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion"; 

const Card = ({ backgroundImage, name,  description, type, totalCards, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });
 
  // Scale down and blur the card as the next card scrolls into view
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
 

  return (
    <motion.div 
      style={{
        // zIndex: totalCards - index, // Ensure stacking order
        scale,
      }}
      className="grid w-full place-content-center px-4 py-12 sticky top-28 "
    >
      <TiltCard 
        backgroundImage={backgroundImage} 
        type={type} 
        name={name}
        description={description}
      />
    </motion.div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ backgroundImage, name, description, type  }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return ( 
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative rounded-xl w-[90vw] aspect-video bg-gradient-to-br from-indigo-300 to-violet-300 pb-0 "
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="absolute cursor-pointer inset-1 grid place-content-center rounded-xl shadow-xl "
      >
        <div className="relative z-10 flex flex-col justify-between h-full text-center">
          {/* Top Section */}
          <div className="flex justify-between ~px-0/5 relative ~-top-16/36">
            <h3 className="~text-base/-xl text-colorLight drop-shadow-lg">{type}</h3>
            {/* <TiLocationArrow className="~text-2xl/4xl text-colorLight" /> */}
          </div>

          {/* Bottom Section */}
          <div className="px-6 mb-0 relative ~-bottom-16/44  bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 ">
            <h2 className="~text-xl/4xl ~font-normal/semibold text-colorLight mb-1">{name}</h2>
            <p className="hidden md:block ~text-sm/lg text-colorLight">{description}</p>
          </div>
        </div>
      </div>
    </motion.div> 
  );
};
export default Card;