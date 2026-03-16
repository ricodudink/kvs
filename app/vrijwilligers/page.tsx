import Link from "next/link";
import { CampfireScene } from "../components/CampfireScene";

export const metadata = {
  title: "Vrijwilligers – De Kindervakantiespelen"
};

export default function VrijwilligersPage() {
  return (
    <div className="page-section">
      <header className="page-header">
        <p className="page-kicker">Kom jij ons team versterken?</p>
        <h1>Vrijwilliger worden bij De Kindervakantiespelen</h1>
        <p className="page-intro">
          Kies jouw plek bij het kampvuur en ontdek hoe jij als vrijwilliger kunt
          bijdragen aan een onvergetelijke week voor kinderen uit Wervershoof en
          omgeving.
        </p>
      </header>

      <CampfireScene />

      <section
        id="vrijwilligers-nieuw"
        className="card"
        tabIndex={-1}
        aria-labelledby="vrijwilligers-nieuw-heading"
      >
        <h2 id="vrijwilligers-nieuw-heading">Nieuw als vrijwilliger</h2>
        <p>
          Lijkt het je leuk om voor het eerst mee te doen als vrijwilliger bij De
          Kindervakantiespelen? We vertellen je graag wat je kunt verwachten.
        </p>
        <p>
          De Kindervakantiespelen biedt een onvergetelijke week voor kinderen van
          groep 3 tot en met groep 8 aan het begin van de zomervakantie. Tijdens
          deze week bedenk je samen met een team van enthousiastelingen allerlei
          sportieve, gezellige en creatieve activiteiten om jouw groep kinderen te
          vermaken – van hutten bouwen tot grote spellen over het hele terrein.
        </p>
        <p>
          De groepen kinderen zijn ingedeeld op leeftijd, waarbij jij je voorkeur
          mag aangeven. Ben jij de creatieveling die gaat knutselen met de jongsten,
          of ben je de actieve huttenbouwer met de oudsten?
        </p>
        <Link href="/vrijwilligers/aanmelden" className="btn btn-primary">
          Meld je aan als vrijwilliger
        </Link>
      </section>

      <section
        id="vrijwilligers-bestaand"
        className="card"
        tabIndex={-1}
        aria-labelledby="vrijwilligers-bestaand-heading"
      >
        <h2 id="vrijwilligers-bestaand-heading">Voor bestaande vrijwilligers</h2>
        <p>
          Ben je al eerder vrijwilliger geweest bij De Kindervakantiespelen? Fijn
          dat je (weer) aanhaakt. Hieronder vind je praktische informatie en
          afspraken.
        </p>
        <h3>Wat wij jou bieden</h3>
        <ul className="list">
          <li>
            <strong>Maatschappelijke stage:</strong> je kunt bij ons je
            maatschappelijke stage doen. We helpen je graag om er een leerzame en
            leuke ervaring van te maken.
          </li>
          <li>
            <strong>Vrijwilligersbarbecue:</strong> als bedankje organiseren we een
            gezellige barbecue voor alle vrijwilligers. Een mooi moment om samen te
            ontspannen en te genieten.
          </li>
          <li>
            <strong>Maaltijden verzorgd:</strong> ontbijt, lunch en avondeten op
            maandag, dinsdag en woensdag zijn helemaal gratis.
          </li>
          <li>
            <strong>Blijven slapen (optioneel):</strong> je bent van harte welkom om
            de hele week op ons kamp te overnachten, maar dit is helemaal
            vrijblijvend.
          </li>
          <li>
            <strong>Een gezellige vrijwilligersgroep:</strong> je wordt onderdeel van
            een warme en enthousiaste groep vrijwilligers waar je altijd op terug
            kunt vallen. Veel vrijwilligers komen ieder jaar terug.
          </li>
        </ul>

        <h3>Wat wij van jou verwachten</h3>
        <ul className="list">
          <li>Je woont in de regio West-Friesland.</li>
          <li>Je bent beschikbaar op de data en tijden die verderop staan vermeld.</li>
          <li>Je bent actief, energiek en houdt van buitenspelen.</li>
          <li>Je hebt affiniteit met kinderen en gaat graag met hen om.</li>
          <li>Je kunt goed samenwerken met andere jongeren.</li>
          <li>Je bent bij de start van De Kindervakantiespelen minimaal 16 jaar oud.</li>
        </ul>

        <h3>Groepsindeling &amp; VOG</h3>
        <p>
          Enkele weken voor De Kindervakantiespelen hoor je bij welke groep kinderen
          je wordt ingedeeld. Je staat nooit alleen; we zorgen altijd voor een goede
          mix van vrijwilligers, met in elke groep minimaal één ervaren begeleider.
        </p>
        <p>
          Wil je graag samen met een vriend of vriendin op een groep staan? Geef dit
          gerust aan bij je aanmelding. In het aanmeldformulier kun je ook aangeven
          met welke leeftijdsgroep je het liefst werkt.
        </p>
        <p>
          Omdat de veiligheid van alle kinderen voorop staat, vragen we al onze
          vrijwilligers om een Verklaring Omtrent Gedrag (VOG) aan te vragen. De
          aanvraag regelen wij voor je en deze is kosteloos. Je ontvangt van ons alle
          informatie om het document eenvoudig met je DigiD aan te vragen.
        </p>

        <h3>Data en tijden</h3>
        <p>
          Hieronder vind je een overzicht van de belangrijkste dagen rondom De
          Kindervakantiespelen:
        </p>
        <ul className="list">
          <li>Herfstdag 2025 – zaterdag 25 oktober 2025.</li>
          <li>
            Voorbereidingsdag week 1 – zaterdag 4 juli 2026 (opbouwen) en zondag 5
            juli 2026 (voorbereiding).
          </li>
          <li>Week 1 – maandag 6 t/m donderdag 9 juli 2026.</li>
          <li>Mini-KVS – vrijdag 10 juli 2026.</li>
          <li>
            Voorbereidingsdag week 2 – zaterdag 11 juli 2026 (opbouwen) en zondag 12
            juli 2026 (voorbereiding).
          </li>
          <li>Week 2 – maandag 13 t/m donderdag 16 juli 2026.</li>
        </ul>
      </section>

      <section className="card callout">
        <h2>Klaar om je aan te melden?</h2>
        <p>
          Aanmelden kan via het aanmeldformulier op de website van De
          Kindervakantiespelen. Geef daar je voorkeuren en beschikbaarheid door, dan
          nemen wij contact met je op.
        </p>
        <p>
          Samen maken we er weer een onvergetelijke Kindervakantiespelen van – voor
          jou én voor de kinderen.
        </p>
      </section>
    </div>
  );
}

