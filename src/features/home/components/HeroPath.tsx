"use client";

import Lottie from "lottie-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import heroMan from "@/assets/animations/man.json";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function HeroHeaderPath() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    gsap.killTweensOf(hero);

    gsap.to(hero, {
      motionPath: {
        path: "#hero-path",
        align: "#hero-path",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    return () => gsap.killTweensOf(hero);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "15px",
        left: "10%",
        width: "650px",
        height: "150px",
        pointerEvents: "none",
        zIndex: 100,
      }}
    >
      <svg width="650" height="150">
        <defs>
          {/* گرادیانت طلایی */}
          <linearGradient
            id="gold-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#F9E29C" />
            <stop offset="50%" stopColor="#F5C766" />
            <stop offset="100%" stopColor="#D9A441" />
          </linearGradient>

          {/* Glow سبز + طلایی */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* مسیر */}
        <path
          id="hero-path"
          d="
      M620 120
      C520 95, 450 140, 360 90
      S220 40, 120 70
      S40 40, 10 10
    "
          stroke="url(#gold-gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* علامت قله در انتهای مسیر */}
        <path
          d="M10 20 L11 10 L26 20 Z"
          fill="url(#gold-gradient)"
          stroke="#D9A441"
          strokeWidth="1.5"
        />
      </svg>

      {/* هیرو */}
      <div
        ref={heroRef}
        style={{
          position: "absolute",
          width: 60,
          height: 60,
        }}
      >
        <Lottie animationData={heroMan} loop />
      </div>
    </div>
  );
}
