import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { AGENT_ADDRESS, AGENT_PHONE, AGENT_PHONE_HREF } from "@/components/site-header";
import officeImg from "@/assets/office.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Quote | David Heldt-Werle — Farmers Insurance, Dayton NV" },
      {
        name: "description",
        content:
          "Contact Farmers agent David Heldt-Werle at (775) 720-9556 or visit 5 Pine Cone Rd Ste 202-B, Dayton, NV 89403 for a free insurance quote.",
      },
      {
        property: "og:title",
        content: "Contact & Free Quote | David Heldt-Werle — Farmers Insurance, Dayton NV",
      },
      {
        property: "og:description",
        content:
          "Call (775) 720-9556 or stop by 5 Pine Cone Rd Ste 202-B, Dayton, NV 89403. Free quotes, no obligation.",
      },
    ],
  }),
  component: ContactPage,
});

const QUOTE_OPTIONS = [
  {
    title: "Auto & Home bundle",
    description: "The most popular combination — bundling usually unlocks the biggest savings.",
  },
  {
    title: "Life insurance",
    description: "Term, whole and universal life — sized to your family, not a template.",
  },
  {
    title: "Renters & Condo",
    description: "Quick quotes that can often start the same day you call.",
  },
  {
    title: "Business",
    description: "From a one-person operation to a growing crew — coverage that scales.",
  },
];

function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <Reveal side="left">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={officeImg}
                alt="The welcoming reception area of a warm, local insurance office"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal side="right" delay={120}>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground">
              Contact
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
              Let's talk about your coverage
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              The fastest way to a quote is a phone call. Prefer to sit down
              together? Stop by the office in Dayton — coffee's on me.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={AGENT_PHONE_HREF}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-lg" aria-hidden="true">
                  📞
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Call or text
                  </span>
                  <span className="font-display text-lg font-bold">{AGENT_PHONE}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-lg" aria-hidden="true">
                  📍
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Visit the office
                  </span>
                  <span className="font-display text-lg font-bold">{AGENT_ADDRESS}</span>
                </span>
              </div>
              <a
                href="https://www.google.com/maps?q=5+Pine+Cone+Rd+Ste+202-B,+Dayton,+NV+89403"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-input bg-background px-7 py-3 font-display text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-accent"
              >
                Get directions →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to quote */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal side="right" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">What can I get a quote on?</h2>
          <p className="mt-3 text-muted-foreground">
            Any line — or several together. Mention what you're interested in and we'll take it from there.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {QUOTE_OPTIONS.map((option, i) => (
            <Reveal key={option.title} side="right" delay={i * 90} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold">{option.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal side="up" delay={200} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for a specific line first? Browse{" "}
            <Link to="/auto" className="font-semibold text-primary underline underline-offset-4">
              Auto
            </Link>
            ,{" "}
            <Link to="/life" className="font-semibold text-primary underline underline-offset-4">
              Life
            </Link>{" "}
            or{" "}
            <Link to="/business" className="font-semibold text-primary underline underline-offset-4">
              Business
            </Link>{" "}
            coverage.
          </p>
        </Reveal>
      </section>

      {/* Map */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal side="left">
            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Map to 5 Pine Cone Rd Ste 202-B, Dayton, NV 89403"
                src="https://www.google.com/maps?q=5%20Pine%20Cone%20Rd%20Ste%20202-B%2C%20Dayton%2C%20NV%2089403&output=embed"
                width="1200"
                height="420"
                loading="lazy"
                className="h-[420px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="One call starts your free quote"
        description={`Call ${AGENT_PHONE} or stop by ${AGENT_ADDRESS}. Quotes are always free and there's never any obligation.`}
      />
    </>
  );
}
