interface Props {
  listType?: "bullet" | "number";
  items?: string[];
}

export function SlideList({ items, listType }: Props) {
  return (
    <List listType={listType}>
      {items?.map((item) => (
        <li key={item} className="text-balance">
          {item}
        </li>
      ))}
    </List>
  );
}

interface ListProps {
  listType?: "bullet" | "number";
  children: React.ReactNode;
}

function List({ listType, ...rest }: ListProps) {
  if (listType === "number") {
    return <ol {...rest} />;
  }

  return <ul {...rest} className="list-disc ml-8 description" />;
}
