import { cookies } from "next/headers";

export const metadata = {
  title: "Dashboard ouder – De Kindervakantiespelen"
};

export default function OuderDashboardPage() {
  const cookie = cookies().get("kvs_auth");
  const user = cookie ? JSON.parse(cookie.value) : null;

  if (!user || user.role !== "parent") {
    return (
      <div className="page-section">
        <header className="page-header">
          <h1>Geen toegang</h1>
          <p className="page-intro">
            Je moet ingelogd zijn als ouder om dit dashboard te bekijken.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Ouders</p>
        <h1>Welkom, {user.email}</h1>
        <p className="page-intro">
          Hier kun je in de toekomst de inschrijvingen van je kinderen en
          belangrijke informatie over De Kindervakantiespelen terugvinden.
        </p>
      </header>
    </div>
  );
}

