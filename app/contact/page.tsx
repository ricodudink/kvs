export const metadata = {
  title: "Contact – De Kindervakantiespelen"
};

export default function ContactPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Neem contact op</p>
        <h1>Contact met De Kindervakantiespelen</h1>
        <p className="page-intro">
          Heb je een vraag over De Kindervakantiespelen, wil je je kind aanmelden of
          meer weten over vrijwilligerswerk? Neem gerust contact met ons op.
        </p>
      </header>

      <section className="card">
        <h2>Contactgegevens</h2>
        <p>
          <strong>Telefoon:</strong> 0228 - 581876
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:info@dekindervakantiespelen.nl">
            info@dekindervakantiespelen.nl
          </a>
        </p>
      </section>

      <section className="card">
        <h2>Stel je vraag</h2>
        <p>
          Op de originele website vind je een contactformulier waar je je naam,
          e-mailadres, onderwerp en bericht kunt invullen. Gebruik dit formulier als
          je een specifieke vraag hebt of meer informatie wilt ontvangen.
        </p>
      </section>
    </div>
  );
}

