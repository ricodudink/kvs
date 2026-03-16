"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  href?: string;
  label: string;
  primary?: boolean;
  children?: { href: string; label: string; status?: "vol" }[];
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "Informatie",
    children: [
      { href: "/informatie/algemeen", label: "Algemeen" },
      { href: "/doelstelling-kvs", label: "Onze doelstelling" },
      { href: "/veiligheid", label: "Veiligheid" },
      { href: "/informatie/programma", label: "Programma" },
      { href: "/informatie/mini-kvs", label: "De Mini KVS" },
      { href: "/privacy-beleid", label: "Privacy Beleid" }
    ]
  },
  {
    label: "Vrijwilligers",
    children: [
      { href: "/vrijwilligers", label: "Informatie" },
      { href: "/vrijwilligers/aanmelden", label: "Aanmelden als vrijwilliger" }
    ]
  },
  {
    label: "Kind aanmelden",
    children: [
      { href: "/kind-aanmelden/week-1", label: "Week 1", status: "vol" },
      { href: "/kind-aanmelden/week-2", label: "Weel 2", status: "vol" },
      { href: "/kind-aanmelden/mini-kvs", label: "Mini KVS", status: "vol" }
    ]
  },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          <Image
            src="/images/logo.png"
            alt="Logo De Kindervakantiespelen"
            width={40}
            height={40}
            className="brand-logo-plain"
          />
        </Link>

        <nav className="site-nav" aria-label="Hoofdmenu">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="nav-group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`nav-link nav-link-parent${
                    item.children.some((c) => isActive(c.href))
                      ? " nav-link-active"
                      : ""
                  }`}
                >
                  {item.label}
                  <span className="nav-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>
                <div
                  className={`nav-dropdown${
                    openDropdown === item.label ? " nav-dropdown-open" : ""
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`nav-link nav-link-sub${
                        isActive(child.href) ? " nav-link-active" : ""
                      }`}
                    >
                      <span>{child.label}</span>
                      {child.status === "vol" && (
                        <span className="status-badge status-badge-vol">
                          VOL
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className={`nav-link${
                  item.primary ? " nav-link-primary" : ""
                }${isActive(item.href) ? " nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/auth/login"
            className={`nav-link nav-link-auth${
              pathname.startsWith("/auth") ? " nav-link-active" : ""
            }`}
          >
            Inloggen
          </Link>
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
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="nav-group-mobile">
              <button
                type="button"
                className="nav-link nav-link-parent"
                onClick={() =>
                  setOpenDropdown((current) =>
                    current === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                <span className="nav-caret" aria-hidden="true">
                  ▾
                </span>
              </button>
              {openDropdown === item.label && (
                <div className="nav-dropdown-mobile">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`nav-link nav-link-sub${
                        isActive(child.href) ? " nav-link-active" : ""
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span>{child.label}</span>
                      {child.status === "vol" && (
                        <span className="status-badge status-badge-vol">
                          VOL
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href!}
              className={`nav-link${
                item.primary ? " nav-link-primary" : ""
              }${isActive(item.href) ? " nav-link-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
        <Link
          href="/auth/login"
          className={`nav-link nav-link-auth${
            pathname.startsWith("/auth") ? " nav-link-active" : ""
          }`}
          onClick={() => setOpen(false)}
        >
          Inloggen
        </Link>
      </nav>
    </header>
  );
}

