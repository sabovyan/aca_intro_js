import { notFound } from "next/navigation";

import { SLUGS } from "@/constants/slugs";
import { TestYourKnowledgeForm } from "./components/Form";
import { devopsQuestions, TestItem } from "./constants/questions";
import "./page.css";

type SlugValue = (typeof SLUGS)[keyof typeof SLUGS];

interface Props {
  params: {
    slug: SlugValue;
  };
}

const TESTS: { [key in SlugValue]?: TestItem[] } = {
  [SLUGS.DevopsIntro]: devopsQuestions,
};

export default function Test({ params: { slug } }: Props) {
  const questions = TESTS[slug as SlugValue];

  if (!questions) {
    return notFound();
  }

  return <TestYourKnowledgeForm questions={devopsQuestions} />;
}
