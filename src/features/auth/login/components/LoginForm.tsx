"use client";

import MonkeyAnimation from "@/components/MonkeyAnimation";
import fa from "@/locales/fa.json";
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

export default function LoginForm() {
  const { email, setEmail, showPass, pass, setPass, setShowPass, handleLogin } =
    useLoginForm();
  const theme = useTheme();
  const [focus, setFocus] = useState<"none" | "email" | "password">("none");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <MonkeyAnimation state={focus} size={isMobile ? 180 : 260} />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: isMobile ? 2 : 4,
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
              width: isMobile ? "90vw" : 380,
              borderRadius: 4,
            }}
            elevation={4}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              fontWeight="bold"
              mb={isMobile ? 2 : 3}
            >
              {fa.auth.login}
            </Typography>

            {/* Email */}

            <TextField
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              size="small"
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("none")}
              sx={{ mb: 2 }}
              placeholder={fa.auth.email}
              InputProps={{
                sx: { direction: "ltr", textAlign: "left" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            {/* password */}
            <TextField
              fullWidth
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={showPass ? "text" : "password"}
              size="small"
              placeholder={fa.auth.password}
              onFocus={() => setFocus("password")}
              onBlur={() => setFocus("none")}
              sx={{ mb: 2 }}
              InputProps={{
                sx: { direction: "ltr", textAlign: "left" },
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
              {fa.auth.forgotPassword}
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
              {fa.auth.login}
            </Button>

            <Divider sx={{ my: 2 }}> {fa.auth.or}</Divider>

            <Typography mt={3} textAlign="center" fontSize={isMobile ? 13 : 14}>
              {fa.auth.signupPrompt}
              <span style={{ color: "#3b82f6", cursor: "pointer" }}>
                {fa.auth.signup}
              </span>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </div>
  );
}
