import { SlideContentItem as TWidget } from "@/types/main";
import { Widget } from "../Widget/Widget";

export function Group({ widgets }: { widgets: TWidget[] }) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      {widgets.map((widget) => (
        <Widget data={widget} key={widget.title} />
      ))}
    </div>
  );
}
