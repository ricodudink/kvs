"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(data.error ?? "Inloggen mislukt.");
      return;
    }

    const role = data.user?.role as
      | "volunteer"
      | "parent"
      | "organization"
      | undefined;

    if (role === "volunteer") {
      router.push("/dashboard/vrijwilliger");
    } else if (role === "parent") {
      router.push("/dashboard/ouder");
    } else if (role === "organization") {
      router.push("/dashboard/organisatie");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Account</p>
        <h1>Inloggen</h1>
        <p className="page-intro">
          Log in om toegang te krijgen tot jouw dashboard als vrijwilliger,
          ouder of organisatie.
        </p>
      </header>

      <section className="card">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="email">E-mailadres</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Wachtwoord</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="form-footer">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Bezig met inloggen..." : "Inloggen"}
            </button>
            <p className="form-hint">
              Nog geen account? Maak er{" "}
              <a href="/auth/register">hier</a> een aan.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

