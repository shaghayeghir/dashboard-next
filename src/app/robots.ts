// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/register"], // صفحات فرم نباید ایندکس شوند
      },
    ],
    sitemap: "https://example.com/sitemap.xml",
  };
}
