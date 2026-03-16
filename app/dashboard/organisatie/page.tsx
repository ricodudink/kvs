import { cookies } from "next/headers";

export const metadata = {
  title: "Dashboard organisatie – De Kindervakantiespelen"
};

export default function OrganisatieDashboardPage() {
  const cookie = cookies().get("kvs_auth");
  const user = cookie ? JSON.parse(cookie.value) : null;

  if (!user || user.role !== "organization") {
    return (
      <div className="page-section">
        <header className="page-header">
          <h1>Geen toegang</h1>
          <p className="page-intro">
            Je moet ingelogd zijn als organisatie om dit dashboard te bekijken.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Organisatie</p>
        <h1>Welkom, {user.email}</h1>
        <p className="page-intro">
          Dit is het startpunt voor het beheren van inschrijvingen en
          vrijwilligers. In een volgende stap kan hier meer functionaliteit
          worden toegevoegd.
        </p>
      </header>
    </div>
  );
}

