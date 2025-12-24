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
    handleLogin(data);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [showPass, setShowPass] = useState(false);
  const [focus, setFocus] = useState<"none" | "email" | "password">("none");

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
              {fa.auth.login}
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
                sx: { direction: "ltr", textAlign: "left" },
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
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  bgcolor: "#f9f9f9",
                },
              }}
              InputProps={{
                sx: { direction: "ltr", textAlign: "left" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ color: "#013D25" }} />
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

            {/* FORGOT PASSWORD */}
            <Typography
              variant="body2"
              sx={{
                textAlign: "right",
                mb: 3,
                cursor: "pointer",
                color: "#046844",
                fontWeight: 500,
              }}
            >
              {fa.auth.forgotPassword}
            </Typography>

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.2,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                bgcolor: "#013D25",
                "&:hover": { bgcolor: "#022E1D" },
                boxShadow: "0 6px 18px rgba(1,61,37,0.30)",
              }}
            >
              {fa.auth.login}
            </Button>
          </Paper>
        </motion.div>
      </form>
    </Box>
  );
}
