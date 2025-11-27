"use client";

import {
  Card as MUICard,
  CardContent,
  CardProps,
  Theme,
  Typography,
} from "@mui/material";
import { SxProps } from "@mui/system";

export default function Card({
  title,
  children,
  sx = {},
  ...props
}: CardProps & { title?: string }) {
  const hasHoverEffect = !!props.onClick;

  return (
    <MUICard
      {...props}
      sx={(theme: Theme) => {
        const baseStyles: SxProps<Theme> = {
          borderRadius: 3,
          padding: 1,
          transition: "all 0.25s ease",
          cursor: hasHoverEffect ? "pointer" : "default",
          ...(theme.palette.mode === "dark"
            ? {
                backgroundColor: "#1E1E2E",
                boxShadow: "0 4px 15px rgba(0,0,0,0.7)",
                color: "#F1F5F9",
              }
            : {
                backgroundColor: "#FFFFFF",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }),
        };

        if (hasHoverEffect) {
          (baseStyles as any)["&:hover"] = {
            transform: "translateY(-3px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 6px 20px rgba(0,0,0,0.8)"
                : "0 6px 20px rgba(0,0,0,0.15)",
          };
        }

        if (typeof sx === "function") return { ...baseStyles, ...sx(theme) };
        if (Array.isArray(sx)) return { ...baseStyles, ...(Object.assign({}, ...sx)) };
        return { ...baseStyles, ...sx };
      }}
    >
      <CardContent>
        {title && (
          <Typography variant="h6" fontWeight="bold" mb={2}>
            {title}
          </Typography>
        )}
        {children}
      </CardContent>
    </MUICard>
  );
}
