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

const enum SlidesSlug {
  JsIntro = "js-intro",
  PyIntro = "py-intro",
  DjangoIntro = "django-intro",
  DbIntro = "db-intro",
  UIUXIntro = "uiux-intro",
  DevopsIntro = "devops-intro",
}

const SLIDES: { [k in SlidesSlug]?: Slide[] } = {
  [SlidesSlug.JsIntro]: JS_INTRO,
  [SlidesSlug.PyIntro]: PY_SLIDES,
  [SlidesSlug.DjangoIntro]: DJANGO_INTRO,
  [SlidesSlug.UIUXIntro]: UI_UX_SLIDES,
  [SlidesSlug.DbIntro]: DB_SLIDES,
  [SlidesSlug.DevopsIntro]: DEVOPS_INTRO,
};

export default function Page({ params }: { params: { slug: string } }) {
  const currentSlide = SLIDES[params.slug as SlidesSlug];

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
