import "@/app/globals.css";
import HeroPath from "@/features/layout/HeroPath";
import ClientHeader from "@/features/layout/ClientHeader";
import ClientDrawer from "@/features/layout/ClientDrawer";
import { Box } from "@mui/material";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ bgcolor: "#FAECCF", pt: 14, minHeight: "100vh" }}>
      {/* هدر + هیروپث + دراور */}
      <HeroPath />
      <ClientHeader />
      <ClientDrawer />

      {/* محتوای صفحات */}
      <main style={{ paddingTop: "80px" }}>{children}</main>
    </Box>
  );
}
