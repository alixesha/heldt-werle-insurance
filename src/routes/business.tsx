import { createFileRoute } from "@tanstack/react-router";
import { CoveragePage } from "@/components/coverage-page";
import businessImg from "@/assets/business.jpg";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance" },
      {
        name: "description",
        content:
          "Business insurance from Farmers agent David Heldt-Werle in Dayton, Nevada — property, liability, commercial auto and more. Call (775) 720-9556.",
      },
      {
        property: "og:title",
        content: "Business Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance",
      },
      {
        property: "og:description",
        content:
          "Property, liability, commercial auto, workers compensation and business interruption coverage for Nevada small businesses.",
      },
    ],
  }),
  component: BusinessPage,
});

const COVERAGES = [
  {
    title: "Business property",
    description:
      "Your building, equipment, inventory and tools — covered against fire, theft and other covered losses.",
  },
  {
    title: "General liability",
    description:
      "Protection when a customer is injured on your premises or your business accidentally damages someone else's property.",
  },
  {
    title: "Commercial auto",
    description:
      "Vehicles your business owns or uses — trucks, vans and cars — with limits your personal policy can't cover.",
  },
  {
    title: "Workers compensation",
    description:
      "Coverage for employee injuries that meets Nevada requirements and keeps your team taken care of.",
  },
  {
    title: "Business interruption",
    description:
      "Replaces lost income while you recover from a covered event that forces you to close or relocate.",
  },
  {
    title: "Professional liability",
    description:
      "Errors-and-omissions protection for the advice and services your business provides.",
  },
];

function BusinessPage() {
  return (
    <CoveragePage
      eyebrow="Business Insurance"
      title="Built to protect the business you're building"
      intro="Whether you run a crew out of a truck, a storefront on Main Street or a home office in Dayton, your business has risks a personal policy was never designed to cover. David will walk your operation and build coverage around how you actually work."
      image={businessImg}
      imageAlt="A small-business owner standing proudly in his warm, well-stocked workshop"
      imageWidth={1536}
      imageHeight={864}
      coverages={COVERAGES}
      highlight={{
        title: "A policy review that works like a partner",
        points: [
          "On-site walk-throughs of your operation, in person when it helps.",
          "Coverage that scales as you add employees, vehicles or locations.",
          "Business-owner bundles that combine property and liability at a lower cost.",
          "A local agent who answers the phone when a claim happens.",
        ],
      }}
      ctaTitle="Let's review your business risks"
      ctaDescription="Bring the questions you'd ask an attorney or accountant — we'll translate them into coverage."
    />
  );
}
