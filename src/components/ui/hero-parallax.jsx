"use client"; 
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image"; 
import React from "react";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    (<div
      ref={ref}
      // TODO: h-[300dvh]
      className="~h-[100rem]/[160rem] bg-foreground ~pt-28/40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div> 
    </div>)
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto ~py-10/40 px-10 md:px-20 w-full  left-0 top-0">
      <h1 className=" ~text-3xl/7xl font-normal text-colorDark ">
        The Ultimate <br /> development agency
      </h1>
      <p className="max-w-2xl ~text-base/lg font-normal mt-8 text-colorDark/70 ">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {

    // Generate a base64 placeholder for low-quality effect
    const generateBlurPlaceholder = () => {
      return `data:image/svg+xml;base64,${btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#ccc">
          <rect width="100%" height="100%" />
        </svg>
      `)}`;
    };

  return (
    (<motion.div
      style={{
        x: translate, 
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product ~h-48/96 ~w-[16rem]/[30rem] relative flex-shrink-0">
      <div className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} 
          loading="lazy"
          placeholder="blur" 
          blurDataURL={generateBlurPlaceholder()}
        />
      </div>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>)
  );
};
