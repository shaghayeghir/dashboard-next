"use client";

import { Box, Button, Typography } from "@mui/material";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fa from "@/locales/fa.json";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

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
        loop
        navigation
        autoplay={{ delay: 4500 }}
        centeredSlides={true}
        slidesPerView={1.1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 220,
          modifier: 2.4,
          slideShadows: false,
        }}
        style={{
          width: "100%",
          height: 440,
          borderRadius: 32,
        }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <Box
              sx={{
                width: "100%",
                height: 440,
                borderRadius: "32px",
                background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[1]})`,
                display: "flex",
                alignItems: "center",
                px: { xs: 4, md: 8 },
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* --- HERO IMAGE (varies per theme) --- */}
              <Box
                sx={{
                  position: "absolute",
                  right: "-40px",
                  bottom: "-40px",
                  width: item.theme === "hero" ? 380 : 420,
                  height: item.theme === "hero" ? 380 : 420,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  opacity: item.theme === "hero" ? 0.28 : 0.18,
                  animation: "float 6s ease-in-out infinite",
                }}
              />

              {/* --- Motion Lines: ONLY on HERO theme --- */}
              {item.theme === "hero" && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "-120px",
                    top: "50%",
                    width: 350,
                    height: 2,
                    background: "rgba(255,255,255,0.4)",
                    transform: "translateY(-50%) rotate(-35deg)",
                    animation: "moveLine 4s linear infinite",
                  }}
                />
              )}

              {/* --- TEXT AREA --- */}
              <Box sx={{ maxWidth: 420, zIndex: 3 }}>
                <Typography
                  sx={{
                    fontSize: "2.3rem",
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
                  }}
                >
                  {fa.home.slider[item.i].title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "1.15rem",
                    opacity: 0.9,
                    mb: 3,
                    color:
                      item.theme === "hero"
                        ? "#FFFFFF"
                        : item.theme === "about"
                        ? "#fff"
                        : "#333",
                    fontFamily: "Vazir",
                  }}
                >
                  {fa.home.slider[item.i].desc}
                </Typography>

                <Button
                  href={item.link}
                  variant="contained"
                  sx={{
                    bgcolor:
                      item.theme === "hero"
                        ? "#FAECCD"
                        : item.theme === "about"
                        ? "#046844"
                        : "#013D25",
                    color:
                      item.theme === "hero"
                        ? "#013D25"
                        : item.theme === "about"
                        ? "#FAECCD"
                        : "#FAECCD",
                    px: 4,
                    py: 1.4,
                    borderRadius: "14px",
                    fontFamily: "Vazir",
                    "&:hover": {
                      opacity: 0.9,
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
      `}</style>
    </Box>
  );
}
