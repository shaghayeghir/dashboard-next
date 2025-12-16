"use client";

import heroAnimation from "@/assets/animations/Meditating-Panda.json";
import HomeSlider from "@/features/home/components/HomeSlider";
import StoryBlock from "@/features/home/components/StoryBlock";
import fa from "@/locales/fa.json";
import { Box, Button, Container, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Box sx={{ bgcolor: "#FAECCF", pt: 1, minHeight: "100vh" }}>
        <Container maxWidth="lg">
          {/* ---------------- SLIDER کارت‌اوپیا ---------------- */}
          <HomeSlider />

          {/* ---------------- STORYTELLING (۶ مرحله) ---------------- */}
          <Box py={12}>
            <Typography
              variant="h4"
              fontWeight="bold"
              textAlign="center"
              mb={8}
              sx={{ color: "#013d25" }}
            >
              {fa.home.storyTitle}
            </Typography>

            {fa.home.story.map((t, i) => (
              <StoryBlock key={i} index={i + 1} text={t} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}
