"use client";

import { Box, Typography } from "@mui/material";
import { motion, Variant, Variants } from "framer-motion";
const MotionBox = motion(Box);

const services = [
  { title: "سوپر قهرمان", text: "مدیریت کامل منابع انسانی..." },
  { title: "قهرمان", text: "افسانه‌ای کارتوبیا..." },
  { title: "قهرمان جونیور", text: "ویژه نیروهای تازه‌کار..." },
  { title: "خودت تنها", text: "استخدام تست کن..." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // یکی یکی
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    x: 300,
    y: -300,
    opacity: 0,
    rotate: 90,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1,
    },
  },
};

export default function ServicePage() {
  return (
    <Box
      sx={{
        bgcolor: "#FAECCF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 6,
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={6}>
        خدمات کارتوبیا
      </Typography>

      <Box
        component={motion.div}
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
        {services.map((item, index) => (
          <MotionBox
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            sx={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              bgcolor: "#F6BFA6",
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
            <Typography fontSize={14}>{item.text}</Typography>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
