"use client";

import MonkeyAnimation from "@/components/MonkeyAnimation";
import fa from "@/locales/fa.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
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
import { useForm } from "react-hook-form";
import { useLoginForm } from "../hooks/useLoginForm";
import { loginSchema } from "../validation/loginSchema";

export default function LoginForm() {

  const { handleLogin } = useLoginForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: { email: string; password: string }) => {
    handleLogin(data); // 🔥 مقدار فرم مستقیم ارسال می‌شه
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPass, setShowPass] = useState(false);
  const [focus, setFocus] = useState<"none" | "email" | "password">("none");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MonkeyAnimation state={focus} size={isMobile ? 180 : 260} />

      <Box
        sx={{ display: "flex", justifyContent: "center", p: isMobile ? 2 : 4 }}
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
              mb={2}
            >
              {fa.auth.login}
            </Typography>

            {/* ایمیل */}
            <TextField
              {...register("email")}
              fullWidth
              size="small"
              error={!!errors.email}
              helperText={errors.email?.message}
              placeholder={fa.auth.email}
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("none")}
              sx={{ mb: 2 }}
              InputProps={{
                sx: { direction: "ltr", textAlign: "left" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            {/* رمز عبور */}
            <TextField
              {...register("password")}
              fullWidth
              size="small"
              type={showPass ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password?.message}
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
              sx={{ cursor: "pointer", mb: 3, textAlign: "right" }}
            >
              {fa.auth.forgotPassword}
            </Typography>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ py: 1.1, borderRadius: 2, textTransform: "none", mb: 3 }}
            >
              {fa.auth.login}
            </Button>
          </Paper>
        </motion.div>
      </Box>
    </form>
  );
}
