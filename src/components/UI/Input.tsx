"use client";

import { TextField, TextFieldProps } from "@mui/material";

export default function Input({ ...props }: TextFieldProps) {
  return (
    <TextField
      {...props}
      fullWidth
      size="small"
      sx={(theme) => ({
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          ...(theme.palette.mode === "dark"
            ? {
                backgroundColor: "rgba(255,255,255,0.05)",
              }
            : {
                backgroundColor: "rgba(0,0,0,0.02)",
              }),
        },
      })}
    />
  );
}
