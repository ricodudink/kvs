import { NextResponse } from "next/server";
import { registerUser } from "@/app/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password, role } = body as {
    email?: string;
    name?: string;
    password?: string;
    role?: "volunteer" | "organization" | "parent";
  };

  if (!email || !name || !password || !role) {
    return NextResponse.json(
      { error: "Vul alle verplichte velden in." },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: "Wachtwoord moet minimaal 6 tekens lang zijn." },
      { status: 400 }
    );
  }

  try {
    const user = registerUser({
      email,
      name,
      password,
      role
    });

    const response = NextResponse.json(
      { message: "Account succesvol aangemaakt.", user },
      { status: 201 }
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
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "Er ging iets mis bij het registreren.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

