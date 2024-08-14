import Image from "next/image";
import { SlideCodeSnippet } from "./SlideCodeSnippet";
import { SlideDescription } from "./SlideDescription";

import { SlideContentItem } from "@/types/main";
import { SlideLink } from "./SlideLink";
import { SlideList } from "./SlideList";

interface Props {
  items: SlideContentItem[];
}

type SlideItemTypeToWidgetMap = {
  [key in SlideContentItem["type"]]?: React.ElementType;
};

function SlideImage({
  url,
  alt,
  title,
}: {
  url: string;
  alt: string;
  title: string;
}) {
  return (
    <Image
      key={url}
      loading="eager"
      src={url}
      alt={alt || title || "image"}
      width="500"
      height="500"
      className="object-contain aspect-4/3"
    />
  );
}

const widgets: SlideItemTypeToWidgetMap = {
  list: SlideList,
  description: SlideDescription,
  code: SlideCodeSnippet,
  link: SlideLink,
  image: SlideImage,
};

export function SlideBody({ items }: Props) {
  items.sort((item1, item2) => item1.order - item2.order);

  return (
    <div className="body">
      {items.map((item) => {
        const Component = widgets[item.type];

        if (!Component) {
          return null;
        }

        return <Component key={item.title} {...item} />;
      })}
    </div>
  );
}
