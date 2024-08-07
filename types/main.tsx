export type SlideContentItem =
  | {
      type: "description" | "code";
      order: number;
      content: string;
      url?: never;
      title?: never;
      description?: never;
    }
  | {
      type: "image";
      order: number;
      url: string;
      alt?: string;
      content?: never;
      title?: never;
      description?: never;
    }
  | {
      type: "link";
      order: number;
      url: string;
      title: string;
      description?: string;
    };

export type Slide = {
  title?: string;
  items: SlideContentItem[];
};
