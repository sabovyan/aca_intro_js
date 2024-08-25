import { TLink } from "@/types/link";
import Link from "next/link";

export function Navigation<T extends "form" | "slides">({
  heading = "Content",
  listType: ListType = "ul",
  links,
}: {
  heading?: string;
  listType?: "ul" | "ol";
  links: TLink<T>[];
}) {
  links.sort((link1, link2) => {
    return link1.order - link2.order;
  });

  return (
    <nav>
      <h2 className="text-4xl my-4">{heading}</h2>
      <ListType>
        {links.map((link) => (
          <li
            key={link.href}
            className={` ${ListType === "ol" ? "list-decimal" : "list-disc"} mx-8 my-2 text-gray:400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 text-2xl`}
          >
            <Link href={link.href} className="underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ListType>
    </nav>
  );
}
