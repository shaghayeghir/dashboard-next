import { NextResponse } from "next/server";

export async function GET() {
  // پاک کردن کوکی
  const response = NextResponse.json({ message: "Logged out successfully" });
  response.cookies.set("token", "", {
    httpOnly: true,
    expires: new Date(0), // حذف کوکی
    path: "/",
  });
  return response;
}
