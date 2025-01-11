"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("div", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      (<motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            (<motion.div
              key={word + idx}
              className="dark:text-white w-full text-black opacity-0 "
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.div>)
          );
        })}
      </motion.div>)
    );
  };

  return (
    (<div className={cn("font-bold w-full", className)}>
      <div className="mt-4 w-full">
        <div
          className=" dark:text-white w-full text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>)
  );
};
