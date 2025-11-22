import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    console.log("📩 Register API Called");
    await connectDB(); // فقط همین یک بار کافیه
    console.log("🟢 DB Connected Successfully");

    const { email, password } = await req.json();
    console.log("📬 Received:", email, password);

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPass });

    return NextResponse.json(
      { message: "Account created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Register Error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
