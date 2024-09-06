import { Metadata } from "next";

import { quiz_links } from "@/constants/links";
import { H1 } from "../components/H1";
import { Navigation } from "../components/Navigation";

export const metadata: Metadata = {
  title: "Sisian - HTI Regional Program",
  description:
    "Explore our comprehensive technology education program designed for non-technical learners. Our courses cover essential topics like frontend and backend development, DevOps, machine learning, UI/UX design, and more. Whether you're a beginner or looking to specialize, our engaging and practical approach makes tech learning accessible and fun. Start your journey with us today and unlock your potential in the tech ecosystem.",
  openGraph: {
    title: "HTI Regional Program (Sisian)",
  },
};

export default function form() {
  quiz_links.sort((q1, q2) => q1.order - q2.order);

  return (
    <>
      <H1>Quizes</H1>
      <Navigation listType="ol" links={quiz_links} />
    </>
  );
}
