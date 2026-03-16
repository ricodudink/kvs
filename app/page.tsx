import Link from "next/link";
import { HeroSlider } from "./components/HeroSlider";

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Wervershoof • Basisschoolleeftijd</p>
          <h1>Het leukste vakantiefeest voor kids in Wervershoof</h1>
          <p className="hero-sub">
            De Kindervakantiespelen is hét vakantiefeest voor kinderen uit
            Wervershoof en omgeving. Een week vol spel, sport, creativiteit en
            avontuur, georganiseerd door een enthousiaste groep vrijwilligers.
          </p>
          <div className="hero-actions">
            <Link href="/vrijwilligers" className="btn btn-primary">
              Doe mee als vrijwilliger
            </Link>
            <Link href="/veiligheid" className="btn btn-ghost">
              Lees over veiligheid
            </Link>
          </div>
          <p className="hero-note">
            Al sinds 1970 een groot feest voor kinderen in de basisschoolleeftijd.
          </p>
        </div>
        <div className="hero-media">
          <HeroSlider />
        </div>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Over De Kindervakantiespelen</h2>
          <p>
            De Kindervakantiespelen is onderdeel van Stichting Sociaal Cultureel
            Centrum De Schoof in Wervershoof. Samen met een enthousiaste groep
            vrijwilligers organiseren we in iedere schoolvakantie een vrolijk en
            actief programma voor kinderen uit Wervershoof en omgeving.
          </p>
        </article>
        <article className="card">
          <h2>Doel & missie</h2>
          <p>
            We willen kinderen uit Wervershoof en omgeving in iedere vakantie blij
            maken. Met sport, spel, creativiteit en avontuur zorgen we voor een
            onvergetelijke tijd, speciaal voor kinderen in de basisschoolleeftijd.
          </p>
        </article>
        <article className="card card-with-icon">
          <h2>Bouwen & ontdekken</h2>
          <p>
            Hutten bouwen, spellen op het veld en samen een groot huttendorp
            neerzetten bij De Westrand – voor veel kinderen hét hoogtepunt van
            de week.
          </p>
        </article>
        <article className="card card-with-icon">
          <h2>Waterpret & buiten zijn</h2>
          <p>
            We zijn zoveel mogelijk buiten. Met spelletjes, waterpret en sport
            beleven kinderen echt het vakantiegevoel, altijd met goede
            begeleiding.
          </p>
        </article>
      </section>

      <section className="grid grid-highlight">
        <article className="card">
          <h2>Veiligheid staat voorop</h2>
          <p>
            Op elke locatie, zoals De Schoof en De Westrand, zijn altijd minimaal
            twee personen leiding aanwezig. Bij vervoer zorgen we voor veilige
            oversteekplaatsen en extra toezicht.
          </p>
          <Link href="/veiligheid" className="card-link">
            Meer over veiligheid
          </Link>
        </article>
        <article className="card">
          <h2>Vrijwilligers maken het mogelijk</h2>
          <p>
            Ieder jaar staat er een grote groep enthousiaste vrijwilligers klaar.
            Samen zorgen zij dat De Kindervakantiespelen kan blijven bestaan en
            dat elke editie weer een feestje wordt.
          </p>
          <Link href="/vrijwilligers" className="card-link">
            Alles over vrijwilligerswerk
          </Link>
        </article>
      </section>
    </div>
  );
}
