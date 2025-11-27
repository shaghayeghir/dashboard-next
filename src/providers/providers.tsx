"use client";


import { ThemeProvider as NextThemesProvider } from "next-themes";
import MUIThemeProvider from "@/providers/ThemeProvider";
import ReduxProvider from "@/providers/ReduxProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import AuthInitializer from "@/features/auth/login/components/AuthInitializer";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem={false} >
      <MUIThemeProvider>
        <ReduxProvider>
          <ReactQueryProvider>
            <AuthInitializer />
            {children}
          </ReactQueryProvider>
        </ReduxProvider>
      </MUIThemeProvider>
    </NextThemesProvider>
  );
}
