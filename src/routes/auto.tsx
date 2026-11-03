import { createFileRoute } from "@tanstack/react-router";
import { CoveragePage } from "@/components/coverage-page";
import autoImg from "@/assets/auto.jpg";

export const Route = createFileRoute("/auto")({
  head: () => ({
    meta: [
      { title: "Auto Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance" },
      {
        name: "description",
        content:
          "Auto insurance from Farmers agent David Heldt-Werle in Dayton, Nevada. Liability, collision, comprehensive, roadside and more. Call (775) 720-9556 for a free quote.",
      },
      {
        property: "og:title",
        content: "Auto Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance",
      },
      {
        property: "og:description",
        content:
          "Liability, collision, comprehensive, roadside assistance and more — auto coverage tailored to you by a local Nevada agent.",
      },
    ],
  }),
  component: AutoPage,
});

const COVERAGES = [
  {
    title: "Liability coverage",
    description:
      "Bodily injury and property damage liability that meets Nevada requirements — with higher limits available if you want more cushion.",
  },
  {
    title: "Collision",
    description:
      "Pays to repair or replace your car after a crash with another vehicle or object, regardless of fault.",
  },
  {
    title: "Comprehensive",
    description:
      "Covers theft, vandalism, weather, wildlife and other non-collision damage — the desert's dust storms included.",
  },
  {
    title: "Uninsured / underinsured motorist",
    description:
      "Protects you if the other driver can't cover the damage they caused.",
  },
  {
    title: "Medical payments",
    description:
      "Helps with medical bills for you and your passengers after an accident, no matter who was at fault.",
  },
  {
    title: "Roadside assistance",
    description:
      "Towing, jump-starts, flat tires, lockouts and fuel delivery — one call and help is on the way.",
  },
];

function AutoPage() {
  return (
    <CoveragePage
      eyebrow="Auto Insurance"
      title="Coverage that keeps you moving"
      intro="From the daily commute past Fort Churchill to a weekend run down US-50, your car should be covered for the way you actually drive. We'll compare options side by side and build a policy around your vehicle, your budget and your peace of mind."
      image={autoImg}
      imageAlt="A sedan driving a Nevada desert highway at sunset"
      imageWidth={1536}
      imageHeight={864}
      coverages={COVERAGES}
      highlight={{
        title: "Ways to save on auto insurance",
        points: [
          "Bundle auto with home, condo or renters insurance for a multi-policy discount.",
          "Safe-driving and good-student discounts for qualifying households.",
          "Pay-in-full and paperless billing discounts.",
          "Annual policy reviews so your rate keeps matching your situation.",
        ],
      }}
      ctaTitle="Let's price your auto policy"
      ctaDescription="A five-minute call is usually all it takes. Bring your current policy and we'll see where you can save."
    />
  );
}
