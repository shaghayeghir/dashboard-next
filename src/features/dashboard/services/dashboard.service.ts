
export interface LoginPayload {
  email: string;
  password: string;
}

export const DashboardService = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "Get",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Login failed");
  }

  return res.json();
};
