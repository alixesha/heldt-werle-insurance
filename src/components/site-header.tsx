import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/auto", label: "Auto" },
  { to: "/life", label: "Life" },
  { to: "/renters", label: "Renters" },
  { to: "/business", label: "Business" },
  { to: "/condo", label: "Condo" },
  { to: "/contact", label: "Contact" },
] as const;

export const AGENT_PHONE = "(775) 720-9556";
export const AGENT_PHONE_HREF = "tel:+17757209556";
export const AGENT_ADDRESS = "5 Pine Cone Rd Ste 202-B, Dayton, NV 89403";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      {/* Utility bar */}
      <div className="hidden border-b border-border/70 bg-secondary/60 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5 text-xs text-muted-foreground">
          <span>{AGENT_ADDRESS}</span>
          <a href={AGENT_PHONE_HREF} className="font-semibold text-foreground transition-colors hover:text-primary">
            {AGENT_PHONE}
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-display text-lg font-bold tracking-tight">
            David Heldt-Werle
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Farmers Insurance® Agent
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={AGENT_PHONE_HREF}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                      active ? "bg-accent text-accent-foreground" : "text-foreground/85 hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <a
                href={AGENT_PHONE_HREF}
                className="block rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Call {AGENT_PHONE}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
