import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Uitgelogd." },
    { status: 200 }
  );

  response.cookies.set("kvs_auth", "", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0
  });

  return response;
}

