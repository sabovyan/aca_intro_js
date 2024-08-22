import { DetailedHTMLProps, HTMLAttributes } from "react";

export function H1({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h1 {...props} className="text-5xl font-bold my-16">
      {children}
    </h1>
  );
}
