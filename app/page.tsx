import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold my-16">HTI Regional Program</h1>
      <nav>
        <h2 className="text-4xl my-4">Content</h2>
        <ul>
          <li className="list-disc mx-10 text-gray:400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400">
            <Link href="intro-js" className="underline text-2xl">
              Intro To JavaScript
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
