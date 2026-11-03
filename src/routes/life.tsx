import { createFileRoute } from "@tanstack/react-router";
import { CoveragePage } from "@/components/coverage-page";
import lifeImg from "@/assets/life.jpg";

export const Route = createFileRoute("/life")({
  head: () => ({
    meta: [
      { title: "Life Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance" },
      {
        name: "description",
        content:
          "Term and whole life insurance from Farmers agent David Heldt-Werle in Dayton, Nevada. Protect your family's future. Call (775) 720-9556.",
      },
      {
        property: "og:title",
        content: "Life Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance",
      },
      {
        property: "og:description",
        content:
          "Term life, whole life and universal life options explained in plain language by a local Nevada agent.",
      },
    ],
  }),
  component: LifePage,
});

const COVERAGES = [
  {
    title: "Term life insurance",
    description:
      "Straightforward coverage for a set period — often the years a mortgage or your kids depend on you most — at an affordable premium.",
  },
  {
    title: "Whole life insurance",
    description:
      "Lifelong coverage that builds cash value you can borrow against, with premiums that stay level.",
  },
  {
    title: "Universal life insurance",
    description:
      "Flexible permanent coverage that lets you adjust premiums and death benefits as your life changes.",
  },
  {
    title: "Income replacement",
    description:
      "Size the benefit so your family keeps the standard of living you've worked to build.",
  },
  {
    title: "Mortgage protection",
    description:
      "Coverage designed so the house stays in the family even if the unexpected happens.",
  },
  {
    title: "Final expense planning",
    description:
      "Modest policies that spare your loved ones from funeral costs and final bills.",
  },
];

function LifePage() {
  return (
    <CoveragePage
      eyebrow="Life Insurance"
      title="Protect the people who matter most"
      intro="Life insurance isn't about the worst day — it's about making sure every day after goes on for the people you love. We'll talk through term, whole and universal options in plain language and find the amount that fits your family and your budget."
      image={lifeImg}
      imageAlt="A multigenerational family laughing together in a sunlit living room"
      imageWidth={1536}
      imageHeight={864}
      coverages={COVERAGES}
      highlight={{
        title: "How much life insurance do you need?",
        points: [
          "A common starting point: 10–12 times your annual income.",
          "Add your mortgage balance, debts and future education costs.",
          "Subtract savings and existing coverage — that's the gap to close.",
          "David will walk the numbers with you, no spreadsheets required.",
        ],
      }}
      ctaTitle="Let's talk about your family's future"
      ctaDescription="No jargon, no pressure — just a straightforward conversation about protecting the people you love."
    />
  );
}
