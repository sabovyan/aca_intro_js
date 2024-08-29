import { notFound } from "next/navigation";

import { SLUGS } from "@/constants/slugs";
import { TestYourKnowledgeForm } from "./components/Form";
import { devopsQuestions } from "./constants/questions";
import { qualityAssuranceQuestion } from "./constants/qa_questions";

import { TestItem } from "@/types/questions";
import "./page.css";
import { JS_QUESTIONS } from "./constants/js_questions";
import { ecosystemTestQuestions } from "./constants/ecosystem_questions";
import { PROGRAMMING_LANGUAGES_QUESTIONS } from "./constants/programming_languages";
import { UIUX_QUESTIONS } from "./constants/ui_ux_questions";
import { FRONTEND_QUESTIONS } from "./constants/frontend_questions";
import { PY_QUIZ } from "./constants/py_questions";

type SlugValue = (typeof SLUGS)[keyof typeof SLUGS];

interface Props {
  params: {
    slug: SlugValue;
  };
}

const TESTS: { [key in SlugValue]?: TestItem[] } = {
  [SLUGS.Ecosystem]: ecosystemTestQuestions,
  [SLUGS.ProgrammingLanguages]: PROGRAMMING_LANGUAGES_QUESTIONS,
  [SLUGS.DevopsIntro]: devopsQuestions,
  [SLUGS.QaIntro]: qualityAssuranceQuestion,
  [SLUGS.JsIntro]: JS_QUESTIONS,
  [SLUGS.UIUXIntro]: UIUX_QUESTIONS,
  [SLUGS.Frontend]: FRONTEND_QUESTIONS,
  [SLUGS.PyIntro]: PY_QUIZ,
};

export default function Test({ params: { slug } }: Props) {
  const questions = TESTS[slug as SlugValue];

  if (!questions) {
    return notFound();
  }

  return <TestYourKnowledgeForm questions={questions} />;
}
