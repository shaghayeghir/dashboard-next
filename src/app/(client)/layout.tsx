import ClientDrawer from "@/features/layout/ClientDrawer";
import ClientHeader from "@/features/layout/ClientHeader";
import { ClientLayoutProvider } from "@/features/layout/ClientLayoutContext";
import HeroPath from "@/features/layout/HeroPath";
import { Box } from "@mui/material";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayoutProvider>
      <Box sx={{ bgcolor: "#FAECCF", pt: 14, minHeight: "100vh" }}>
        {/* هدر + هیروپث + دراور */}
        <HeroPath />
        <ClientHeader />
        <ClientDrawer />

        {/* محتوای صفحات */}
        <main style={{ paddingTop: "80px" }}>{children}</main>
      </Box>
    </ClientLayoutProvider>
  );
}
