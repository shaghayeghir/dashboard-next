"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";
import { useState } from "react";

import heroAnimation from "@/assets/animations/Meditating-Panda.json";
import HeroHeaderPath from "@/features/landing/components/HeroPath";
import SliderKartopia from "@/features/landing/components/FancyCard";
import StoryBlock from "@/features/landing/components/StoryBlock";
import LogoGlow from "@/assets/logos/general-logo.png";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ---------------- HERO PATH پشت هدر (دست‌نخورده) ---------------- */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: {
            xs: "translateX(-50%) scale(0.35)",
            md: "translateX(-50%) scale(0.55)",
          },
          transformOrigin: "top center",
          zIndex: 11,
          pointerEvents: "none",
          width: 700,
          height: 200,
        }}
      >
        <HeroHeaderPath />
      </Box>

      {/* ---------------- HEADER فعلی (هیچ تغییری ندادم) ---------------- */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        sx={{
          background: "transparent",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            {/* لوگو */}
            <Box
              component="img"
              src={LogoGlow.src}
              alt="Kartopia Logo"
              sx={{
                height: 40,
                width: "auto",
                objectFit: "contain",
                filter: "drop-shadow(0 0 6px rgba(255,185,155,0.6))",
              }}
            />

            {/* تایپوگرافی - فقط در سایز md به بالا */}
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                color: "#013d25",
                fontFamily: "BTitr",
                lineHeight: 1,
                display: { xs: "none", md: "flex" }, // ← این باعث مخفی شدن در موبایل می‌شود
              }}
            >
              KARTOPIA
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Button href="/login" sx={{ mr: 2 }}>
              ورود
            </Button>

            <Button
              href="/register"
              variant="contained"
              sx={{
                bgcolor: "rgba(255,255,255,0.6)",
                color: "#013d25",
                backdropFilter: "blur(6px)",
              }}
            >
              ثبت‌نام
            </Button>

            <IconButton sx={{ ml: 1 }} onClick={() => setOpen(true)}>
              <MenuIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* ---------------- DRAWER ---------------- */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 3 }}>
          <Button fullWidth component={Link} href="/employer">
            خدمات کارفرما
          </Button>
          <Button fullWidth component={Link} href="/jobseeker">
            خدمات کارجو
          </Button>
          <Button fullWidth component={Link} href="/training">
            آموزش
          </Button>
          <Button fullWidth component={Link} href="/about">
            درباره کارتوپیا
          </Button>
          <Button fullWidth component={Link} href="/contact">
            ارتباط
          </Button>
        </Box>
      </Drawer>

      {/* ---------------- MAIN BODY ---------------- */}
      <Box sx={{ bgcolor: "#FAECCF", pt: 14, minHeight: "100vh" }}>
        <Container maxWidth="lg">
          {/* ---------------- HERO SECTION (نسخه جدید) ---------------- */}
          <Box
            display="flex"
            flexDirection={{ xs: "column-reverse", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            py={{ xs: 6, md: 10 }}
            gap={{ xs: 4, md: 6 }}
            sx={{
              position: "relative",
            }}
          >
            {/* --- LEFT TEXT SECTION --- */}
            <Box flex={1} sx={{ textAlign: { xs: "center", md: "right" } }}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
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
                  maxWidth: { xs: "95%", md: "90%" },
                  mx: { xs: "auto", md: 0 },
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
          <SliderKartopia />

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
