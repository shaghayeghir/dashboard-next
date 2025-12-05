"use client";

import { setUser } from "@/store/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginService,
  logoutService,
  registerService,
} from "../services/auth.service";

export const useAuthForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [showPass, setShowPass] = useState(false);

  // ------------------------------
  // LOGIN
  // ------------------------------
  const loginMutation = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      dispatch(
        setUser({
          email: data.user.email,
          role: data.user.role,
          createdAt: data.user.createdAt,
        })
      );
      router.push("/dashboard");
    },
    onError: (err: any) => {
      throw err; // اجازه می‌دهیم بیرون تشخیص خطا دهد
    },
  });

  // ------------------------------
  // REGISTER
  // ------------------------------
  const registerMutation = useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      dispatch(
        setUser({
          email: data.user.email,
          role: data.user.role,
          createdAt: data.user.createdAt,
        })
      );
    },
    onError: (err: any) => {
      throw err;
    },
  });

  // ------------------------------
  // LOGOUT
  // ------------------------------
  const logoutMutation = useMutation({
    mutationFn: logoutService,
    onSuccess: () => {
      router.push("/login");
    },
  });


  const handleAuth = async (data: { email: string; password: string }) => {
    try {
    console.log("🚀 تلاش برای لاگین...");
    await loginMutation.mutateAsync(data);

  } catch (err: any) {
    console.log("❌ خطای لاگین:", err?.response?.data);

    const msg = err?.response?.data?.message || "";

    const userNotFound =
      msg.includes("User not found") ||
      msg.includes("not found");

    if (userNotFound) {
      console.log("ℹ️ کاربر یافت نشد → ثبت نام آغاز شد");

      try {
        const reg = await registerMutation.mutateAsync(data);
        console.log("✅ ثبت نام موفق:", reg);

        console.log("🚀 تلاش برای لاگین بعد از ثبت‌نام...");
        const loginAfter = await loginMutation.mutateAsync(data);
        console.log("✅ لاگین بعد از ثبت‌نام موفق:", loginAfter);

        return;
      } catch (regErr: any) {
        console.log("❌ خطای ثبت‌نام:", regErr?.response?.data);
        alert("خطا در ثبت‌نام");
        return;
      }
    }

    console.log("❌ یک خطای دیگر:", msg);
    alert(msg || "خطای ناشناخته");
  }
  };

  return {
    // UI States
    showPass,
    setShowPass,

    // Auth Handlers
    handleAuth,
    handleLogout: logoutMutation.mutate,

    // Status
    isPending: loginMutation.isPending || registerMutation.isPending,
    error: loginMutation.error || registerMutation.error,
  };
};
