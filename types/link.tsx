export type TLink<T extends "form" | "slides"> =
  | {
      type: T;
      name: string;
      order: number;
      href: `/${T}/${string}`;
    }
  | {
      type: T;
      name: string;
      order: number;
      href: `/${T}/${string}`;
    };
