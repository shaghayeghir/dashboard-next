import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // دریافت کوکی
  const token = req.cookies.get("token")?.value;

  // مسیرهای محافظت‌شده
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      console.log("⛔ No token → redirect to login");
      return NextResponse.redirect(new URL("/auth/login", req.url));
    } else {
      console.log("🟢 Token found → access granted");
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
