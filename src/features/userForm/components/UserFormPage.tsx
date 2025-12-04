"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const PATH_D = "M10 100 C 150 150, 150 50, 300 80 S 450 180, 600 70";

export default function FormProgressCharacter() {
  const [step, setStep] = useState(0);
  const totalSteps = 4;

  const progress = useMotionValue(0);

  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const cx = useMotionValue(0);
  const cy = useMotionValue(0);

  // حرکت کاراکتر روی مسیر
  useEffect(() => {
    const updatePosition = () => {
      if (!pathRef.current) return;

      const length = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(progress.get() * length);

      cx.set(point.x);
      cy.set(point.y);
    };

    const unsub = progress.on("change", updatePosition);
    updatePosition();

    return () => unsub();
  }, [progress]);

  // انیمیشن همزمان با فرم
  useEffect(() => {
    const target = step / totalSteps;
    animate(progress, target, {
      duration: 0.8,
      ease: "easeInOut",
    });
  }, [step]);

  return (
    <div className="w-full flex flex-col items-center p-10 gap-10">
      <svg ref={svgRef} width="650" height="250" >
        
  <defs>
    <marker
      id="arrow"
      markerWidth="10"
      markerHeight="10"
      refX="5"
      refY="5"
      orient="auto"
      markerUnits="strokeWidth"
    >
      <path d="M0,0 L10,5 L0,10 z" fill="#999" />
    </marker>
  </defs>
        <path
  ref={pathRef}
  d={PATH_D}
  fill="none"
  stroke="#bbb"
  strokeWidth="3"
  markerEnd="url(#arrow)"
/>

        <motion.g style={{ translateX: cx, translateY: cy }}>
          <text
            x={0}
            y={0}
            fontSize="34"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            🧍‍♂️
          </text>
        </motion.g>
      </svg>

      {/* فرم */}
      <div className="w-80 flex flex-col gap-4 p-4 rounded-xl shadow bg-white">
        {step >= 0 && (
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="نام"
            onChange={() => setStep(1)}
          />
        )}

        {step >= 1 && (
          <input
            type="email"
            className="border p-2 rounded"
            placeholder="ایمیل"
            onChange={() => setStep(2)}
          />
        )}

        {step >= 2 && (
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="شماره تماس"
            onChange={() => setStep(3)}
          />
        )}

        {step >= 3 && (
          <textarea
            className="border p-2 rounded"
            placeholder="توضیحات"
            onChange={() => setStep(4)}
          />
        )}
      </div>
    </div>
  );
}
