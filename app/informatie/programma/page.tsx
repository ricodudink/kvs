export const metadata = {
  title: "Programma – De Kindervakantiespelen"
};

export default function ProgrammaPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Globale weekindeling</p>
        <h1>Programma De Kindervakantiespelen</h1>
        <p className="page-intro">
          Voor De Kindervakantiespelen is geen vast dag‑tot‑dag programma te geven,
          omdat de groepen verschillende activiteiten doen. Wel zijn er vaste
          onderdelen en momenten in de week.
        </p>
      </header>

      <section className="card">
        <h2>Data Kindervakantiespelen 2026</h2>
        <ul className="list">
          <li>Week 1: maandag 6 t/m donderdag 9 juli 2026</li>
          <li>De Mini‑KVS: vrijdag 10 juli 2026</li>
          <li>Week 2: maandag 13 juli t/m donderdag 16 juli 2026</li>
        </ul>
      </section>

      <section className="card">
        <h2>Maandag</h2>
        <p>
          De dag start om 09.00 uur met een gezamenlijk openingsmoment in de kuil
          van De Schoof. Daarna maken de vrijwilligers de groepen compleet en start
          ieder zijn eigen programma. Rond 16.00 uur kunnen de kinderen weer worden
          opgehaald op dezelfde locatie.
        </p>
      </section>

      <section className="card">
        <h2>Dinsdag & dinsdagavond</h2>
        <p>
          Op dinsdag komen de kinderen opnieuw samen in de kuil van De Schoof en
          volgt een dag vol activiteiten met de eigen groep. In de avond is er een
          Open Avond op De Westrand, waar ouders, familie, buren en vrienden welkom
          zijn om een kijkje te nemen.
        </p>
      </section>

      <section className="card">
        <h2>Woensdag – overnachten</h2>
        <p>
          Woensdag worden de kinderen verwelkomd op De Westrand. De vrijwilligers
          maken de groepen compleet en samen richten zij de tenten of hutten in.
          Overdag zijn er groepsactiviteiten, gevolgd door een gezamenlijk avondeten
          en avondprogramma met een spel.
        </p>
        <p>
          Na het avondspel bakken de kinderen een broodje en is het tijd om te gaan
          slapen. Overnachten hoort voor veel kinderen bij de hoogtepunten van de
          week.
        </p>
      </section>

      <section className="card">
        <h2>Donderdag – afsluiting</h2>
        <p>
          Op donderdag wordt er samen ontbeten en ruimen de kinderen en
          vrijwilligers de tenten of hutten op. Daarna volgt nog een laatste
          activiteitenblok met de groep.
        </p>
        <p>
          Rond het middaguur sluiten we af met hotdogs en kunnen de kinderen worden
          opgehaald op De Westrand.
        </p>
      </section>

      <section className="card">
        <h2>Locaties</h2>
        <p>
          <strong>Stichting S.C.C. De Schoof</strong>
          <br />
          Kerkelaantje 1
          <br />
          1693 EH Wervershoof
        </p>
        <p>
          <strong>Sportcomplex De Westrand</strong>
          <br />
          Theo Koomenlaan 5
          <br />
          1693 MA Wervershoof
        </p>
      </section>

      <section className="card">
        <h2>Bij slecht weer</h2>
        <p>
          Bij slecht weer kan het programma afwijken van de standaard planning. Als
          kinderen op een andere locatie moeten worden opgehaald, worden ouders
          hierover tijdig geïnformeerd.
        </p>
      </section>
    </div>
  );
}

