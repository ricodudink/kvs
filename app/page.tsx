import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-eyebrow">Wervershoof • Basisschoolleeftijd</p>
          <h1>Het leukste evenement voor kids in de vakantie</h1>
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
            Groot feest voor kinderen in de basisschoolleeftijd. Ieder jaar een
            fantastisch evenement.
          </p>
        </div>
        <div className="hero-media">
          <div className="hero-logo-card">
            <Image
              src="/images/logo.png"
              alt="Logo De Kindervakantiespelen"
              width={120}
              height={120}
            />
            <p>De Kindervakantiespelen</p>
          </div>
          <div className="hero-banner">
            <Image
              src="/images/banner.png"
              alt="Kindervakantiespelen banner"
              width={640}
              height={360}
              priority
            />
          </div>
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
        <article className="card">
          <h2>Veiligheid voorop</h2>
          <p>
            Veiligheid staat bij ons altijd centraal. Op elke locatie zijn minimaal
            twee personen leiding aanwezig en bij vervoer zorgen we voor veilige
            oversteekplaatsen. Tijdens het zwemmen houden we extra toezicht in en
            rond het water.
          </p>
          <Link href="/veiligheid" className="card-link">
            Meer over veiligheid
          </Link>
        </article>
        <article className="card">
          <h2>Word vrijwilliger</h2>
          <p>
            Vind je het leuk om met kinderen te werken en wil je een gezellige en
            actieve invulling van je zomervakantie? Dan hoor je bij ons thuis.
          </p>
          <Link href="/vrijwilligers" className="card-link">
            Alles over vrijwilligerswerk
          </Link>
        </article>
      </section>
    </div>
  );
}
