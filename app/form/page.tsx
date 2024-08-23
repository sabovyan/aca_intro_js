import { notReadyTestLinks, TESTS_LINKS } from "@/constants/links";
import { H1 } from "../components/H1";
import { Navigation } from "../components/Navigation";

interface Props {}

export default function form({}: Props) {
  const filtered = TESTS_LINKS.filter(
    (link) => !notReadyTestLinks.includes(link.href),
  );

  return (
    <>
      <H1>Tests</H1>
      <Navigation links={filtered} />
    </>
  );
}
