import { NextResponse } from "next/server";
import { validateUser } from "../../../lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body as {
    email?: string;
    password?: string;
  };

  if (!email || !password) {
    return NextResponse.json(
      { error: "Vul zowel e-mailadres als wachtwoord in." },
      { status: 400 }
    );
  }

  const user = validateUser(email, password);

  if (!user) {
    return NextResponse.json(
      { error: "Onjuiste combinatie van e-mailadres en wachtwoord." },
      { status: 401 }
    );
  }

  const response = NextResponse.json(
    { message: "Inloggen geslaagd.", user },
    { status: 200 }
  );

  response.cookies.set(
    "kvs_auth",
    JSON.stringify({ id: user.id, email: user.email, role: user.role }),
    {
      httpOnly: true,
      sameSite: "lax",
      path: "/"
    }
  );

  return response;
}

