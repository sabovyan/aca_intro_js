import type { Slide } from "@/types/main";
import { SlideBody } from "../../components/SlideBody";
import { DJANGO_INTRO } from "@/constants/django-intro";
import { PY_SLIDES } from "@/constants/py-intro";
import { JS_INTRO } from "@/constants/js-intro";
import { UI_UX_SLIDES } from "@/constants/uiux-intro";

import "./page.css";
import { notFound } from "next/navigation";

const enum SlidesSlug {
  JsIntro = "js-intro",
  PyIntro = "py-intro",
  DjangoIntro = "django-intro",
  UIUXIntro = "uiux-intro",
}

const SLIDES: { [k in SlidesSlug]?: Slide[] } = {
  [SlidesSlug.JsIntro]: JS_INTRO,
  [SlidesSlug.PyIntro]: PY_SLIDES,
  [SlidesSlug.DjangoIntro]: DJANGO_INTRO,
  [SlidesSlug.UIUXIntro]: UI_UX_SLIDES,
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
