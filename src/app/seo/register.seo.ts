// src/app/seo/register.seo.ts
import type { Metadata } from "next";

export const registerMetadata: Metadata = {
  title: "ثبت‌نام | ACME Panel",
  description: "ساخت حساب جدید در سیستم مدیریت ACME.",
  keywords: ["ثبت‌نام", "ایجاد حساب", "ورود", "پنل مدیریت", "Next.js"],
  robots: "noindex, nofollow", // صفحه فرم = ایندکس نشه
  openGraph: {
    title: "ثبت‌نام در ACME Panel",
    description: "ایجاد حساب جدید با امنیت بالا",
    type: "website",
  },
};
