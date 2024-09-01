import { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Slide } from "@/types/main";
import { SlideBody } from "../../components/SlideBody";
import { JS_INTRO } from "@/constants/js-intro";
import { PY_SLIDES } from "@/constants/py-intro";
import { DJANGO_INTRO } from "@/constants/django-intro";
import { DB_SLIDES } from "@/constants/db-intro";
import { UI_UX_SLIDES } from "@/constants/uiux-intro";
import { DEVOPS_INTRO } from "@/constants/devops-intro";
import { QA_INTRO } from "@/constants/qa-intro";
import { SLUGS } from "@/constants/slugs";

import "./page.css";

type SlugValues = (typeof SLUGS)[keyof typeof SLUGS];

const SLIDES: { [k in SlugValues]?: Slide[] } = {
  [SLUGS.JsIntro]: JS_INTRO,
  [SLUGS.PyIntro]: PY_SLIDES,
  [SLUGS.DjangoIntro]: DJANGO_INTRO,
  [SLUGS.UIUXIntro]: UI_UX_SLIDES,
  [SLUGS.DbIntro]: DB_SLIDES,
  [SLUGS.DevopsIntro]: DEVOPS_INTRO,
  [SLUGS.QaIntro]: QA_INTRO,
};

export const metadata: Metadata = {
  title: "Sisian - HTI Regional Program",
  description:
    "Explore our comprehensive technology education program designed for non-technical learners. Our courses cover essential topics like frontend and backend development, DevOps, machine learning, UI/UX design, and more. Whether you're a beginner or looking to specialize, our engaging and practical approach makes tech learning accessible and fun. Start your journey with us today and unlock your potential in the tech ecosystem.",
  openGraph: {
    title: "HTI Regional Program (Sisian)",
  },
};

export default function Page({ params }: { params: { slug: string } }) {
  const currentSlide = SLIDES[params.slug as SlugValues];

  if (!currentSlide) {
    notFound();
  }

  return (
    <main>
      <article className={"scroller"}>
        {currentSlide.map(async (slide) => {
          return (
            <section key={slide.title}>
              <header className="header">
                <h1>{slide.title}</h1>
              </header>
              <SlideBody items={slide.items} />
            </section>
          );
        })}
      </article>
    </main>
  );
}
