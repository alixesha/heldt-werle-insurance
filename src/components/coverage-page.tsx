import { Reveal } from "./reveal";
import { CtaBand } from "./cta-band";

export interface CoverageItem {
  title: string;
  description: string;
}

export interface CoveragePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  coverages: CoverageItem[];
  highlight: {
    title: string;
    points: string[];
  };
  ctaTitle: string;
  ctaDescription: string;
}

/**
 * Shared layout for each insurance line page.
 * Images enter from the left, text enters from the right.
 */
export function CoveragePage({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  coverages,
  highlight,
  ctaTitle,
  ctaDescription,
}: CoveragePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <Reveal side="left">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src={image}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal side="right" delay={120}>
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground">
              {eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Coverage grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal side="right" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold">What's typically covered</h2>
          <p className="mt-3 text-muted-foreground">
            Every policy is tailored to you — here are the building blocks we'll walk through together.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coverages.map((item, i) => (
            <Reveal key={item.title} side="right" delay={i * 90} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary font-display text-sm font-bold text-secondary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlight band */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <Reveal side="right">
            <h2 className="font-display text-3xl font-bold md:text-4xl">{highlight.title}</h2>
            <ul className="mt-6 space-y-4">
              {highlight.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal side="left" delay={120}>
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
              <p className="font-display text-xl font-bold">Why work with David?</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                As a local Farmers agent in Dayton, Nevada, David Heldt-Werle reviews
                your coverage with you one-on-one, helps you bundle home and auto
                for savings, and is there when you need to file a claim — not just
                when you buy the policy.
              </p>
              <p className="mt-4 font-display text-lg font-semibold">Serving Dayton and the greater Carson Valley area.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand title={ctaTitle} description={ctaDescription} />
    </>
  );
}
