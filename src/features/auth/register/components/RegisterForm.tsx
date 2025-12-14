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
  const [focus, setFocus] = useState<"none" | "email" | "password" >("none");

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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FAECCD",
        px: 2,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Animation */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          <MonkeyAnimation state={focus} size={isMobile ? 160 : 230} />
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: isMobile ? 3 : 4,
              width: isMobile ? "92vw" : 380,
              borderRadius: 4,
              background: "#fff",
              boxShadow: "0 12px 30px rgba(1,61,37,0.15)",
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              fontWeight="bold"
              mb={3}
              sx={{ color: "#013D25", fontFamily: "BTitr" }}
            >
              {fa.auth.signup}
            </Typography>

            {/* EMAIL */}
            <TextField
              {...register("email")}
              fullWidth
              size="small"
              placeholder={fa.auth.email}
              error={!!errors.email}
              helperText={errors.email?.message}
              onFocus={() => setFocus("email")}
              onBlur={() => setFocus("none")}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9",
                },
              }}
              InputProps={{
                sx: { direction: "ltr" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ color: "#013D25" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* PASSWORD */}
            <TextField
              {...register("password")}
              fullWidth
              size="small"
              type={showPass ? "text" : "password"}
              placeholder={fa.auth.password}
              error={!!errors.password}
              helperText={errors.password?.message}
              onFocus={() => setFocus("password")}
              onBlur={() => setFocus("none")}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9",
                },
              }}
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

            {/* CONFIRM PASSWORD */}
            <TextField
              {...register("confirmPassword")}
              fullWidth
              size="small"
              type={showPass ? "text" : "password"}
              placeholder={fa.auth.confirmPassword}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              onFocus={() => setFocus("password")}
              onBlur={() => setFocus("none")}
              sx={{
                mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9",
                },
              }}
              InputProps={{
                sx: { direction: "ltr" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#013D25" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* TERMS */}
            <FormControlLabel
              control={<Checkbox />}
              label={fa.auth.acceptTerms}
              sx={{
                mb: 1,
                "& .MuiTypography-root": { fontSize: "0.85rem" },
              }}
            />

            {/* SUBMIT BUTTON */}
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 1,
                py: 1.1,
                borderRadius: 2,
                bgcolor: "#013D25",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#022E1D" },
                boxShadow: "0 6px 18px rgba(1,61,37,0.30)",
              }}
            >
              {fa.auth.signup}
            </Button>

            {/* DIVIDER */}
            <Divider sx={{ my: 2 }}>{fa.auth.or}</Divider>

            {/* LOGIN LINK */}
            <Typography textAlign="center" fontSize={isMobile ? 13 : 14}>
              {fa.auth.alreadyRegistered}{" "}
              <Link href="/login">
                <Typography
                  component="span"
                  sx={{
                    color: "#046844",
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
      </form>
    </Box>
  );
}
