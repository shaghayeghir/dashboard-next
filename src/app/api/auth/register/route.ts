import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    // چک تکراری نبودن ایمیل
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "این ایمیل قبلاً ثبت شده است" },
        { status: 400 }
      );
    }

    // هش کردن رمز عبور
    const hashedPassword = await bcrypt.hash(password, 10);

    // ساخت یوزر جدید
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role: "USER", // یا به صورت پیش‌فرض
    });

    // ساخت توکن
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    // ذخیره توکن داخل کوکی
    const response = NextResponse.json(
      {
        message: "ثبت‌نام با موفقیت انجام شد",
        user: { email: newUser.email, role: newUser.role },
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
