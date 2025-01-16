"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function ParallaxHero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "eCommerce ", 
    thumbnail:
      "/services/ecommerce.webp",
  },
 
  {
    title: "Web Development", 
    thumbnail:
      "/services/ind.webp",
  },
  {
    title: "Mobile Applications", 
    thumbnail:
      "/services/mob.webp",
  },

  {
    title: "Editorially", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
  {
    title: "Organizational ", 
    thumbnail:
      "/services/ind3.webp",
  },
  {
    title: "Pixel Perfect", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },

  {
    title: "Graphic Design", 
    thumbnail:
      "/services/des.webp",
  },
  
  {
    title: "Mobile", 
    thumbnail:
      "/services/mob.webp",
  },

  {
    title: "Web Design", 
    thumbnail:
      "/services/wdes.webp",
  },
  {
    title: "SmartBridge", 
    thumbnail:
      "/services/ind.webp",
  },
  {
    title: "Industrial", 
    thumbnail:
      "/services/ind.webp",
  },

  {
    title: "Sales", 
    thumbnail:
      "/services/ecom.webp",
  },
  {
    title: "UI/UX", 
    thumbnail:
      "/services/uiux.webp",
  },
  {
    title: "Enterprise Applications", 
    thumbnail:
      "/services/indt.webp",
  },
  {
    title: "E Free Invoice", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
