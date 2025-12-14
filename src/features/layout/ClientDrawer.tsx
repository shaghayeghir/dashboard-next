import { Drawer, Box, Button } from "@mui/material";
import Link from "next/link";

export default function () {
  return (
    <Drawer
      anchor="right"
      // open={open} onClose={() => setOpen(false)}
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
