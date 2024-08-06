import { H1 } from "@/app/components/H1";
import { Navigation } from "@/app/components/Navigation";

export default function NotFound() {
  return (
    <main className="p-8 flex flex-col items-center">
      <H1>🤭 Oops, page not found</H1>

      <Navigation heading="Check out these pages instead" />
    </main>
  );
}
