import { Metadata } from "next";

import { SLIDES_LINKS } from "@/constants/links";
import { Navigation } from "../components/Navigation";

export const metadata: Metadata = {
  title: "Sisian - HTI Regional Program",
  description:
    "Explore our comprehensive technology education program designed for non-technical learners. Our courses cover essential topics like frontend and backend development, DevOps, machine learning, UI/UX design, and more. Whether you're a beginner or looking to specialize, our engaging and practical approach makes tech learning accessible and fun. Start your journey with us today and unlock your potential in the tech ecosystem.",
  openGraph: {
    title: "HTI Regional Program (Sisian)",
  },
};

export default function slides() {
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold my-16">Slides</h1>
      <Navigation links={SLIDES_LINKS} listType="ol" />
    </main>
  );
}
