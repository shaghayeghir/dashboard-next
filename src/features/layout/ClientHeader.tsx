"use client";
import LogoGlow from "@/assets/logos/general-logo.png";
import fa from "@/locales/fa.json";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useClientLayout } from "./ClientLayoutContext";
export default function ClientHeader() {
  const { setDrawerOpen } = useClientLayout();
  return (
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
              display: { xs: "none", md: "flex" },
            }}
          >
            {fa.home.header.logo}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <Button href="/login" sx={{ mr: 2 }}>
            {fa.home.header.signin}
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
            {fa.home.header.signup}
          </Button>

          <IconButton sx={{ ml: 1 }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ fontSize: 26 }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
