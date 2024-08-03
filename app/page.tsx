import Link from "next/link";

const links = [
  {
    name: "Intro To JavaScript",
    href: "intro-js",
  },
  {
    name: "html",
    href: "/hello.html",
  },
];

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold my-16">HTI Regional Program</h1>
      <nav>
        <h2 className="text-4xl my-4">Content</h2>
        <ul>
          {links.map((link) => (
            <li
              key={link.href}
              className="list-disc mx-10 text-gray:400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400"
            >
              <Link href={link.href} className="underline text-2xl">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
