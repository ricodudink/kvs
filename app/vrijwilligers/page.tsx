import type { Metadata } from "next";
import Link from "next/link";
import { CampfireScene } from "../components/CampfireScene";

export const metadata: Metadata = {
  title: "Vrijwilligers | De Kindervakantiespelen",
  description:
    "Word vrijwilliger bij De Kindervakantiespelen en help mee aan een onvergetelijke week voor kinderen uit Wervershoof en omgeving."
};

const benefits = [
  {
    title: "Maatschappelijke stage",
    text:
      "Je kunt bij ons je maatschappelijke stage doen. We helpen je graag om er een leerzame en leuke ervaring van te maken."
  },
  {
    title: "Vrijwilligersbarbecue",
    text:
      "Als bedankje organiseren we een gezellige barbecue voor alle vrijwilligers. Een mooi moment om samen te ontspannen en te genieten."
  },
  {
    title: "Maaltijden verzorgd",
    text:
      "Ontbijt, lunch en avondeten op maandag, dinsdag en woensdag zijn helemaal gratis."
  },
  {
    title: "Blijven slapen (optioneel)",
    text:
      "Je bent van harte welkom om de hele week op ons kamp te overnachten, maar dit is volledig vrijblijvend."
  },
  {
    title: "Een gezellige vrijwilligersgroep",
    text:
      "Je wordt onderdeel van een warme en enthousiaste groep vrijwilligers waar je altijd op terug kunt vallen. Veel vrijwilligers komen ieder jaar terug."
  }
];

const expectations = [
  "Je woont in de regio West Friesland.",
  "Je bent beschikbaar op de data en tijden die hieronder staan vermeld.",
  "Je bent actief, energiek en houdt van buitenspelen.",
  "Je hebt affiniteit met kinderen en gaat graag met hen om.",
  "Je kunt goed samenwerken met andere jongeren.",
  "Je bent bij de start van De Kindervakantiespelen minimaal 16 jaar oud."
];

const schedule = [
  "Voorbereidingsdag week 1 op zaterdag 4 juli 2026 voor het opbouwen en zondag 5 juli 2026 voor de voorbereiding.",
  "Week 1 van maandag 6 juli tot en met donderdag 9 juli 2026.",
  "Mini KVS op vrijdag 10 juli 2026.",
  "Voorbereidingsdag week 2 op zaterdag 11 juli 2026 voor het opbouwen en zondag 12 juli 2026 voor de voorbereiding.",
  "Week 2 van maandag 13 juli tot en met donderdag 16 juli 2026."
];

function Section({
  id,
  title,
  children,
  className = "card"
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={className}
      tabIndex={-1}
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </section>
  );
}

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

      <section className="card">
        <CampfireScene />
      </section>

      <Section id="vrijwilligers-nieuw" title="Nieuwe vrijwilliger">
        <p>
          Lijkt het je leuk om voor het eerst mee te doen als vrijwilliger bij De
          Kindervakantiespelen? We vertellen je graag wat je kunt verwachten.
        </p>
        <p>
          De Kindervakantiespelen biedt een onvergetelijke week voor kinderen van
          groep 3 tot en met groep 8 aan het begin van de zomervakantie. Tijdens
          deze week bedenk je samen met een team van enthousiastelingen allerlei
          sportieve, gezellige en creatieve activiteiten om jouw groep kinderen te
          vermaken. Denk aan hutten bouwen, knutselen en grote spellen over het
          hele terrein.
        </p>
        <p>
          De groepen kinderen zijn ingedeeld op leeftijd en jij mag daarin je
          voorkeur aangeven. Ben jij de creatieveling die gaat knutselen met de
          jongsten of juist de actieve huttenbouwer bij de oudsten?
        </p>

        <h3>Wat wij jou bieden</h3>
        <ul className="list">
          {benefits.map((item) => (
            <li key={item.title}>
              <strong>{item.title}:</strong> {item.text}
            </li>
          ))}
        </ul>

        <h3>Wat wij van jou verwachten</h3>
        <ul className="list">
          {expectations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <Link href="/vrijwilligers/aanmelden" className="btn btn-primary">
          Meld je aan als vrijwilliger
        </Link>
      </Section>

      <Section id="vrijwilligers-over" title="Over onze vrijwilligers">
        <p>
          Zonder vrijwilligers geen Kindervakantiespelen. Ieder jaar staat er een
          grote groep enthousiaste jongeren en volwassenen klaar om er samen een
          onvergetelijke week van te maken.
        </p>
        <p>
          Als vrijwilliger werk je in een gezellig team. Je bedenkt en begeleidt
          activiteiten, helpt bij het opbouwen en afbreken, blijft misschien slapen
          op het kamp en beleeft samen met de kinderen een echte vakantieweek.
        </p>

        <h3>Wie onze vrijwilligers zijn</h3>
        <p>
          Onze vrijwilligers zijn vaak oud deelnemers, jongeren die een
          maatschappelijke stage doen en volwassenen die het leuk vinden om met
          kinderen te werken. Wat ze gemeen hebben is dat ze houden van aanpakken,
          samenwerken en buiten bezig zijn.
        </p>

        <h3>Groepsindeling en VOG</h3>
        <p>
          Enkele weken voor De Kindervakantiespelen hoor je bij welke groep
          kinderen je wordt ingedeeld. Je staat nooit alleen. We zorgen altijd
          voor een goede mix van vrijwilligers, met in elke groep minimaal één
          ervaren begeleider.
        </p>
        <p>
          Wil je graag samen met een vriend of vriendin op een groep staan? Geef
          dit gerust aan bij je aanmelding. In het aanmeldformulier kun je ook
          aangeven met welke leeftijdsgroep je het liefst werkt.
        </p>
        <p>
          Omdat de veiligheid van alle kinderen voorop staat, vragen we al onze
          vrijwilligers om een Verklaring Omtrent Gedrag aan te vragen. De
          aanvraag regelen wij voor je en deze is kosteloos. Je ontvangt van ons
          alle informatie om dit eenvoudig met je DigiD te doen.
        </p>

        <h3>Data en tijden</h3>
        <p>
          Hieronder vind je een overzicht van de belangrijkste dagen rondom De
          Kindervakantiespelen.
        </p>
        <ul className="list">
          {schedule.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section id="vrijwilligers-werkgroep" title="Werkgroep (organisatie)">
        <p>
          De Kindervakantiespelen wordt georganiseerd door een werkgroep van
          vrijwilligers binnen Stichting Sociaal Cultureel Centrum De Schoof. Deze
          groep is het hele jaar door bezig met de voorbereiding van het
          programma, de veiligheid, financiën en communicatie.
        </p>
        <p>
          De werkgroep zorgt dat er voldoende vrijwilligers zijn, dat locaties en
          materialen geregeld zijn en dat alles tijdens de week soepel verloopt.
          Samen met de achterban van De Schoof en onze sponsors maken zij De
          Kindervakantiespelen mogelijk.
        </p>
        <p>
          Heb je vragen over de organisatie of wil je iets betekenen in de
          werkgroep? Neem dan contact op via de contactpagina van De
          Kindervakantiespelen.
        </p>
      </Section>

      <section className="card callout" aria-labelledby="aanmelden-heading">
        <h2 id="aanmelden-heading">Klaar om je aan te melden?</h2>
        <p>
          Aanmelden kan via het aanmeldformulier op de website van De
          Kindervakantiespelen. Geef daar je voorkeuren en beschikbaarheid door,
          dan nemen wij contact met je op.
        </p>
        <p>
          Samen maken we er weer een onvergetelijke Kindervakantiespelen van,
          voor jou én voor de kinderen.
        </p>
        <Link href="/vrijwilligers/aanmelden" className="btn btn-primary">
          Ga naar het aanmeldformulier
        </Link>
      </section>
    </div>
  );
}