import Link from "next/link";
import { PropsWithChildren } from "react";

export default function TestLayout({ children }: PropsWithChildren) {
  return (
    <main className="dark:bg-stone-900 bg-stone-200 p-4">
      <header className="mb-4">
        <Link href="/" className="underline underline-offset-4">
          <h1 className="text-xl tracking-widest font-bold">HTI</h1>
        </Link>
      </header>
      {children}
    </main>
  );
}
