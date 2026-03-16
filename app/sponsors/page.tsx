export const metadata = {
  title: "Sponsors – De Kindervakantiespelen"
};

export default function SponsorsPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Met dank aan</p>
        <h1>Onze sponsors</h1>
        <p className="page-intro">
          Zonder sponsors geen Kindervakantiespelen. Dankzij de steun van lokale
          ondernemers, verenigingen en organisaties kunnen we ieder jaar weer een
          onvergetelijke week organiseren.
        </p>
      </header>

      <section className="card">
        <h2>Waarom sponsoren?</h2>
        <p>
          Door De Kindervakantiespelen te sponsoren, draag je direct bij aan een
          betaalbaar en toegankelijk evenement voor alle kinderen in Wervershoof
          en omgeving. Je helpt mee om herinneringen te creëren die een leven
          lang meegaan.
        </p>
      </section>

      <section className="card">
        <h2>Wat jouw steun mogelijk maakt</h2>
        <p>
          Dankzij onze sponsors kunnen we materialen voor het huttendorp kopen,
          leuke activiteiten organiseren, terrein en vervoer regelen en de
          deelnamekosten laag houden. Zo blijft De Kindervakantiespelen voor
          zoveel mogelijk gezinnen bereikbaar.
        </p>
      </section>

      <section className="card callout">
        <h2>Sponsor worden?</h2>
        <p>
          Wil je sponsor worden of meer weten over de mogelijkheden? Neem dan
          contact met ons op via de contactpagina. We denken graag met je mee
          over een passende vorm van sponsoring.
        </p>
      </section>
    </div>
  );
}

