import { Navigation } from "../components/Navigation";

interface Props {}

export default function slides({}: Props) {
  return (
    <main>
      <h1 className="text-5xl font-bold my-16">Slides</h1>
      <Navigation type="slide" />
    </main>
  );
}
