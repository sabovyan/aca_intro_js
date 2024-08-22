import type { Slide } from "@/types/main";
import { SlideBody } from "../../components/SlideBody";
import { JS_INTRO } from "@/constants/js-intro";
import { PY_SLIDES } from "@/constants/py-intro";
import { DJANGO_INTRO } from "@/constants/django-intro";
import { DB_SLIDES } from "@/constants/db-intro";
import { UI_UX_SLIDES } from "@/constants/uiux-intro";

import "./page.css";
import { notFound } from "next/navigation";
import { DEVOPS_INTRO } from "@/constants/devops-intro";
import { SLUGS } from "@/constants/slugs";

type SlugValues = (typeof SLUGS)[keyof typeof SLUGS];

const SLIDES: { [k in SlugValues]?: Slide[] } = {
  [SLUGS.JsIntro]: JS_INTRO,
  [SLUGS.PyIntro]: PY_SLIDES,
  [SLUGS.DjangoIntro]: DJANGO_INTRO,
  [SLUGS.UIUXIntro]: UI_UX_SLIDES,
  [SLUGS.DbIntro]: DB_SLIDES,
  [SLUGS.DevopsIntro]: DEVOPS_INTRO,
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
