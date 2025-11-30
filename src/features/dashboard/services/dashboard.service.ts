export const DashboardService = async (page: number, limit: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!res.ok) throw new Error("خطا در دریافت داده‌ها");

  return res.json();
};
