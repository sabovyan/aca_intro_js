import { TLink } from "@/types/link";
import Link from "next/link";

export function Navigation<T extends "form" | "slide">({
  type,
  heading = "Content",
  links,
}: {
  type?: "slide";
  heading?: string;
  links: TLink<T>[];
}) {
  const filteredLinks = type
    ? links.filter((link) => link.type === type)
    : links;

  return (
    <nav>
      <h2 className="text-4xl my-4">{heading}</h2>
      <ul>
        {filteredLinks.map((link) => (
          <li
            key={link.href}
            className="list-disc mx-8 my-2 text-gray:400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 text-2xl"
          >
            <Link href={link.href} className="underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
