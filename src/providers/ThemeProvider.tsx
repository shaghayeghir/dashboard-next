"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { useTheme as useNextTheme } from "next-themes";
import { useMemo } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export default function MUIThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ایجاد RTL استایل
  const cacheRtl = createCache({
    key: "mui-rtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  // دریافت حالت نهایی تم از next-themes
  const { resolvedTheme } = useNextTheme();

  const muiTheme = useMemo(
    () =>
      createTheme({
        direction: "rtl",
        palette: {
          mode: resolvedTheme === "dark" ? "dark" : "light",
          primary: { main: "#6366F1" },
          secondary: { main: "#8B5CF6" },
          background: {
            default: resolvedTheme === "dark" ? "#0F1115" : "#f4f5f7",
            paper: resolvedTheme === "dark" ? "#1C1F26" : "#ffffff",
          },
          text: {
            primary: resolvedTheme === "dark" ? "#F3F4F6" : "#111827",
            secondary: resolvedTheme === "dark" ? "#9CA3AF" : "#4B5563",
          },
        },
        typography: {
          fontFamily: "IRANSans, Vazir, sans-serif",
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [resolvedTheme]
  );

  return (
    <CacheProvider value={cacheRtl}>
      <CssBaseline />
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </CacheProvider>
  );
}
