"use client";
import React, { useEffect, useState } from "react";
import "./about.css";

const AboutContent = () => (
  <div className="min-h-screen ">
    <section>
      <div className="title titleGreathorned">
        <span>The great horned owl</span> also known as the tiger owl or the
        hoot owl, is a large owl native to the Americas.
      </div>
    </section>

    <section className="cluster clusterGreat">
      <div className="circle clusterPieces"></div>
      <div className="owlHorned clusterPieces">
        <img
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/great_horned_owl.jpg"
          alt="great horned owl"
        />
        <div className="caption">
          <span>/01</span> GREAT HORNED OWL
        </div>
      </div>
      <img
        className="dotsBlue clusterPieces"
        src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg"
        alt="dots"
      />
    </section>

    <section>
      <div className="title titleBurrowing">
        <span>The burrowing owl</span> is a small, long-legged owl found
        throughout open landscapes of North and South America.
      </div>
    </section>

    <section className="cluster clusterBurrowing">
      <img
        className="clusterPieces triangle"
        src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg"
        alt="triangle"
      />
      <div className="clusterPieces owlBurrowing">
        <img
          src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/burrrowing_owl_674x700.jpg"
          alt="burrowing owl"
        />
        <div className="caption captionBurrowing">
          <span>/02</span> BURROWING OWL
        </div>
      </div>
      <img
        className="clusterPieces dotsWhite"
        src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_white_310x588.svg"
        alt="dots"
      />
    </section>

    <section className="spcr300"></section>
  </div>
);

export const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

      gsap.registerPlugin(ScrollTrigger);

      /* ------Great Horned Owl Sequence------  */
      gsap.set(".circle", { yPercent: -5 });
      gsap.set(".dotsBlue", { yPercent: 10 });
      gsap.set(".owlHorned", { yPercent: -20 });
      gsap.set(".clusterGreat", { yPercent: 5 });

      gsap.to(".circle", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          scrub: 1,
        },
      });

      gsap.to(".dotsBlue", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          scrub: 1,
        },
      });

      gsap.to(".owlHorned", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          scrub: 1,
        },
      });

      gsap.to(".caption", {
        yPercent: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(".clusterGreat", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterGreat",
          end: "bottom center",
          scrub: 1,
        },
      });

      /* ------Burrowing Owl Sequence------  */
      gsap.set(".triangle", { yPercent: 25, rotation: -90 });
      gsap.set(".dotsWhite", { yPercent: 10 });
      gsap.set(".owlBurrowing", { yPercent: -20 });
      gsap.set(".clusterBurrowing", { yPercent: 5 });

      gsap.to(".triangle", {
        yPercent: -5,
        rotation: 40,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          scrub: 1,
        },
      });

      gsap.to(".dotsWhite", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          scrub: 1,
        },
      });

      gsap.to(".owlBurrowing", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          scrub: 1,
        },
      });

      gsap.to(".captionBurrowing", {
        yPercent: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          end: "bottom center",
          scrub: 1,
        },
      });

      gsap.to(".clusterBurrowing", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".clusterBurrowing",
          end: "bottom center",
          scrub: 1,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    initGSAP();
  }, [isMounted]);

  return <AboutContent />;
};
