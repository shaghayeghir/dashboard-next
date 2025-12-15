"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";
import heroAnimation from "@/assets/animations/Meditating-Panda.json";
import HomeSlider from "@/features/home/components/HomeSlider";
import StoryBlock from "@/features/home/components/StoryBlock";

export default function HomePage() {
  return (
    <>
      <Box sx={{ bgcolor: "#FAECCF", pt: 1, minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            py={{ xs: 1, md: 10 }}
            gap={{ xs: 2, md: 2 }}
            sx={{
              position: "relative",
              textAlign: { xs: "center" }, // مرکز در موبایل
            }}
          >
            {/* --- LEFT TEXT SECTION --- */}
            <Box
              flex={1}
              sx={{
                textAlign: { xs: "center", md: "right" }, // مرکز در موبایل
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  textAlign: { xs: "center" },
                  mb: 3,
                  fontFamily: "BTitr",
                  fontSize: { xs: "1.8rem", md: "2.9rem" },
                  lineHeight: 1.3,
                  background: "linear-gradient(90deg, #013D25, #046844)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 18px rgba(1, 61, 37, 0.15)",
                }}
              >
                به شهر فرصت‌ها خوش اومدی ✨
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: "#2e2e2e",
                  lineHeight: 1.9,
                  opacity: 0.85,
                  fontFamily: "Vazir",

                  // مهم‌ترین بخش: وسط چین فقط در موبایل
                  textAlign: { xs: "center" },

                  // متن محدود اما گردش خوب
                  maxWidth: { xs: "100%", md: "90%" },

                  // برای مرکز قرار گرفتن در موبایل
                  mx: { xs: "auto" },
                }}
              >
                کارتــوپیا اینجاست تا مثل یه راهنمای واقعی، مسیر کاری‌تو روشن
                کنه، بهترین فرصت‌ها رو نشونت بده و همراهت باشه تا بدرخشی.
              </Typography>
              <Button
                component={Link}
                href="/jobs"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#013d25",
                  color: "#fff",
                  px: { xs: 5, md: 6 },
                  py: { xs: 1.5, md: 1.8 },
                  borderRadius: 3,
                  fontSize: "1.05rem",
                  boxShadow: "0 8px 25px rgba(1, 61, 37, 0.25)",
                  transition: "0.25s",

                  mx: { xs: "auto", md: 0 }, // دکمه وسط چین موبایل
                  display: { xs: "block", md: "inline-block" },

                  "&:hover": {
                    bgcolor: "#022e1d",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                شروع سفر کاری
              </Button>
            </Box>

            {/* --- RIGHT ANIMATION SECTION --- */}
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{
                maxWidth: 420,
                animation: "floatHero 5s ease-in-out infinite",
              }}
            >
              <Lottie animationData={heroAnimation} loop />
            </Box>

            {/* Floating animation keyframes */}
            <style>
              {`
                 @keyframes floatHero {
                 0% { transform: translateY(0px); }
                50% { transform: translateY(-12px); }
                100% { transform: translateY(0px); }
             }
           `}
            </style>
          </Box>

          {/* ---------------- SLIDER کارت‌اوپیا ---------------- */}
          <HomeSlider />

          {/* ---------------- STORYTELLING واقعی (۶ مرحله) ---------------- */}
          <Box py={12}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              mb={8}
              sx={{ color: "#013d25" }}
            >
              داستان سفر کارتــوپیا
            </Typography>

            {[
              "در دل شهر شلوغ و بی‌قرار، جایی که رستوران‌ها دنبال نیرو بودن و نیروها دنبال جای درست… هیچ‌کس مسیر واقعی خودش را پیدا نمی‌کرد.",
              "تا اینکه روزی نسیمی تازه وزید؛ از دل همین آشفتگی، کارتوپیا متولد شد — نه فقط یک پلتفرم استخدام، بلکه یک قهرمان خاموش.",
              "قهرمانی که میان آدم‌ها قدم می‌زد، استعدادها را می‌دید، و می‌دانست هر انسان باید جایی باشد که بدرخشد.",
              "او شبانه‌روز در کافه‌ها و رستوران‌ها می‌چرخید، دست روی شانه نیروهای خسته می‌گذاشت و آن‌ها را به جای درستشان می‌رساند.",
              "به رستوراندارها کمک می‌کرد تیمی بسازند که مثل یک ارکستر هماهنگ باشد — هرکس در جای خودش، هرکس با ریتم خودش.",
              "و این‌گونه، شهر آرام‌آرام تغییر کرد… تیم‌ها کامل شدند، استعدادها دیده شدند و هرکس سهم واقعی‌اش از بازار کار را پیدا کرد.",
            ].map((t, i) => (
              <StoryBlock key={i} index={i + 1} text={t} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
