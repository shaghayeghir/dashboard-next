// src/features/auth/services/auth.service.ts

export interface LoginPayload {
  email: string;
  password: string;
}

// 🟢 Login Service
export const loginService = async ({ email, password }: { email: string; password: string }) => {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();
  if (!res.ok) throw new Error(result.message);

  return result;
};


// 🟡 Register Service 
export const registerService = async (data: { email: string; password: string }) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) throw new Error(result.message);

  return result;
};



// 🔴 Logout Service
export const logoutService = async () => {
  await fetch("/api/auth/logout", {
    method: "GET",
    credentials: "include",
  });
};
