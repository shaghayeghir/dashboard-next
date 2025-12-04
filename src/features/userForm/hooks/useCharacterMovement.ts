// useCharacterMovement.ts
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { TOTAL_STEPS } from "../constants/path";

export const useCharacterMovement = () => {
  const progress = useMotionValue(0);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const [step, setStep] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

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
  }, [progress, pathRef]);
  // Animation when step changes
  useEffect(() => {
    const target = step / TOTAL_STEPS;
    animate(progress, target, {
      duration: 0.8,
      ease: "easeInOut",
    });
  }, [step, progress]);
  return { progress, cx, cy, setStep, step, svgRef, pathRef };
};
