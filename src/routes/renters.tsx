import { createFileRoute } from "@tanstack/react-router";
import { CoveragePage } from "@/components/coverage-page";
import rentersImg from "@/assets/renters.jpg";

export const Route = createFileRoute("/renters")({
  head: () => ({
    meta: [
      { title: "Renters Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance" },
      {
        name: "description",
        content:
          "Affordable renters insurance from Farmers agent David Heldt-Werle in Dayton, Nevada. Protect your belongings and liability. Call (775) 720-9556.",
      },
      {
        property: "og:title",
        content: "Renters Insurance in Dayton, NV | David Heldt-Werle — Farmers Insurance",
      },
      {
        property: "og:description",
        content:
          "Personal property, liability and loss-of-use coverage for renters — for about the cost of a few coffees a month.",
      },
    ],
  }),
  component: RentersPage,
});

const COVERAGES = [
  {
    title: "Personal property",
    description:
      "Furniture, electronics, clothing and more — covered against fire, theft and other covered events, at home and away.",
  },
  {
    title: "Liability protection",
    description:
      "If a guest is hurt in your rental or you accidentally damage someone else's property, liability coverage steps in.",
  },
  {
    title: "Loss of use",
    description:
      "If your rental becomes unlivable after a covered loss, help with a hotel and extra living expenses.",
  },
  {
    title: "Guest medical protection",
    description:
      "Helps pay small medical bills when a guest is injured, before things turn into a lawsuit.",
  },
  {
    title: "Replacement cost options",
    description:
      "Choose full replacement cost instead of depreciated value, so you can actually replace what you lost.",
  },
  {
    title: "Bundling savings",
    description:
      "Pair renters with your auto policy and often the renters coverage barely changes your bill.",
  },
];

function RentersPage() {
  return (
    <CoveragePage
      eyebrow="Renters Insurance"
      title="Your landlord's policy doesn't cover your stuff"
      intro="The building you rent is insured — everything inside it isn't. Renters insurance protects your belongings, your liability and your savings, usually for less per month than a streaming subscription."
      image={rentersImg}
      imageAlt="A cozy, warmly lit apartment living room"
      imageWidth={1024}
      imageHeight={768}
      coverages={COVERAGES}
      highlight={{
        title: "Why renters insurance is worth it",
        points: [
          "A fire, break-in or pipe burst can cost tens of thousands — a policy costs a fraction.",
          "Many landlords and leases now require proof of renters coverage.",
          "It follows you: belongings are often covered even in your car or a storage unit.",
          "Liability protection extends beyond your front door.",
        ],
      }}
      ctaTitle="Get covered before you need it"
      ctaDescription="Most renters policies can start the same day you call. Let's get you protected."
    />
  );
}
