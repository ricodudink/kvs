export const metadata = {
  title: "Kind aanmelden – Weel 2 (VOL) – De Kindervakantiespelen"
};

export default function Week2AanmeldenPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Kind aanmelden</p>
        <h1>Weel 2 – Volgeboekt</h1>
        <p className="page-intro">
          De inschrijvingen voor Weel 2 (maandag 13 t/m donderdag 16 juli 2026)
          zijn helaas gesloten. Alle plaatsen zijn op dit moment{" "}
          <span className="status-badge status-badge-vol">VOL</span>.
        </p>
      </header>

      <section className="card">
        <h2>Alternatieven</h2>
        <p>
          Op dit moment zijn alle reguliere weken vol. Houd onze communicatie in
          de gaten voor mogelijke extra activiteiten buiten de zomerweken om.
        </p>
      </section>
    </div>
  );
}

