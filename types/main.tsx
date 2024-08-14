export type SlideContentItem =
  | {
      type: "description";
      order: number;
      content: string;
      lang?: never;
      url?: never;
      title?: never;
      description?: never;
    }
  | {
      type: "code";
      lang: "javascript" | "python" | "bash";
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
      lang?: never;
      title?: never;
      description?: never;
    }
  | {
      type: "link";
      order: number;
      url: string;
      title: string;
      description?: string;
      lang?: never;
    };

export type Slide = {
  title?: string;
  items: SlideContentItem[];
};
