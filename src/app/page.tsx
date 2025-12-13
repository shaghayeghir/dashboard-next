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

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import heroAnimation from "@/assets/animations/Meditating-Panda.json";
import HeroHeaderPath from "@/features/landing/components/HeroPath";
import { StoryScroll } from "@/features/landing/components/StoryTeling";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO PATH پشت هدر */}
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

      {/* HEADER شیشه‌ای واقعی */}
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
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#013d25" }}>
            KARTOPIA
          </Typography>

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

      {/* -------------------------------- DRAWER -------------------------------- */}
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

      {/* -------------------------------- MAIN BODY -------------------------------- */}
      <Box sx={{ bgcolor: "#faeccf", pt: 14, minHeight: "100vh" }}>
        <Container maxWidth="lg">
          {/* ---------------- HERO SECTION ---------------- */}
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            py={6}
            gap={4}
          >
            {/* LEFT TEXT */}
            <Box flex={1}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{
                  mb: 2,
                  color: "#013d25",
                  fontSize: { xs: "1.8rem", md: "2.8rem" },
                  lineHeight: 1.3,
                }}
              >
                به شهر فرصت‌ها خوش اومدی ✨
              </Typography>

              <Typography
                variant="h6"
                sx={{ mb: 4, color: "text.secondary", lineHeight: 1.7 }}
              >
                کارتـوپیا اینجاست تا همراهت باشه، مسیرت رو روشن کنه و بهترین شغل
                یا بهترین نیرو رو با یه تجربه فانتزی و ساده پیدا کنی.
              </Typography>

              <Button
                component={Link}
                href="/jobs"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#013d25",
                  color: "#fff",
                  px: 6,
                  py: 1.8,
                  borderRadius: 3,
                  fontSize: "1.1rem",
                  "&:hover": { bgcolor: "#022e1d" },
                }}
              >
                شروع سفر کاری
              </Button>
            </Box>

            {/* RIGHT ANIMATION */}
            <Box
              flex={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ maxWidth: 420 }}
            >
              <Lottie animationData={heroAnimation} loop />
            </Box>
          </Box>

          {/* ---------------- MINI SLIDER ---------------- */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 4500 }}
            style={{ paddingBottom: "40px" }}
          >
            <SwiperSlide>
              <SlideCard
                title="تیمت رو با کارتوپیا بساز"
                desc="استخدام سریع و دقیق برای کسب‌وکارهای حرفه‌ای"
              />
            </SwiperSlide>

            <SwiperSlide>
              <SlideCard
                title="بهترین فرصت‌ها منتظر تو هستن"
                desc="با چند کلیک به فرصت‌های واقعی وصل شو"
              />
            </SwiperSlide>

            <SwiperSlide>
              <SlideCard
                title="شهری که استعدادها دیده می‌شن"
                desc="کارتوپیا یعنی ارتباط، مسیر، و رشد"
              />
            </SwiperSlide>
          </Swiper>

          {/* ---------------- STORYTELLING ---------------- */}
          <Box py={10}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              mb={8}
              sx={{ color: "#013d25" }}
            >
              داستان قهرمان ما
            </Typography>

            {[
              "در شهری پر از شلوغی، آدم‌ها دنبال مسیر درست بودن…",
              "کارتوپیا متولد شد؛ راهنمایی که همیشه کنارته…",
              "قهرمان ما همراه تو قدم می‌زند و مسیرت را روشن می‌کند…",
              "بهت کمک می‌کنه دیده بشی و بدرخشی…",
              "و در نهایت، به قله موفقیت برسی ✨",
            ].map((t, i) => (
              <StoryScroll key={i} text={t} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

/* ------------- SMALL CARD USED IN SLIDER ------------- */
function SlideCard({ title, desc }: any) {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 4,
        p: 4,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={1}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {desc}
      </Typography>
    </Box>
  );
}
