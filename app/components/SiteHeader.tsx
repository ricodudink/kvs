"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/informatie/algemeen", label: "Informatie" },
  { href: "/doelstelling-kvs", label: "Doelstelling" },
  { href: "/informatie/programma", label: "Programma" },
  { href: "/informatie/mini-kvs", label: "Mini-KVS" },
  { href: "/veiligheid", label: "Veiligheid" },
  { href: "/vrijwilligers", label: "Vrijwilligers" },
  { href: "/contact", label: "Contact", primary: true }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark-wrapper">
            <Image
              src="/images/logo.png"
              alt="Logo De Kindervakantiespelen"
              width={40}
              height={40}
              className="brand-logo"
            />
            <span className="brand-sun" aria-hidden="true" />
          </span>
          <span className="brand-text">
            De <strong>Kindervakantiespelen</strong>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Hoofdmenu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.primary ? "nav-link nav-link-primary" : "nav-link"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Open hoofdmenu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`site-nav-mobile${open ? " site-nav-mobile-open" : ""}`}
        aria-label="Hoofdmenu mobiel"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              item.primary ? "nav-link nav-link-primary" : "nav-link"
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

