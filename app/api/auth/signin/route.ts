import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email: body.email,
      businessName: "Demo Business",
      role: "partner",
    };

    // Create JWT token
    const token = await createToken(user);

    // Set cookie
    cookies().set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json({ user, token });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
