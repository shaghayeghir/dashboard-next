"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export function HeroMini({ active, color }: { active: boolean; color: string }) {
  return (
    <MotionBox
      animate={{ rotateY: active ? 0 : 180 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        bgcolor: color,
        transformStyle: "preserve-3d",
      }}
    />
  );
}