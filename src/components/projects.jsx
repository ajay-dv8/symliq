 "use client";
import { useRef, useEffect, useState } from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiMiniArrowTopRightOnSquare,
} from "react-icons/hi2";
import { projects } from "@/constants/projects";
import { Titles } from "./titles";
import Link from "next/link";
import "./h-scroll.css";

export default function HorizontalPro() {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5; // Adjust multiplier for drag speed
      container.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDragging.current = false;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUpOrLeave);
    container.addEventListener("mouseleave", handleMouseUpOrLeave);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUpOrLeave);
      container.removeEventListener("mouseleave", handleMouseUpOrLeave);
    };
  }, []);

  const scrollTo = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    // Dynamically calculate card width based on viewport size
    const isMobile = window.innerWidth < 768;
    const cardWidth = isMobile ? window.innerWidth * 0.8 : 700;
    // const cardWidth = 700; // Adjust based on your card size
    const newPosition =
      direction === "left"
        ? Math.max(0, container.scrollLeft - cardWidth)
        : Math.min(
            container.scrollWidth - container.clientWidth,
            container.scrollLeft + cardWidth
          );

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setScrollPosition(newPosition);
  };
 
  return (
    <section id="work" className="min-h-[100vh] relative ~pl-4/20">
      <div className="mb-12">
        <Titles
          smallTitle="Case Study"
          bigTitle="Featured Projects"
          subLineOne="Discover innovative solutions"
          subLineTwo="That our customers Love"
        />
      </div>

      <div className="flex flex-col">
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar cursor-grab snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex ~gap-6/14 px-8 min-w-max my-4">
            {projects.map((project, index) => (
              <Link
                href={project.link}
                key={project.id}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[80vw] md:w-[700px] snap-start flex-shrink-0 rounded-lg hover:scale-105 transition-transform ease-in-out duration-700 cursor-pointer group"
              >
                {/* Card container */}
                <div
                  style={{
                    backgroundImage: `url(${project.backgroundImage})`,
                  }}
                  className="aspect-[16/10] bg-cover bg-center overflow-hidden shadow-lg flex flex-col justify-between border-2 border-teal/20 rounded-lg relative"
                >
                  {/* filter overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none w-[calc(100%+1rem)]" />

                  {/* Hover Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ~py-1/2 ~px-2/4">
                    <h4 className="text-lg font-normal text-white text-center px-4 flex items-center">
                      Visit {project.name}{" "}
                      <HiMiniArrowTopRightOnSquare className="text-lg text-colorLight ml-2" />
                    </h4>
                  </div>

                  {/* Card Content */}
                  <div className="absolute hidden md:block bottom-4 left-4 z-10 text-white">
                    <h2 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h2>
                    <p className="text-sm max-w-xs">{project.desc}</p>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex justify-between items-baseline md:hidden mt-4 px-4">
                  <div>
                    <h2 className="text-lg font-normal text-colorDark">
                      {project.name}
                    </h2>
                    <p className="text-gray-600 text-sm max-w-xs">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-4 py-12 px-4">
          <button
            onClick={() => scrollTo("left")}
            disabled={scrollPosition <= 0}
            className="h-10 w-10 rounded-full bg-teal flex justify-center items-center hover:scale-105 transition-all duration-700"
          >
            <HiArrowLeft className="text-3xl text-colorLight" />
          </button>
          <button
            onClick={() => scrollTo("right")}
            disabled={
              containerRef.current
                ? scrollPosition >=
                  containerRef.current.scrollWidth -
                    containerRef.current.clientWidth
                : false
            }
            className="h-10 w-10 rounded-full bg-teal flex justify-center items-center hover:scale-105 transition-all duration-700"
          >
            <HiArrowRight className="text-3xl text-colorLight" />
          </button>
        </div>
      </div>
    </section>
  );
}
