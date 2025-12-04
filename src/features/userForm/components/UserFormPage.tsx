"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const PATH_D =
  "M10 200 C 150 150, 150 50, 300 80 S 450 180, 600 70";

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

      <svg ref={svgRef} width="650" height="250">
        <path
          ref={pathRef}
          d={PATH_D}
          fill="none"
          stroke="#bbb"
          strokeWidth="3"
        />

        <motion.circle
          r="12"
          fill="#ff5733"
          style={{
            cx,
            cy,
          }}
        />
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
