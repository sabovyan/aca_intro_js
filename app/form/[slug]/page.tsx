import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SLUGS } from "@/constants/slugs";
import { TestYourKnowledgeForm } from "./components/Form";

import { ecosystem_quiz } from "./constants/ecosystem_quiz";
import { programming_languages_quiz } from "./constants/pl_quiz";
import { frontend_quiz } from "./constants/frontend_quiz";
import { js_quiz } from "./constants/js_quiz";
import { py_quiz } from "./constants/py_quiz";
import { django_quiz } from "./constants/django_quiz";
import { devops_quiz } from "./constants/devops_quiz";
import { qa_quiz } from "./constants/qa_quiz";
import { uiux_quiz } from "./constants/ui_ux_quiz";

import { TestItem } from "@/types/questions";
import "./page.css";
import { db_quiz } from "./constants/db_quiz";

type SlugValue = (typeof SLUGS)[keyof typeof SLUGS] | "random";

interface Props {
  params: {
    slug: SlugValue;
  };
}

const TESTS: { [key in SlugValue]?: TestItem[] } = {
  [SLUGS.Ecosystem]: ecosystem_quiz,
  [SLUGS.ProgrammingLanguages]: programming_languages_quiz,
  [SLUGS.Frontend]: frontend_quiz,
  [SLUGS.JsIntro]: js_quiz,
  [SLUGS.PyIntro]: py_quiz,
  [SLUGS.DjangoIntro]: django_quiz,
  [SLUGS.DbIntro]: db_quiz,
  [SLUGS.DevopsIntro]: devops_quiz,
  [SLUGS.QaIntro]: qa_quiz,
  [SLUGS.UIUXIntro]: uiux_quiz,
};

const generateRandomQuestions = () => {
  const tests = Object.values(TESTS);

  const questions: TestItem[] = [];

  for (const test of tests) {
    const randomNumber = Math.floor(Math.random() * test.length);

    const q = test[randomNumber];

    questions.push(q);
  }

  return questions;
};

export const metadata: Metadata = {
  title: "Sisian - HTI Regional Program",
  description:
    "Explore our comprehensive technology education program designed for non-technical learners. Our courses cover essential topics like frontend and backend development, DevOps, machine learning, UI/UX design, and more. Whether you're a beginner or looking to specialize, our engaging and practical approach makes tech learning accessible and fun. Start your journey with us today and unlock your potential in the tech ecosystem.",
  openGraph: {
    title: "HTI Regional Program (Sisian)",
  },
};

export default function Test({ params: { slug } }: Props) {
  let questions = TESTS[slug as SlugValue];

  if (slug === "random") {
    questions = generateRandomQuestions();
  }

  if (!questions) {
    return notFound();
  }

  return <TestYourKnowledgeForm questions={questions} />;
}
