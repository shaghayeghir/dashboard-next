// src/app/seo/login.seo.ts
import type { Metadata } from "next";

export const loginMetadata: Metadata = {
  title: "ورود | ACME Panel",
  description: "ورود امن به سیستم مدیریت ACME.",
  keywords: ["ورود", "لاگین", "احراز هویت", "سیستم مدیریت", "Next.js"],
  robots: "noindex, nofollow", // چون صفحه فرم هست، نباید ایندکس شود
  openGraph: {
    title: "ورود به ACME Panel",
    description: "احراز هویت امن و سریع",
    type: "website",
  },
};
