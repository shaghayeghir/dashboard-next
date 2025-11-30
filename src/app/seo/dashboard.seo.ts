// dashboard.seo.ts
import type { Metadata } from "next";

export const dashboardMetadata: Metadata = {
  title: "داشبورد مدیریت | ACME Panel",
  description: "پنل مدیریت پیشرفته همراه با امکانات حرفه‌ای.",
  keywords: ["داشبورد", "مدیریت", "پنل", "Next.js", "React"],
  robots: "index, follow",
  alternates: {
    canonical: "https://example.com/dashboard",
  },
  openGraph: {
    title: "داشبورد ACME",
    description: "پنل مدیریت مدرن",
    url: "https://example.com/dashboard",
    siteName: "ACME Panel",
    locale: "fa_IR",
    type: "website",
  },
};
