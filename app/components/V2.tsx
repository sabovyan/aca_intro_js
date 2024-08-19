import { SlideContentItem as TWidget } from "@/types/main";
import { Group } from "./Group/Group";

interface Group {
  id: string;
  widgets: TWidget[];
}

export function Slide({ groups }: { groups: Group[] }) {
  return (
    <section className="m-4">
      {groups.map((group) => (
        <Group key={group.id} widgets={group.widgets} />
      ))}
    </section>
  );
}
