import { motion, MotionValue } from "framer-motion";
// Character Component - Fixed TypeScript
interface CharacterProps {
  cx: MotionValue<number>;
  cy: MotionValue<number>;
}
export const Character = ({ cx, cy }: CharacterProps) => (
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
);
