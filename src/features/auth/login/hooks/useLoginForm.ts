import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setUser } from "@/store/authSlice";
import { useDispatch } from "react-redux";

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
    mutationFn: () => loginService({ email, password: pass }),
    onSuccess: (data) => {
      dispatch(setUser({ email: data.user.email, role: data.user.role }));
      router.push("/dashboard");
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
  };
};
