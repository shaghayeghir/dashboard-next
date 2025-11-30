export const PostService = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("خطا در دریافت داده‌ها");

  return res.json();
};
