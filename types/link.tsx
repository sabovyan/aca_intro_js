export type TLink<T extends "form" | "slides"> =
  | {
      type: T;
      name: string;
      href: `/${T}/${string}`;
    }
  | {
      type: T;
      name: string;
      href: `/${T}/${string}`;
    };
