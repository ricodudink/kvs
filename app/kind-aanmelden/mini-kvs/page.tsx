export const metadata = {
  title: "Kind aanmelden – Mini KVS (VOL) – De Kindervakantiespelen"
};

export default function MiniKvsAanmeldenPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Kind aanmelden</p>
        <h1>Mini KVS – Volgeboekt</h1>
        <p className="page-intro">
          De inschrijvingen voor de Mini KVS (vrijdag 10 juli 2026) zijn
          momenteel gesloten. Alle plaatsen zijn{" "}
          <span className="status-badge status-badge-vol">VOL</span>.
        </p>
      </header>

      <section className="card">
        <h2>Wat kun je nog wel doen?</h2>
        <p>
          We vinden het jammer dat we niet iedereen een plek kunnen bieden.
          Houd onze kanalen in de gaten voor aankondigingen van nieuwe edities
          of andere activiteiten voor jonge kinderen.
        </p>
      </section>
    </div>
  );
}

