export type SlideContentItem =
  | {
      type: "description" | "code";
      order: number;
      content: string;
      url?: never;
    }
  | {
      type: "image";
      order: number;
      url: string;
      alt?: string;
      content?: never;
    };

export type Slide = {
  title?: string;
  items: SlideContentItem[];
};
