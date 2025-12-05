// src/features/auth/services/auth.service.ts

export interface LoginPayload {
  email: string;
  password: string;
}

// 🟢 Login Service
export const loginService = async ({ email, password }: LoginPayload) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Login failed");
  }

  return res.json(); // { user, token }
};

// 🟡 Register Service 
export const registerService = async (data: LoginPayload) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
};

// 🔴 Logout Service
export const logoutService = async () => {
  await fetch("/api/auth/logout", {
    method: "GET",
    credentials: "include",
  });
};
