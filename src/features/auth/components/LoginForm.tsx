"use client";

import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import MonkeyAnimation from "@/components/MonkeyAnimation";

export default function LoginForm() {
  const { email, setEmail, showPass, pass, setPass, setShowPass, handleLogin } =
    useLoginForm();

  const [focus, setFocus] = useState<"none" | "email" | "password">("none");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 👈 موبایل تشخیص میده

  return (
    <div>
      {/* 🔹 انیمیشن با سایز متناسب موبایل */}
      <MonkeyAnimation state={focus} size={isMobile ? 180 : 260} />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: isMobile ? 2 : 4, // 👈 ریسپانسیو
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            sx={{
              p: isMobile ? 3 : 4,
              width: isMobile ? "90vw" : 380, // 👈 عرض ریسپانسیو
              borderRadius: 4,
            }}
            elevation={4}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"} // 👈 فونت کوچک‌تر موبایل
              fontWeight="bold"
              mb={isMobile ? 2 : 3}
            >
              Log in
            </Typography>

            {/* Email */}
            <TextField
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("none")}
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              onFocus={() => setFocus("password")}
              onBlur={() => setFocus("none")}
              fullWidth
              size="small"
              label="Password"
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              sx={{ mb: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography
              variant="body2"
              color="primary"
              sx={{
                cursor: "pointer",
                mb: 3,
                textAlign: "right",
                fontSize: isMobile ? "0.75rem" : "0.85rem",
              }}
            >
              Forgot password?
            </Typography>

            {/* Login Button */}
            <Button
              variant="contained"
              size={isMobile ? "medium" : "small"}
              fullWidth
              onClick={() => handleLogin()}
              sx={{
                py: 1.1,
                borderRadius: 2,
                textTransform: "none",
                fontSize: isMobile ? "0.85rem" : "0.8rem",
                mb: 3,
              }}
            >
              Login
            </Button>

            <Divider sx={{ my: 2 }}>or</Divider>

            <Typography mt={3} textAlign="center" fontSize={isMobile ? 13 : 14}>
              Don’t have an account?{" "}
              <span style={{ color: "#3b82f6", cursor: "pointer" }}>
                Sign Up
              </span>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </div>
  );
}
