"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function ParallaxHero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Web Development", 
    thumbnail:
      "/services/ind.png",
  },
  {
    title: "Mobile Applications", 
    thumbnail:
      "/services/mob.png",
  },

  {
    title: "Editorially", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Graphic Design", 
    thumbnail:
      "/services/des.png",
  },
  {
    title: "eCommerce ", 
    thumbnail:
      "/services/ecommerce.png",
  },
  {
    title: "Tailwind Master Kit", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "UI/UX", 
    thumbnail:
      "/services/uiux.png",
  },
  {
    title: "Enterprise Applications", 
    thumbnail:
      "/services/indt.png",
  },
  {
    title: "E Free Invoice", 
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
