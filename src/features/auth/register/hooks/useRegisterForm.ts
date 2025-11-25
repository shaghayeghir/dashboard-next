"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { registerService } from "../services/auth.service";

export const useRegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { mutate: handleRegister, isPending } = useMutation({
    mutationFn: registerService,
    onSuccess: (data) => {
      dispatch(setUser({ email: data.user.email, role: data.user.role }));
      router.push("/dashboard");
    },
    onError: (err: any) => alert(err.message),
  });

  return { handleRegister, isPending };
};
