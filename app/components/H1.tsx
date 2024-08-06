import { DetailedHTMLProps, HTMLAttributes } from "react";

export function H1(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) {
  return <h1 {...props} className="text-5xl font-bold my-16" />;
}
