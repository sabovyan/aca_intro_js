export type TLink<T extends "form" | "slide"> =
  | {
      type: T;
      name: string;
      href: `${"/form/"}${string}`;
    }
  | {
      type: T;
      name: string;
      href: `${"/slides/"}${string}`;
    };
