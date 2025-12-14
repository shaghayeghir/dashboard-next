"use client"
import { Box, Button, Drawer } from "@mui/material";
import Link from "next/link";
import { useClientLayout } from "./ClientLayoutContext";

export default function () {
  const { setDrawerOpen, drawerOpen } = useClientLayout();
  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <Box sx={{ width: 260, p: 3 }}>
        <Button fullWidth component={Link} href="/employer">
          خدمات کارفرما
        </Button>
        <Button fullWidth component={Link} href="/jobseeker">
          خدمات کارجو
        </Button>
        <Button fullWidth component={Link} href="/training">
          آموزش
        </Button>
        <Button fullWidth component={Link} href="/about">
          درباره کارتوپیا
        </Button>
        <Button fullWidth component={Link} href="/contact">
          ارتباط
        </Button>
      </Box>
    </Drawer>
  );
}
