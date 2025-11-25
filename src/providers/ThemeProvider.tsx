"use client";

import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "@/theme";


export default function MUIThemeProvider({ children }: { children: React.ReactNode }) {
  // تنظیم Emotion برای پشتیبانی از RTL
  const cacheRtl = createCache({
    key: "mui-rtl",
    // stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
