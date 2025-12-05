"use client";

import Link from "next/link";
import { Button, Container, Typography, Box } from "@mui/material";
import Lottie from "lottie-react";
import heroAnimation from "@/assets/animations/Meditating-Panda.json"; // مسیر درست فایل کدت

export default function HomePage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* 🔝 هدر */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mb={6}
      >
        <Typography variant="h5" fontWeight="bold">
        اتوپیا
        </Typography>

        <Box>
          <Button component={Link} href="/login" variant="contained">
            ورود / ثبت نام
          </Button>
        </Box>
      </Box>

      {/* 🎬 Hero Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        flexDirection={{ xs: "column", md: "row" }}
        gap={4}
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* متن سمت چپ */}
        <Box flex={1}>
          <Typography variant="h3" fontWeight="bold" mb={2}>
            هرچی میخوای، اینجاست 👋
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            یک توضیح کوتاه درباره سرویس شما... سریع، ساده و حرفه‌ای 👌
          </Typography>

          <Button
            component={Link}
            href="/login"
            variant="contained"
            size="large"
            sx={{ px: 6, py: 1.5, fontSize: "1.1rem", borderRadius: 3 }}
          >
            شروع کنید
          </Button>
        </Box>

        {/* 🎞 انیمیشن سمت راست */}
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", maxWidth: 400 }}
        >
          <Lottie animationData={heroAnimation} loop />
        </Box>
      </Box>
    </Container>
  );
}
