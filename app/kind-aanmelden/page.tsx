export const metadata = {
  title: "Kind aanmelden – De Kindervakantiespelen"
};

export default function KindAanmeldenPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Inschrijven</p>
        <h1>Kind aanmelden</h1>
        <p className="page-intro">
          De edities voor dit jaar zijn volledig volgeboekt. Hieronder zie je de
          status per week. Houd de website en sociale media in de gaten voor
          nieuws over volgende edities.
        </p>
      </header>

      <section className="grid">
        <article className="card">
          <h2>Week 1</h2>
          <p>Maandag 6 t/m donderdag 9 juli 2026.</p>
          <p>
            Alle plaatsen voor week 1 zijn op dit moment{" "}
            <span className="status-badge status-badge-vol">VOL</span>.
          </p>
        </article>
        <article className="card">
          <h2>Weel 2</h2>
          <p>Maandag 13 t/m donderdag 16 juli 2026.</p>
          <p>
            Alle plaatsen voor week 2 zijn op dit moment{" "}
            <span className="status-badge status-badge-vol">VOL</span>.
          </p>
        </article>
        <article className="card">
          <h2>Mini KVS</h2>
          <p>Vrijdag 10 juli 2026 – ochtendeditie voor de jongste kinderen.</p>
          <p>
            De Mini KVS is op dit moment{" "}
            <span className="status-badge status-badge-vol">VOL</span>.
          </p>
        </article>
      </section>
    </div>
  );
}

