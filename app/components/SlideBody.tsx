import { SlideCodeSnippet } from "./SlideCodeSnippet";
import { SlideDescription } from "./SlideDescription";
import { SlideLink } from "./SlideLink";
import { SlideList } from "./SlideList";
import { SlideImage } from "./SlideImage";

import { SlideContentItem } from "@/types/main";

interface Props {
  items: SlideContentItem[];
}

type SlideItemTypeToWidgetMap = {
  [key in SlideContentItem["type"]]?: React.ElementType;
};

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
