import { Link } from "@tanstack/react-router";
import { AGENT_ADDRESS, AGENT_PHONE, AGENT_PHONE_HREF } from "./site-header";

const LINE_LINKS = [
  { to: "/auto", label: "Auto Insurance" },
  { to: "/life", label: "Life Insurance" },
  { to: "/renters", label: "Renters Insurance" },
  { to: "/business", label: "Business Insurance" },
  { to: "/condo", label: "Condo Insurance" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">David Heldt-Werle</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Farmers Insurance® Agent
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Personalized home, auto, life and business coverage for families and
            businesses across Dayton and the surrounding Nevada communities.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Insurance Lines</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {LINE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Get in Touch</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={AGENT_PHONE_HREF} className="font-semibold text-foreground transition-colors hover:text-primary">
                {AGENT_PHONE}
              </a>
            </li>
            <li>{AGENT_ADDRESS}</li>
            <li>
              <a
                href="https://www.google.com/maps?q=5+Pine+Cone+Rd+Ste+202-B,+Dayton,+NV+89403"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
              >
                Get directions →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} David Heldt-Werle · Farmers Insurance Agent, Dayton, NV</span>
          <span className="italic opacity-80">
            Farmers Insurance® and its related marks are registered trademarks of Farmers Insurance Group.
          </span>
        </div>
      </div>
    </footer>
  );
}
