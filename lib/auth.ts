/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtVerify, SignJWT } from "jose";
import { NextRequest } from "next/server";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default-secret-key"
);

export async function createToken(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getUser(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) return null;

  try {
    const payload = await verifyToken(token);
    return payload;
  } catch (error) {
    console.log(error);
    return null;
  }
}
