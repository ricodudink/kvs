import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "De Kindervakantiespelen",
  description:
    "Het leukste evenement voor kinderen in de basisschoolleeftijd in Wervershoof en omgeving.",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="site-body">
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand">
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-text">
                De <strong>Kindervakantiespelen</strong>
              </span>
            </Link>
            <nav className="site-nav" aria-label="Hoofdmenu">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/veiligheid" className="nav-link">
                Veiligheid
              </Link>
              <Link href="/vrijwilligers" className="nav-link">
                Vrijwilligers
              </Link>
              <Link href="/contact" className="nav-link nav-link-primary">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="page">{children}</main>
        <footer className="site-footer">
          © {new Date().getFullYear()} De Kindervakantiespelen – Stichting SCC De
          Schoof
        </footer>
      </body>
    </html>
  );
}
