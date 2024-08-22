"use client";

import { H1 } from "@/app/components/H1";
import { Navigation } from "@/app/components/Navigation";
import { notReadyTestLinks, TESTS_LINKS } from "@/constants/links";
import { SLUGS } from "@/constants/slugs";
import { useParams } from "next/navigation";

const slugs = Object.values(SLUGS);

type Slug = typeof slugs extends (infer R)[] ? R : never;

export default function NotFoundTest() {
  const { slug } = useParams();
  const message = slugs.includes(slug as Slug)
    ? `Comming soon: Current Test will be ready soon`
    : "404 not Found";

  const filteredLinks = TESTS_LINKS.filter(
    (link) => !notReadyTestLinks.includes(link.href),
  );

  return (
    <main>
      <H1>{message}</H1>
      <Navigation links={filteredLinks} heading="Other tests" />
    </main>
  );
}
