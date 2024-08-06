import Link from "next/link";

const links = [
  {
    type: "slide",
    name: "Intro To JavaScript",
    href: "/slides/js-intro",
  },
  {
    type: "slide",
    name: "Intro To Python",
    href: "/slides/py-intro",
  },
  {
    name: "html (a dummy file)",
    href: "/hello.html",
  },
];

export function Navigation({
  type,
  heading = "Content",
}: {
  type?: "slide";
  heading?: string;
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
            className="list-disc mx-8 my-2 text-gray:400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400"
          >
            <Link href={link.href} className="underline text-2xl">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
