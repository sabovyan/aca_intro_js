import { jsIntro } from "@/constants/js-intro";
import { SlideBody } from "../components/SlideBody";

import "./page.css";

export default function Home() {
  return (
    <main>
      <article className={"scroller"}>
        {jsIntro.map(async (slide) => {
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
