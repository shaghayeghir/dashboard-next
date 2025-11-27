"use client";

import MonkeyAnimation from "@/components/MonkeyAnimation";
import fa from "@/locales/fa.json";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, Lock, LockOpen } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRegisterForm } from "../hooks/useRegisterForm";
import { registerSchema } from "../validation/registerSchema";

export default function RegisterForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPass, setShowPass] = useState(false);
  const [focus, setFocus] = useState<"none" | "email" | "password">("none");

  const { handleRegister } = useRegisterForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => handleRegister(data);

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
              {fa.auth.signup}
            </Typography>

            {/* Email */}
            <TextField
              {...register("email")}
              fullWidth
              size="small"
              placeholder={fa.auth.email}
              error={!!errors.email}
              helperText={errors.email?.message}
              onFocus={() => setFocus("email")}
              sx={{ mb: 2 }}
              InputProps={{
                sx: { direction: "ltr" },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <Email />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              {...register("password")}
              fullWidth
              size="small"
              type={showPass ? "text" : "password"}
              placeholder={fa.auth.password}
              error={!!errors.password}
              helperText={errors.password?.message}
              onFocus={() => setFocus("password")}
              sx={{ mb: 2 }}
              InputProps={{
                sx: { direction: "ltr" },
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <LockOpen /> : <Lock />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password */}
            <TextField
              {...register("confirmPassword")}
              fullWidth
              size="small"
              type={showPass ? "text" : "password"}
              placeholder={fa.auth.confirmPassword}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              onFocus={() => setFocus("none")}
              sx={{ mb: 2 }}
              InputProps={{
                sx: { direction: "ltr" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />

            {/* Terms */}
            <FormControlLabel
              control={<Checkbox />}
              label={fa.auth.acceptTerms}
              sx={{ fontSize: "0.8rem", mb: 1 }}
            />

            <Button variant="contained" type="submit" fullWidth sx={{ mt: 1 }}>
              {fa.auth.signup}
            </Button>

            <Divider sx={{ my: 2 }}>{fa.auth.or}</Divider>

            <Typography textAlign="center" fontSize={isMobile ? 13 : 14}>
              {fa.auth.alreadyRegistered}{" "}
              <Link href="/login" passHref>
                <Typography
                  component="span"
                  sx={{
                    color: "#3b82f6",
                    cursor: "pointer",
                    fontWeight: "bold",
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  {fa.auth.login}
                </Typography>
              </Link>
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </form>
  );
}
