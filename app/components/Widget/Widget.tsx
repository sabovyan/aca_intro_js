import { SlideList } from "../SlideList";
import { SlideCodeSnippet } from "../SlideCodeSnippet";
import { SlideLink } from "../SlideLink";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import { Image } from "../Image/Image";

import { SlideContentItem as TWidget } from "@/types/main";

type SlideItemTypeToWidgetMap = {
  [key in TWidget["type"]]?: React.ElementType;
};

const widgets: SlideItemTypeToWidgetMap = {
  list: SlideList,
  description: Description,
  code: SlideCodeSnippet,
  link: SlideLink,
  image: Image,
  title: Title,
};

export function Widget({ data }: { data: TWidget }) {
  const Component = widgets[data.type];

  if (!Component) {
    return null;
  }

  return <Component data={data} {...data} />;
}
