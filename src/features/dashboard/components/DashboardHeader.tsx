"use client";

import {
  Box,
  IconButton,
  Typography,
  CircularProgress,
  Button,
  useTheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import LogoutIcon from "@mui/icons-material/Logout";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useLoginForm } from "@/features/auth/login/hooks/useLoginForm";
import { useQueryClient } from "@tanstack/react-query";
import { useTheme as useNextThemes } from "next-themes";

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
        <IconButton onClick={() => queryClient.invalidateQueries()}>
          <RefreshIcon />
        </IconButton>

        <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {muiTheme.palette.mode === "dark" ? <WbSunnyIcon /> : <DarkModeIcon />}
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
