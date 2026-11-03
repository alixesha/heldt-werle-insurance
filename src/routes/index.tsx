import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { AGENT_PHONE, AGENT_PHONE_HREF } from "@/components/site-header";
import homeHero from "@/assets/home-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Farmers Insurance Agent in Dayton, NV | David Heldt-Werle",
      },
      {
        name: "description",
        content:
          "Home, auto, life, renters, business and condo insurance from Farmers agent David Heldt-Werle. 5 Pine Cone Rd Ste 202-B, Dayton, NV 89403. Call (775) 720-9556.",
      },
      {
        property: "og:title",
        content: "Farmers Insurance Agent in Dayton, NV | David Heldt-Werle",
      },
      {
        property: "og:description",
        content:
          "Home, auto, life, renters, business and condo insurance from Farmers agent David Heldt-Werle in Dayton, Nevada.",
      },
    ],
  }),
  component: Index,
});

const LINES = [
  {
    to: "/contact",
    label: "Home Insurance",
    blurb: "Protect your house, belongings and peace of mind.",
  },
  {
    to: "/auto",
    label: "Auto Insurance",
    blurb: "Coverage that keeps you moving on Nevada roads.",
  },
  {
    to: "/life",
    label: "Life Insurance",
    blurb: "Plans that protect the people who matter most.",
  },
  {
    to: "/renters",
    label: "Renters Insurance",
    blurb: "Big protection for renters, at a small price.",
  },
  {
    to: "/business",
    label: "Business Insurance",
    blurb: "Keep your small business ready for anything.",
  },
  {
    to: "/condo",
    label: "Condo Insurance",
    blurb: "Coverage that fills the gaps your HOA doesn't.",
  },
];

const REASONS = [
  {
    title: "A local agent who knows Dayton",
    description:
      "From Silver Springs to Carson City, David understands the risks Nevada homeowners and drivers actually face — and builds coverage around them.",
  },
  {
    title: "One conversation, all your lines",
    description:
      "Home, auto, life, renters, business and condo — review everything in one call and bundle what makes sense to save.",
  },
  {
    title: "Here when it counts",
    description:
      "Claims and life changes are exactly when a real, local agent matters. You get a person, not a call center.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <Reveal side="left">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={homeHero}
                alt="A family home in the Nevada high desert at golden hour"
                width={1920}
                height={1088}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal side="right" delay={120}>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground">
              Farmers Insurance® Agent · Dayton, NV
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
              Insurance that fits your life, from someone who knows yours.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              I'm David Heldt-Werle, your local Farmers agent in Dayton, Nevada.
              Home, auto, life, renters, business and condo coverage — reviewed
              with you one-on-one, so you only pay for what you need.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={AGENT_PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-base font-bold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Call {AGENT_PHONE}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-7 py-3.5 font-display text-base font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-accent"
              >
                Get a free quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lines of insurance */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal side="right" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Coverage for everything you're building</h2>
          <p className="mt-3 text-muted-foreground">
            Six lines of insurance, one local agent. Pick a line to see what's covered.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LINES.map((line, i) => (
            <Reveal key={line.label} side="right" delay={i * 80} className="h-full">
              <Link
                to={line.to}
                className="group block h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent"
              >
                <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
                  {line.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{line.blurb}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why David */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal side="right" className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Why work with a local agent?</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} side="right" delay={i * 120} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
                  <h3 className="font-display text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready for a quote that actually fits?"
        description="Call or stop by the office at 5 Pine Cone Rd in Dayton. Quotes are free, and there's never any obligation."
      />
    </>
  );
}
