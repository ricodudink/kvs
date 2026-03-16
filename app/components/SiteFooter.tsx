import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <p className="site-footer-brand">
            © {year} De Kindervakantiespelen – Stichting SCC De Schoof
          </p>
          <nav className="site-footer-nav" aria-label="Footer menu">
            <Link href="/informatie/algemeen">Algemeen</Link>
            <Link href="/doelstelling-kvs">Onze doelstelling</Link>
            <Link href="/informatie/programma">Programma</Link>
            <Link href="/informatie/mini-kvs">De Mini-KVS</Link>
            <Link href="/veiligheid">Veiligheid</Link>
            <Link href="/privacy-beleid">Privacy beleid</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <p className="site-footer-note">
          Het leukste evenement voor kinderen in de zomervakantie in Wervershoof
          en omgeving.
        </p>
      </div>
    </footer>
  );
}

