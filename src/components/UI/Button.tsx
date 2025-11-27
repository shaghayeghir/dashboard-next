"use client";

import { Button as MUIButton, ButtonProps } from "@mui/material";

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <MUIButton
      {...props}
      sx={(theme) => ({
        borderRadius: 3,
        textTransform: "none",
        px: 2,
        py: 1,
        fontWeight: 600,
        ...(theme.palette.mode === "dark"
          ? { boxShadow: "0 2px 10px rgba(255,255,255,0.1)" }
          : { boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }),
        "&:hover": {
          transform: "translateY(-2px)",
        },
        transition: "0.2s",
      })}
    >
      {children}
    </MUIButton>
  );
}
