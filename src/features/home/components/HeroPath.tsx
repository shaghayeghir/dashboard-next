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
    top: "10px",
    left: 0,
    width: "100%",
    pointerEvents: "none",
    zIndex: 100,
  }}
>
  <svg
    viewBox="0 0 950 240"
    width="100%"
    height="auto"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9E29C" />
        <stop offset="50%" stopColor="#F5C766" />
        <stop offset="100%" stopColor="#D9A441" />
      </linearGradient>

      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* مسیر صعودی ریسپانسیو */}
    <path
      id="hero-path"
      d="
        M10 180
        C80 140, 160 150, 240 170
        S320 200, 400 150
        S480 90, 560 130
        S640 180, 720 110
        S800 40, 880 60
      "
      stroke="url(#gold-gradient)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      filter="url(#glow)"
    />

    {/* فلش نموداری طبیعی */}
    <path
      d="M880 75 L900 70 L889 50 Z"
      fill="url(#gold-gradient)"
      stroke="#D9A441"
      strokeWidth="1"
    />
  </svg>

  {/* کاراکتر */}
  <div
    ref={heroRef}
    style={{
      position: "absolute",
      width: 45,          // کوچیک‌شده برای موبایل
      height: 45,
      top: 0,            // همیشه توسط motionPath کنترل می‌شود
      left: 0,
    }}
  >
    <Lottie animationData={heroMan} loop />
  </div>
</div>

  );
}
