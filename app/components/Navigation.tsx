import { TLink } from "@/types/link";
import Link from "next/link";

export function Navigation<T extends "form" | "slides">({
  heading = "Content",
  links,
}: {
  heading?: string;
  links: TLink<T>[];
}) {
  return (
    <nav>
      <h2 className="text-4xl my-4">{heading}</h2>
      <ul>
        {links.map((link) => (
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
