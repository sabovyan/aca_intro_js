import { H1 } from "./components/H1";
import { Navigation } from "./components/Navigation";
import { SLIDES_LINKS, TESTS_LINKS } from "@/constants/links";

export default function Home() {
  return (
    <main className="p-8">
      <H1>HTI Regional Program</H1>
      <div className="flex gap-8 flex-col lg:flex-row">
        <section>
          <Navigation links={SLIDES_LINKS} heading="Links To Slides" />
        </section>
        <section>
          <Navigation links={TESTS_LINKS} heading="Links To Tests" />
        </section>
      </div>
    </main>
  );
}
