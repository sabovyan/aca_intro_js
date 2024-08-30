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

type SlugValue = (typeof SLUGS)[keyof typeof SLUGS];

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
  [SLUGS.DevopsIntro]: devops_quiz,
  [SLUGS.QaIntro]: qa_quiz,
  [SLUGS.UIUXIntro]: uiux_quiz,
};

export default function Test({ params: { slug } }: Props) {
  const questions = TESTS[slug as SlugValue];

  if (!questions) {
    return notFound();
  }

  return <TestYourKnowledgeForm questions={questions} />;
}
