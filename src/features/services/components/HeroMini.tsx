"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export function HeroMini() {
  return (
    <MotionBox
      initial={{ rotateY: 180 }}
      whileHover={{ rotateY: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
      }}
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        bgcolor: "#333",
        cursor: "pointer",
        transformStyle: "preserve-3d",
      }}
    />
  );
}
