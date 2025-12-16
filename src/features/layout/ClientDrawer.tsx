"use client";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useClientLayout } from "./ClientLayoutContext";
import fa from "@/locales/fa.json";
export default function DrawerMenu() {
  const { setDrawerOpen, drawerOpen } = useClientLayout();

  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: 280,
          borderRadius: "12px 0 0 12px",
          bgcolor: "#FAECCF",
          boxShadow: "-12px 0 40px rgba(0,0,0,0.15)",
          p: 2.5,
        },
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 2,
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1.1rem", fontWeight: "bold", color: "#013D25" }}
        >
          {fa.home.drawer.title}
        </Typography>

        <IconButton
          onClick={() => setDrawerOpen(false)}
          sx={{
            color: "#013D25",
            "&:hover": { bgcolor: "rgba(1,61,37,0.08)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* MENU ITEMS */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {fa.home.drawer.items.map((label, i) => (
          <Button
            key={i}
            component={Link}
            href={
              ["/employer", "/jobseeker", "/training", "/about", "/contact"][i]
            }
            onClick={() => setDrawerOpen(false)}
            sx={{
              justifyContent: "flex-start",
              color: "#013D25",
              fontSize: "0.95rem",
              fontWeight: 500,
              borderRadius: 2,
              py: 1.2,
              px: 1.5,
              background: "rgba(255,255,255,0.6)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
              textTransform: "none",
              "&:hover": {
                bgcolor: "rgba(1,61,37,0.1)",
                transform: "translateX(-4px)",
              },
              transition: "0.25s ease",
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Drawer>
  );
}
