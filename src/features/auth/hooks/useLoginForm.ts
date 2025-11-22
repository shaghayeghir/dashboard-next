import { useMutation } from "@tanstack/react-query";
import { loginService } from "../services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  const { mutate: handleLogin, isPending, error } = useMutation({
    mutationFn: () => loginService({ email, password: pass }),
    onSuccess: () => router.push("/dashboard"),
    onError: (err: any) => alert(err.message),
  });

  return { email, setEmail, pass, setPass, showPass, setShowPass, handleLogin, isPending, error };
};
