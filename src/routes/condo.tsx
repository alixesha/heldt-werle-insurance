import { createFileRoute } from "@tanstack/react-router";
import { CoveragePage } from "@/components/coverage-page";
import condoImg from "@/assets/condo.jpg";

export const Route = createFileRoute("/condo")({
  head: () => ({
    meta: [
      { title: "Condo Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance" },
      {
        name: "description",
        content:
          "Condo insurance from Farmers agent David Heldt-Werle in Dayton, Nevada. Walls-in coverage for your unit. Call (775) 720-9556.",
      },
      {
        property: "og:title",
        content: "Condo Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance",
      },
      {
        property: "og:description",
        content:
          "Walls-in coverage for your condo unit — interiors, upgrades, belongings and liability where the HOA policy stops.",
      },
    ],
  }),
  component: CondoPage,
});

const COVERAGES = [
  {
    title: "Interior structure (walls-in)",
    description:
      "Covers the parts of the unit you're responsible for — drywall, flooring, cabinetry and fixtures — where the HOA master policy stops.",
  },
  {
    title: "Upgrades and improvements",
    description:
      "That renovated kitchen or upgraded flooring you paid for is usually beyond the HOA policy. This covers it.",
  },
  {
    title: "Personal property",
    description:
      "Furniture, electronics, clothing and belongings, at home and in many cases away from it.",
  },
  {
    title: "Loss assessment",
    description:
      "When the HOA assesses all owners for damage to shared areas, this helps pay your share.",
  },
  {
    title: "Liability protection",
    description:
      "Covers injuries and property damage you're legally responsible for inside and beyond your unit.",
  },
  {
    title: "Additional living expenses",
    description:
      "If a covered loss makes your unit unlivable, help with a temporary place to stay.",
  },
];

function CondoPage() {
  return (
    <CoveragePage
      eyebrow="Condo Insurance"
      title="Coverage for the unit you own, not just the building"
      intro="Your HOA's master policy covers the structure — but what's inside your four walls is on you. Condo insurance fills that gap, protecting your interior, upgrades, belongings and liability in one affordable policy."
      image={condoImg}
      imageAlt="A modern condominium building with balconies at sunset in the desert"
      imageWidth={1024}
      imageHeight={768}
      coverages={COVERAGES}
      highlight={{
        title: "The gap most condo owners miss",
        points: [
          "HOA master policies typically cover bare walls, shared structures — not your interior.",
          "Renovations and upgrades are almost always your responsibility to insure.",
          "Loss assessments from shared-area damage can reach into the thousands.",
          "David will read your HOA documents with you so nothing falls through.",
        ],
      }}
      ctaTitle="Let's close the gap in your condo coverage"
      ctaDescription="Bring your HOA policy summary and we'll map exactly what your unit still needs."
    />
  );
}
