"use client";

import { useLoginForm } from "@/features/auth/login/hooks/useLoginForm";
import { RootState } from "@/store";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { useTheme as useNextThemes } from "next-themes";
import { useSelector } from "react-redux";

export default function DashboardHeader() {
  const muiTheme = useTheme();
  const { theme, setTheme } = useNextThemes();
  const { user } = useSelector((state: RootState) => state.auth);
  const { handleLogout, isPending } = useLoginForm();
  const queryClient = useQueryClient();

  return (
    <Box
      px={3}
      py={1.5}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        bgcolor: muiTheme.palette.mode === "dark" ? "#1E293B" : "white",
        color: muiTheme.palette.mode === "dark" ? "#F8FAFC" : "black",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h6">سلام، {user?.email} 👋</Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <IconButton
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {muiTheme.palette.mode === "dark" ? (
            <WbSunnyIcon />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>

        <Button
          variant="contained"
          color="error"
          startIcon={!isPending && <LogoutIcon />}
          onClick={() => handleLogout()}
          disabled={isPending}
        >
          {isPending ? <CircularProgress size={20} /> : "خروج"}
        </Button>
      </Box>
    </Box>
  );
}
