"use client";

import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

/* ------------------ Data ------------------ */

const services = [
  {
    title: "خودت تنها",
    text: `
یه اگهی استخدام ثبت کن، این بار رایگان!!
بازم کنار شماییم.

بسته سرویس ویژه‌ای برای نیروهای سطح ۲ و ۳
    `,
    color: "#F4A261",
  },
  {
    title: "قهرمان جونیور",
    text: `
قهرمان کوچولوی ما توی مرحله اول همراه شماست!
شامل خدمات مشاوره منابع انسانی، استخدام
و حقوق و دستمزد برای کسب‌وکارهای کوچک
و استارتاپ‌ها.

مناسب مدیران فروش، مدیران منابع انسانی،
فروشگاه‌ها و استارتاپ‌ها.


    `,
    color: "#477d92ff",
  },
  {
    title: "قهرمان",
    text: `
قهرمان افسانه‌ای کارتوبیا دست به کار میشه
و برای شما نیروها رو به‌صرفه می‌کنه!

همچنین قانون کار و حقوق و دستمزد رو
دقیق محاسبه و راحت می‌کنه.
    `,
    color: "#2A9D8F",
  },
  {
    title: "سوپر قهرمان",
    text: `
تمام مسئولیت‌های منابع انسانی رو به کارتوبیا بسپار!
از فرایند جذب نیرو، استخدام و حقوق و دستمزد گرفته
تا امور اداری، بیمه‌ها و قراردادها.

ما همه‌چیز رو هم انجام می‌دیم:
ارزیابی دوره‌ای، آموزش نیروها و برنامه‌ریزی
برای تمام آموزش‌های لازم در این پکیج مخصوص.
    `,
    color: "#E76F51",
  },
];

/* ------------------ Animations ------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
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

/* ------------------ Page ------------------ */

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
        {services.map((s, index) => (
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
          خدمات کارتوبیا
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
          {services.map((item, index) => (
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

/* ------------------ Mini Hero ------------------ */

function HeroMini({ active, color }: { active: boolean; color: string }) {
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
