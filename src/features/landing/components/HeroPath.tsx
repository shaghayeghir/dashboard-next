"use client";

import { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import heroMan from "@/assets/animations/man.json";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function HeroHeaderPath() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      motionPath: {
        path: "#header-path",
        align: "#header-path",
        autoRotate: false,
        alignOrigin: [0.5, 0.5],
      },
      scrollTrigger: {
        trigger: "body",
        start: "0",
        end: "80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "5px",
        left: "25%",
        width: "400px",      // ⬅️ قبلاً 300 بود
        height: "60px",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <svg width="400" height="60">  {/* ⬅️ قبلاً 300 بود */}
        <path
          id="header-path"
          // ⬅️ فقط این خط عوض شده: X ها جلوتر رفتن، مسیر بلندتر شده
          d="M0 50 C90 30 180 25 320 15"
          stroke="#013d25"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      <div
        ref={heroRef}
        style={{
          position: "absolute",
          width: 55,
          height: 55,
        }}
      >
        <Lottie animationData={heroMan} loop />
      </div>
    </div>
  );
}
