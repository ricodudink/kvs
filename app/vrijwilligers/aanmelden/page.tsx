export const metadata = {
  title: "Aanmelden als vrijwilliger – De Kindervakantiespelen"
};

export default function AanmeldenVrijwilligerPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Aanmelden als vrijwilliger</p>
        <h1>Word vrijwilliger bij De Kindervakantiespelen</h1>
        <p className="page-intro">
          Vul hieronder je gegevens in om je aan te melden als vrijwilliger. We
          nemen zo snel mogelijk contact met je op om alles door te nemen.
        </p>
      </header>

      <section className="card">
        <form className="form">
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="name">Naam</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">E-mailadres</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Telefoonnummer</label>
              <input id="phone" name="phone" type="tel" required />
            </div>
            <div className="form-field">
              <label htmlFor="age">Leeftijd</label>
              <input id="age" name="age" type="number" min={16} required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="preference">Voorkeur leeftijdsgroep</label>
            <select id="preference" name="preference" required>
              <option value="">Kies een optie...</option>
              <option value="jongste">Jongste groepen (groep 3-4)</option>
              <option value="midden">Middenbouw (groep 5-6)</option>
              <option value="oudste">Oudste groepen (groep 7-8)</option>
              <option value="geen">Geen voorkeur</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="motivation">Vertel kort iets over jezelf</label>
            <textarea
              id="motivation"
              name="motivation"
              rows={4}
              placeholder="Waarom wil je vrijwilliger worden? Wat vind je leuk om te doen met kinderen?"
            />
          </div>

          <div className="form-footer">
            <button type="submit" className="btn btn-primary">
              Aanmelding versturen
            </button>
            <p className="form-hint">
              Na het versturen ontvang je een bevestiging per e-mail. We gaan
              zorgvuldig met je gegevens om.
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

