import Image from "next/image";
import { SlideCodeSnippet } from "./SlideCodeSnippet";
import { SlideDescription } from "./SlideDescription";

import { SlideContentItem } from "@/types/main";

interface Props {
  items: SlideContentItem[];
  title?: string;
}

export function SlideBody({ items, title }: Props) {
  items.sort((item1, item2) => item1.order - item2.order);

  return (
    <div className="body">
      {items.map((item) => {
        if (item.type === "description") {
          return <SlideDescription key={item.content} content={item.content} />;
        }

        if (item.type === "code") {
          return (
            <SlideCodeSnippet key={item.content} codeSnippet={item.content} />
          );
        }

        if (item.type === "image") {
          return (
            <Image
              key={item.url}
              loading="eager"
              src={item.url}
              alt={item.alt || title || "image"}
              width="500"
              height="500"
              className="object-contain"
            />
          );
        }

        return null;
      })}
    </div>
  );
}
