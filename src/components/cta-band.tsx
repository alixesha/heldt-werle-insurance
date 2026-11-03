import { Reveal } from "./reveal";
import { AGENT_PHONE, AGENT_PHONE_HREF } from "./site-header";

/** Reusable closing call-to-action band shown on every page. */
export function CtaBand({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <Reveal side="right" className="max-w-xl">
          <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 md:text-base">{description}</p>
        </Reveal>
        <Reveal side="left" delay={150} className="flex flex-col items-center gap-3 md:items-end">
          <a
            href={AGENT_PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 font-display text-base font-bold text-primary shadow-soft transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            Call {AGENT_PHONE}
          </a>
          <span className="text-xs text-primary-foreground/70">
            Free quotes · No obligation · Local service
          </span>
        </Reveal>
      </div>
    </section>
  );
}
