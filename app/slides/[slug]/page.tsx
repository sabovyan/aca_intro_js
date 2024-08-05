import { JS_INTRO } from "@/constants/js-intro";
import type { Slide } from "@/types/main";
import { SlideBody } from "../../components/SlideBody";

import "./page.css";
import { notFound } from "next/navigation";
import { PY_SLIDES } from "@/constants/py-intro";

const enum SlidesSlug {
  JsIntro = "js-intro",
  PyIntro = "py-intro",
}

const SLIDES: { [k in SlidesSlug]?: Slide[] } = {
  [SlidesSlug.JsIntro]: JS_INTRO,
  [SlidesSlug.PyIntro]: PY_SLIDES,
};

export default function Page({ params }: { params: { slug: string } }) {
  const currentSlide = SLIDES[params.slug as SlidesSlug];

  if (!currentSlide) {
    notFound();
  }

  console.log({ currentSlide, params });

  return (
    <main>
      <article className={"scroller"}>
        {currentSlide.map(async (slide) => {
          return (
            <section key={slide.title}>
              <header className="header">
                <h1>{slide.title}</h1>
              </header>
              <SlideBody items={slide.items} title={slide.title} />
            </section>
          );
        })}
      </article>
    </main>
  );
}
