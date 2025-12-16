"use client";

import { Box, Button, Typography } from "@mui/material";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fa from "@/locales/fa.json";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination"; // You might need this
import "swiper/css/autoplay"; // Double-check this is imported

const slides = [
  {
    i: 0,
    link: "/employer",
    theme: "employer",
    colors: ["#FAECCD", "#F3B99B"],
    img: "/slider/employer.png",
  },
  {
    i: 1,
    link: "/jobseeker",
    theme: "hero",
    colors: ["#013D25", "#046844"],
    img: "/slider/jobseeker.png",
  },
  {
    i: 2,
    link: "/about",
    theme: "about",
    colors: ["#013D25", "#FAECCD"],
    img: "/slider/about.png",
  },
];

export default function HomeSlider() {
  return (
    <Box sx={{ width: "100%", my: 8 }}>
      <Swiper
        modules={[Autoplay, Navigation, EffectCoverflow]}
        effect="coverflow"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false, // Add this
          stopOnLastSlide: false, // Add this
        }}
        speed={800} // Add this - important!
        centeredSlides={true}
        slidesPerView={1.1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 2.4,
          slideShadows: false,
        }}
        // Add these event handlers
        onSwiper={(swiper) => {
          console.log("Swiper initialized:", swiper);
          console.log("Autoplay running:", swiper.autoplay?.running);
        }}
        onAutoplayStart={(swiper) => {
          console.log("Autoplay started");
        }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                height: 440,
                borderRadius: { xs: "24px", md: "36px" },
                background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 15px 40px rgba(0,0,0,0.18)", // 🔥 Glow پریمیوم
                display: "flex",
                alignItems: "center",
                px: { xs: 3, md: 8 },
              }}
            >
              {/* 🔥 Gradient Overlay برای خوانایی بهتر */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.22), rgba(0,0,0,0))",
                  zIndex: 1,
                }}
              />

              {/* 🔥 تصویر با پارالاکس و سایه زیبا */}
              <Box
                sx={{
                  position: "absolute",
                  right: "-25px",
                  bottom: "-25px",
                  width: item.theme === "hero" ? 360 : 420,
                  height: item.theme === "hero" ? 360 : 420,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.22,
                  filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.25))",
                  transform: "translateY(0)",
                  animation: "float 5s ease-in-out infinite",
                  transition: "transform .6s ease",
                  "&:hover": {
                    transform: "scale(1.05)", // 🔥 پارالاکس نرم
                  },
                }}
              />

              {/* 🔥 Motion Line فقط روی Hero */}
              {item.theme === "hero" && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "-140px",
                    top: "50%",
                    width: 360,
                    height: 2,
                    background: "rgba(255,255,255,0.35)",
                    transform: "translateY(-50%) rotate(-32deg)",
                    animation: "moveLine 4s linear infinite",
                    zIndex: 3,
                  }}
                />
              )}

              {/* ---------------- TEXT AREA ---------------- */}
              <Box
                sx={{
                  maxWidth: 420,
                  zIndex: 5,
                  animation: "fadeSlideUp .8s ease both", // 🔥 انیمیشن متن
                }}
              >
                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.9rem", md: "2.4rem" },
                    fontWeight: "bold",
                    mb: 2,
                    lineHeight: 1.3,
                    color:
                      item.theme === "hero"
                        ? "#FAECCD"
                        : item.theme === "about"
                        ? "#FAECCD"
                        : "#013D25",
                    fontFamily: "BTitr",
                    textShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  }}
                >
                  {fa.home.slider[item.i].title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  sx={{
                    fontSize: { xs: "1rem", md: "1.15rem" },
                    opacity: 0.95,
                    mb: 3,
                    color:
                      item.theme === "hero"
                        ? "#FFFFFF"
                        : item.theme === "about"
                        ? "#fff"
                        : "#222",
                    fontFamily: "Vazir",
                    lineHeight: 1.8,
                  }}
                >
                  {fa.home.slider[item.i].desc}
                </Typography>

                {/* 🔥 GLASS BUTTON (Ultra Premium) */}
                <Button
                  href={item.link}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.3,
                    borderRadius: "14px",
                    backdropFilter: "blur(10px)",
                    background:
                      item.theme === "hero"
                        ? "rgba(255,255,255,0.28)"
                        : "rgba(255,255,255,0.22)",
                    border: "1px solid rgba(255,255,255,0.35)",
                    color:
                      item.theme === "hero"
                        ? "#013D25"
                        : item.theme === "about"
                        ? "#FAECCD"
                        : "#FAECCD",
                    fontWeight: "bold",
                    fontFamily: "Vazir",
                    transition: "0.3s ease",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    "&:hover": {
                      background: "rgba(255,255,255,0.38)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {fa.home.slider[item.i].button}
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- Animations --- */}
      <style>{`
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }

  @keyframes moveLine {
    0% { transform: translate(-60px, -50%) rotate(-35deg); opacity: .2; }
    50% { transform: translate(40px, -50%) rotate(-35deg); opacity: .4; }
    100% { transform: translate(-60px, -50%) rotate(-35deg); opacity: .2; }
  }

  /* 🔥 انیمیشن متن */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
`}</style>
    </Box>
  );
}
