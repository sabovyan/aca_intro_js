"use client";

import { H1 } from "@/app/components/H1";
import { Navigation } from "@/app/components/Navigation";
import { quiz_links } from "@/constants/links";
import { SLUGS } from "@/constants/slugs";
import { useParams } from "next/navigation";

const slugs = Object.values(SLUGS);

type Slug = typeof slugs extends (infer R)[] ? R : never;

export default function NotFoundTest() {
  const { slug } = useParams();
  const message = slugs.includes(slug as Slug)
    ? `Comming soon: Current Test will be ready soon`
    : "404 not Found";

  return (
    <main>
      <H1>{message}</H1>
      <Navigation links={quiz_links} heading="Other tests" />
    </main>
  );
}
