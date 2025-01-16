import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email: body.businessEmail,
      businessName: body.businessName,
      role: "user",
    };

    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
