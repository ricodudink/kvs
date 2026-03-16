import { cookies } from "next/headers";

export const metadata = {
  title: "Dashboard vrijwilliger – De Kindervakantiespelen"
};

export default function VrijwilligerDashboardPage() {
  const cookie = cookies().get("kvs_auth");
  const user = cookie ? JSON.parse(cookie.value) : null;

  if (!user || user.role !== "volunteer") {
    return (
      <div className="page-section">
        <header className="page-header">
          <h1>Geen toegang</h1>
          <p className="page-intro">
            Je moet ingelogd zijn als vrijwilliger om dit dashboard te bekijken.
          </p>
        </header>
      </div>
    );
  }

  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Vrijwilligers</p>
        <h1>Welkom, {user.email}</h1>
        <p className="page-intro">
          Hier kun je een overzicht vinden van jouw rol als vrijwilliger tijdens
          De Kindervakantiespelen.
        </p>
      </header>
    </div>
  );
}

