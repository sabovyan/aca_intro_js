import { DetailedHTMLProps, HTMLAttributes } from "react";

export function H1({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h1
      {...props}
      className="text-5xl font-bold my-16 text-stone-700 dark:text-stone-400"
    >
      {children}
    </h1>
  );
}
