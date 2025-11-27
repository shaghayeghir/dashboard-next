"use client";

import { setUser } from "@/store/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginService, logoutService } from "../services/auth.service";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    mutate: handleLogin,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      loginService(data), // 👈 اینجا data ارسال بشه
    onSuccess: (data) => {
      console.log("API RESPONSE:", data);
      dispatch(setUser({ email: data.user.email, role: data.user.role ,  createdAt: data.user.createdAt}));
      router.push("/dashboard");
    },
    onError: (err: any) => alert(err.message),
  });
  const {
    mutate: handleLogout,
    isPending: isPendingLogout,
    error: errprLogout,
  } = useMutation({
    mutationFn: () => logoutService(),
    onSuccess: (data) => {
      router.push("/login");
    },
    onError: (err: any) => alert(err.message),
  });
  return {
    email,
    setEmail,
    pass,
    setPass,
    showPass,
    setShowPass,
    handleLogin,
    isPending,
    error,
    handleLogout,
  };
};
