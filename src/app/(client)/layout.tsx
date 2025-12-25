import ClientDrawer from "@/features/layout/ClientDrawer";
import ClientFooter from "@/features/layout/ClientFooter";
import ClientHeader from "@/features/layout/ClientHeader";
import { ClientLayoutProvider } from "@/features/layout/ClientLayoutContext";
import { Box } from "@mui/material";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayoutProvider>
      <Box sx={{ bgcolor: "#FAECCF", pt: 8, minHeight: "100vh" }}>
        <ClientHeader />
        <ClientDrawer />

        <main style={{ paddingTop: "80px" }}>{children}</main>

        <ClientFooter />
      </Box>
    </ClientLayoutProvider>
  );
}
