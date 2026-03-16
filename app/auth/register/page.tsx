"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");
    const role = formData.get("role");

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, password, role })
    });

    const data = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(data.error ?? "Registratie mislukt.");
      return;
    }

    router.push("/auth/login");
  }

  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Account</p>
        <h1>Account aanmaken</h1>
        <p className="page-intro">
          Maak een account aan als vrijwilliger, ouder of organisatie om je
          inschrijvingen en gegevens eenvoudig te beheren.
        </p>
      </header>

      <section className="card">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Naam</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
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
              autoComplete="new-password"
              required
            />
            <p className="form-hint">Minimaal 6 tekens.</p>
          </div>
          <div className="form-field">
            <label htmlFor="role">Rol</label>
            <select id="role" name="role" required>
              <option value="">Kies een rol...</option>
              <option value="parent">Ouder</option>
              <option value="volunteer">Vrijwilliger</option>
              <option value="organization">Organisatie</option>
            </select>
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="form-footer">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Account aanmaken..." : "Account aanmaken"}
            </button>
            <p className="form-hint">
              Heb je al een account?{" "}
              <a href="/auth/login">Log hier in.</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

