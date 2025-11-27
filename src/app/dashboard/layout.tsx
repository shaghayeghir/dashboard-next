"use client";

import { useAuthInit } from "@/features/auth/login/hooks/useAuthInit";
import { Box, useTheme } from "@mui/material";
import DashboardHeader from "../../features/dashboard/components/DashboardHeader";
import DashboardSidebar from "../../features/dashboard/components/DashboardSidebar";
import { useState, useEffect } from "react";

import { useTheme as useNextTheme } from "next-themes";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  useAuthInit();
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }
  return (
    <Box
      display="flex"
      minHeight="100vh"
      bgcolor={theme.palette.mode === "dark" ? "#0F172A" : "#F4F5F7"}
    >
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Page */}
      <Box flex={1} display="flex" flexDirection="column">
        <DashboardHeader />
        <Box component="main" flex={1} p={3} sx={{ overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
