import { PATH_D } from "../../constants/path";

// ProgressPath Component - Fixed TypeScript
interface ProgressPathProps {
  pathRef: React.RefObject<SVGPathElement | null>;
}

export const ProgressPath = ({ pathRef }: ProgressPathProps) => (
  <path
    ref={pathRef}
    d={PATH_D}
    fill="none"
    stroke="#bbb"
    strokeWidth="3"
    markerEnd="url(#arrow)"
  />
);