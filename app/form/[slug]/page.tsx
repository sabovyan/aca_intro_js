import { notFound } from "next/navigation";

import { SLUGS } from "@/constants/slugs";
import { TestYourKnowledgeForm } from "./components/Form";
import { devopsQuestions } from "./constants/questions";
import { qualityAssuranceQuestion } from "./constants/qa_questions";

import { TestItem } from "@/types/questions";
import "./page.css";

type SlugValue = (typeof SLUGS)[keyof typeof SLUGS];

interface Props {
  params: {
    slug: SlugValue;
  };
}

const TESTS: { [key in SlugValue]?: TestItem[] } = {
  [SLUGS.DevopsIntro]: devopsQuestions,
  [SLUGS.QaIntro]: qualityAssuranceQuestion,
};

export default function Test({ params: { slug } }: Props) {
  const questions = TESTS[slug as SlugValue];

  if (!questions) {
    return notFound();
  }

  return <TestYourKnowledgeForm questions={questions} />;
}
