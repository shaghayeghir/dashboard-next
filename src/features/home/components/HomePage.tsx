"use client";

import HeroPath from "@/features/layout/HeroPath";
import HomeSlider from "@/features/home/components/HomeSlider";
import StoryBlock from "@/features/home/components/StoryBlock";
import fa from "@/locales/fa.json";
import { Box, Container, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box sx={{ bgcolor: "#FAECCF", minHeight: "100vh" }}>
        
        {/* فاصله بعد از هدر */}
        <Box sx={{ pt: 10 }}>
          
          {/* HERO PATH فقط همین صفحه */}
          <HeroPath />

          <Container maxWidth="lg">
            {/* SLIDER */}
            <HomeSlider />

            {/* STORY */}
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
      </Box>
    </>
  );
}
