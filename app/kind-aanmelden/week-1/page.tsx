export const metadata = {
  title: "Kind aanmelden – Week 1 (VOL) – De Kindervakantiespelen"
};

export default function Week1AanmeldenPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Kind aanmelden</p>
        <h1>Week 1 – Volgeboekt</h1>
        <p className="page-intro">
          De inschrijvingen voor Week 1 (maandag 6 t/m donderdag 9 juli 2026)
          zijn helaas gesloten. Alle plaatsen zijn op dit moment{" "}
          <span className="status-badge status-badge-vol">VOL</span>.
        </p>
      </header>

      <section className="card">
        <h2>Wat betekent dat voor jou?</h2>
        <p>
          Je kunt voor deze week geen nieuwe inschrijvingen meer doen. Houd onze
          website en sociale media in de gaten voor nieuws over komende edities
          of eventuele updates.
        </p>
      </section>
    </div>
  );
}

