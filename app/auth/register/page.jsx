"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "USER"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form)
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>ثبت‌نام</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: 300, gap: 10 }}>
        
        <input
          type="email"
          placeholder="ایمیل"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="رمز عبور"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="USER">کاربر عادی</option>
          <option value="PRO">کاربر حرفه‌ای</option>
        </select>

        <button type="submit">ساخت حساب</button>
      </form>
    </div>
  );
}
