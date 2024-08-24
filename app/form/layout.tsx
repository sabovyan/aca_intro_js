import Link from "next/link";
import { PropsWithChildren } from "react";

export default function TestLayout({ children }: PropsWithChildren) {
  return (
    <main className="dark:bg-stone-900 bg-stone-200 p-4">
      <header className="mb-4">
        <h1 className="text-xl tracking-widest font-bold">
          <Link href="/" className="underline underline-offset-4">
            HTI
          </Link>
        </h1>
      </header>
      {children}
    </main>
  );
}
