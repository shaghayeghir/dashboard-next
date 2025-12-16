"use client";

import { useState } from "react";
import LogoGlow from "@/assets/logos/general-logo.png";
import fa from "@/locales/fa.json";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
  Modal,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useClientLayout } from "./ClientLayoutContext";

export default function ClientHeader() {
  const { setDrawerOpen } = useClientLayout();
  const [openRoleModal, setOpenRoleModal] = useState(false); // پاپ‌آپ نقش
  const router = useRouter();

  return (
    <>
      {/* HEADER */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={10}
        sx={{
          mx: 4,
          background: "transparent",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.25)",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box display="flex" alignItems="center" gap={1.5}>
            <IconButton sx={{ ml: 1 }} onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ fontSize: 26 }} />
            </IconButton>
          </Box>

          <Box display="flex" alignItems="center">
            <Button onClick={() => setOpenRoleModal(true)} sx={{ mr: 2 }}>
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
          </Box>
        </Container>
      </Box>

      {/* ROLE SELECT MODAL */}
      <Modal
        open={openRoleModal}
        onClose={() => setOpenRoleModal(false)}
        sx={{ backdropFilter: "blur(3px)" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            borderRadius: 3,
            boxShadow: 24,
            width: "90%",
            maxWidth: 420,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" mb={3}>
            ورود به حساب
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            لطفاً نقش خود را انتخاب کنید
          </Typography>

          <Box display="flex" justifyContent="space-around" mt={2}>
            {/* کارفرما */}
            <Box
              onClick={() => router.push("/login/employer")}
              sx={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                bgcolor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: 18,
                transition: "0.25s",
                "&:hover": {
                  bgcolor: "#eee",
                  transform: "scale(1.08)",
                },
              }}
            >
              کارفرما
            </Box>

            {/* کارجو */}
            <Box
              onClick={() => router.push("/login/employee")}
              sx={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                bgcolor: "#f5f5f5",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                fontSize: 18,
                transition: "0.25s",
                "&:hover": {
                  bgcolor: "#eee",
                  transform: "scale(1.08)",
                },
              }}
            >
              کارجو
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
