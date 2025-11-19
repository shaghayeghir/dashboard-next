import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../../auth/AuthProvider";

export const useLoginForm = () => {
  // const { login } = useAuth();
  // const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    // login("test-token");
    // navigate("/");
  };

  return {
    email,
    setEmail,
    showPass,
    pass,
    setPass,
    setShowPass,
    handleLogin,
  };
};
