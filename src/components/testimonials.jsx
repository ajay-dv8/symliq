"use client"; 

import React from "react";
import { Carousel, Card } from "@/components/ui/card-carousel";
import { Titles } from "./titles";

export function Testimonials() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
     <div className="w-full h-full py-20 bg-colorDark">
      <Titles
        smallTitle={"Testimonials"}
        bigTitle="What our customers say"
        // subLineOne={""}

        smallClassName={"text-colorLight/50"}
        className={"text-colorLight "}
        subClassName={"text-colorLight"} 
      />
      <Carousel items={cards} />
    </div> 
  );
}
 

const data = [
  {
    name: "Daniel Opoku", 
    position: "IT Specialist @ Bawku Rural Bank",
    testimonial: "Symliq’s expertise in software development is top-notch. Collaborating with has simplified our operations. very impressive work.",
  },
  {
    name: "Liam Robertson",
    position: "Head of Product @ AgileNova Ltd. (UK)" ,
    testimonial: "Pappermap makes analytics simple, connecting to our data effortlessly and delivering instant insights. Game-changing tool",
     
  },
  {
    name: "Bernard Owusu", 
    position: " Manager @ Zivot Consult",
    testimonial: "Symliq delivered exactly what we needed, on time and beyond expectations. Amazing work!",
  },
  {
    name: "Naomi Mensah", 
    position: "Marketing Lead @ NextGen Foods",
    testimonial: "The platform they built for us has been a game-changer. Excellent service!",
  },

  {
    name: "Emily Zhang", 
    position: "CEO @ HorizonTech (USA)",
    testimonial: "Symliq’s team was efficient, creative, and delivered beyond our expectations.",
  }, 
];
