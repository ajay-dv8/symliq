"use client";
import React, { useRef, useState, useEffect } from "react";
import { Timeline } from "@/components/ui/timeline";
import { Titles } from "../titles";

// Separate video component for better code organization and reusability
const LazyVideo = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full pb-[56.25%] bg-black rounded-2xl">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        {isInView && <source src={src} type="video/webm" />}
      </video>
    </div>
  );
};

// Memoize the process data to prevent unnecessary recalculations
const processData = [
  {
    num: '01',
    title: "Research & Planning",
    content: (
      <div>
        <p className="text-colorDark text-xs md:text-base font-normal mb-8">
          At Symliq, every successful project starts with understanding you. Our discovery phase goes beyond research. it's about meaningful collaboration to uncover your unique goals, challenges, and vision. Through workshops and interactive discussions, we align our direction with your needs, setting a strong foundation for the journey ahead.
        </p>
        <LazyVideo 
          src="/vid/pr.webm"
          poster="/images/poster-research.jpg"
        />
      </div>
    ),
  },
  {
    num: '02',
    title: "Strategy & Creative Decisions",
    content: (
      <div>
        <p className="text-colorDark text-xs md:text-base font-normal mb-8">
          Strategy is the cornerstone of exceptional outcomes. At Symliq, we combine design thinking with technical expertise to create solutions that drive positive transformation. This stage ensures that every decision is intentional, aligning our creative direction with a strategy tailored to bring your vision to life while keeping your users at the heart of the process.
        </p>
        <LazyVideo 
          src="/vid/stra.webm"
          poster="/images/poster-strategy.jpg"
        />
      </div>
    ),
  },
  {
    num: '03',
    title: "Design & Development",
    content: (
      <div>
        <p className="text-colorDark text-xs md:text-base font-normal mb-8">
          This is where your ideas take shape. Symliq turns concepts into reality, crafting seamless and user-centric software solutions. Whether you need robust web applications, intuitive user interfaces, or custom development, our team is dedicated to delivering products that not only meet but exceed your expectations.
        </p>
        <LazyVideo 
          src="/vid/dev.webm"
          poster="/images/poster-development.jpg"
        />
      </div>
    ),
  },
  {
    num: '04',
    title: "Delivery & Quality Assurance",
    content: (
      <div>
        <p className="text-colorDark text-xs md:text-base font-normal mb-4">
          At Symliq, we believe in building lasting relationships rooted in trust and satisfaction. We meticulously ensure that your solution is perfect by the time it's handed over. And if any challenges arise, our commitment to your success continues with ongoing support and flexibility, long after launch. Your satisfaction is our priority.
        </p>
        <LazyVideo 
          src="/vid/vidf.webm"
          poster="/images/poster-delivery.jpg"
        />
      </div>
    ),
  },
];

// Memoize the Process component to prevent unnecessary re-renders
export const Process = React.memo(function Process() {
  return (
    <div id="process" className="w-full">
      <Titles
        smallTitle="Our Process"
        bigTitle="Trust The Process"
        subLineOne="Great process makes"
        subLineTwo="great solutions."
      />
      <Timeline data={processData} />
    </div>
  );
});























// import React from "react";
// import { Timeline } from "@/components/ui/timeline";
// import { Titles } from "../titles";

// export function Process() {
//   const data = [
//     {
//       num: '01',
//       title: "Research & Planning",
//       content: (
//         <div>
//           <p className="text-colorDark text-xs md:text-base font-normal mb-8">
//             At Symliq, every successful project starts with understanding you. Our discovery phase goes beyond research. it’s about meaningful collaboration to uncover your unique goals, challenges, and vision. Through workshops and interactive discussions, we align our direction with your needs, setting a strong foundation for the journey ahead.
//           </p>

//           <div className="relative w-full pb-[56.25%] bg-black rounded-2xl">
//             <video 
//               className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
//               src={"/vid/pr.webm"}
//               poster="/posters/des.webp" 
//               autoPlay 
//               loop 
//               muted 
//               playsInline 
//               preload="metadata" // Load only metadata for faster initial loading
//               loading="lazy" // Lazy load the video
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       num: '02',
//       title: "Strategy & Creative Decisions",
//       content: (
//         <div>
//           <p className="text-colorDark text-xs md:text-base font-normal mb-8">
//             Strategy is the cornerstone of exceptional outcomes. At Symliq, we combine design thinking with technical expertise to create solutions that drive positive transformation. This stage ensures that every decision is intentional, aligning our creative direction with a strategy tailored to bring your vision to life while keeping your users at the heart of the process.
//           </p>

//           <div className="relative w-full pb-[56.25%] bg-black rounded-2xl">
//             <video 
//               className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
//               src={"/vid/stra.webm"}
//               poster="/posters/stra.webp"
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="metadata"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       num: '03',
//       title: "Design & Development",
//       content: (
//         <div>
//           <p className="text-colorDark text-xs md:text-base font-normal mb-8">
//             This is where your ideas take shape. Symliq turns concepts into reality, crafting seamless and user-centric software solutions. Whether you need robust web applications, intuitive user interfaces, or custom development, our team is dedicated to delivering products that not only meet but exceed your expectations.
//           </p>

//           <div className="relative w-full pb-[56.25%] bg-black rounded-2xl">
//             <video 
//               className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
//               src={"/vid/dev.webm"}
//               poster="/posters/dev.webp"
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="metadata"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       num: '04',
//       title: "Delivery & Quality Assurance",
//       content: (
//         <div>
//           <p className="text-colorDark text-xs md:text-base font-normal mb-4">
//             At Symliq, we believe in building lasting relationships rooted in trust and satisfaction. We meticulously ensure that your solution is perfect by the time it’s handed over. And if any challenges arise, our commitment to your success continues with ongoing support and flexibility, long after launch. Your satisfaction is our priority.
//           </p>

//           <div className="relative w-full pb-[56.25%] bg-black rounded-2xl">
//             <video 
//               className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
//               src={"/vid/vidf.webm"}
//               poster="/posters/dep.webp"
//               autoPlay
//               loop
//               muted
//               playsInline
//               preload="metadata"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div id="process" className="w-full">
//       <Titles
//         smallTitle="Our Process"
//         bigTitle={"Trust The Process"}
//         subLineOne={"Great process makes"}
//         subLineTwo={"great solutions."}
//       />
//       <Timeline data={data} />
//     </div>
//   );
// }
 
 