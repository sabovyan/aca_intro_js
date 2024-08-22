import { SLIDES_LINKS } from "@/constants/links";
import { Navigation } from "../components/Navigation";

interface Props {}

export default function slides({}: Props) {
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold my-16">Slides</h1>
      <Navigation links={SLIDES_LINKS} />
    </main>
  );
}
