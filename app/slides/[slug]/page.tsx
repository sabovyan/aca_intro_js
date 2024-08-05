import { JS_INTRO } from "@/constants/js-intro";
import type { Slide } from "@/types/main";
import { SlideBody } from "../../components/SlideBody";

import "./page.css";
import { notFound } from "next/navigation";

const enum SlidesSlug {
  JsIntro = "js-intro",
}

const SLIDES: { [k in SlidesSlug]?: Slide[] } = {
  [SlidesSlug.JsIntro]: JS_INTRO,
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
