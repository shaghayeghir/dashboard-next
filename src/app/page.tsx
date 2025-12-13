"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Lottie from "lottie-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Animation
import heroAnimation from "@/assets/animations/Meditating-Panda.json";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { StoryScroll } from "@/features/landing/components/StoryTeling";
import HeroPath from "@/features/landing/components/HeroPath";
// ------------------------------ PROPS TYPES
type HeroSlideProps = {
  title: string;
  desc: string;
  btn: string;
  link: string;
};

// ------------------------------ COMPONENT
const HeroSlide = ({ title, desc, btn, link }: HeroSlideProps) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={{ xs: "column", md: "row" }}
    gap={6}
    my={6}
    px={{ xs: 1, md: 4 }}
  >
    <Box flex={1}>
      <Typography variant="h3" fontWeight="bold" mb={2}>
        {title}
      </Typography>

      <Typography variant="h6" mb={3} color="text.secondary">
        {desc}
      </Typography>

      <Button
        component={Link}
        href={link}
        variant="contained"
        sx={{
          bgcolor: "#013d25",
          borderRadius: 3,
          "&:hover": { bgcolor: "#022e1d" },
        }}
      >
        {btn}
      </Button>
    </Box>

    <Box
      flex={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: 400 }}
    >
      <Lottie animationData={heroAnimation} loop />
    </Box>
  </Box>
);

// --------------------------------------------------------------
export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: "#faeccf", minHeight: "100vh" }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Header */}
          <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={999}
            bgcolor="#faeccf"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            py={2}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#013d25" }}
            >
              KARTOPIA
            </Typography>
            <HeroPath />
            <Box display="flex" alignItems="center">
              <Button component={Link} href="/login" sx={{ mr: 2 }}>
                ورود
              </Button>
              <Button
                component={Link}
                href="/register"
                variant="contained"
                sx={{
                  bgcolor: "#F3b99b",
                  color: "#013d25",
                  "&:hover": { bgcolor: "#e8a988" },
                }}
              >
                ثبت نام
              </Button>

              <IconButton sx={{ ml: 2 }} onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Drawer */}
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

          {/* ---------  HERO SWIPER ---------- */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 5000 }}
            style={{ paddingBottom: "60px", padding: 20 }}
          >
            <SwiperSlide>
              <HeroSlide
                title="تیمت رو با کارتوپیا تکمیل کن"
                desc="استخدام بهترین نیروها، دقیقاً بر اساس نیاز شما"
                btn="درخواست نیرو"
                link="/hire"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HeroSlide
                title="کار از ما، تو فقط بیا ✨"
                desc="جات تو بهترین تیم‌ها خالیه"
                btn="جستجوی فرصت"
                link="/jobs"
              />
            </SwiperSlide>

            <SwiperSlide>
              <HeroSlide
                title="کارتوپیا یعنی اتصال استعدادها"
                desc="شهری برای فرصت‌های درست"
                btn="درباره ما"
                link="/about"
              />
            </SwiperSlide>
          </Swiper>

          {/* --- Storytelling --- */}
          <Box py={8}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              mb={8}
            >
              داستان کارتوپیا
            </Typography>

            {[
              "در دل شهرهای شلوغ، تیم‌ها نیرو می‌خواستند...",
              "تا اینکه کارتوپیا متولد شد — نه فقط یک پلتفرم",
              "قهرمانی که میان آدم‌ها قدم می‌زند…",
              "دست روی شانه نیروهای خسته می‌گذارد…",
              "کمک می‌کند تیم مطمئن ساخته شود…",
              "شهری که هرکس در جای درست بدرخشد",
            ].map((t, i) => (
              <StoryScroll key={i} text={t} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
