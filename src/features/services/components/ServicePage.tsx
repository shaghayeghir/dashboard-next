"use client";

import fa from "@/locales/fa.json";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { containerVariants, itemVariants } from "./Animations";
import { HeroMini } from "./HeroMini";

const MotionBox = motion(Box);

export default function ServicePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        bgcolor: "#FAECCF",
        minHeight: "100vh",
        position: "relative",
        pt: "96px", // فاصله از هدر
      }}
    >
      {/* Mini Heroes */}
      <Box
        sx={{
          position: "absolute",
          top: 24,
          right: 24,
          display: "flex",
          gap: 1.5,
          zIndex: 2,
        }}
      >
        {fa.services.description.map((s, index) => (
          <HeroMini
            key={index}
            active={activeIndex === index}
            color={s.color}
          />
        ))}
      </Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={6}>
          {fa.services.title}
        </Typography>

        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {fa.services.description.map((item, index) => (
            <MotionBox
              key={index}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              whileHover={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
              sx={{
                p: 3,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Typography fontWeight="bold" mb={1}>
                {item.title}
              </Typography>
              <MotionBox
                key={index}
                variants={itemVariants}
                sx={{
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  bgcolor: item.color,
                  p: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Typography fontSize={14}>{item.text}</Typography>
              </MotionBox>
            </MotionBox>
          ))}
        </MotionBox>
      </Box>
    </Box>
  );
}
