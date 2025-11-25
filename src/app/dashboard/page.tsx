"use client";

import { useLoginForm } from "@/features/auth/login/hooks/useLoginForm";
import { Button } from "@mui/material";

export default function DashboardPage() {
  const { handleLogout } = useLoginForm();

  return (
    <div>
      <h2>داشبورد</h2>
      <Button
        variant="outlined"
        onClick={() => {
          handleLogout();
        }}
      >
        خروج از حساب
      </Button>
    </div>
  );
}
