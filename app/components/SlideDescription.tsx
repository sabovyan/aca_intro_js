interface Props {
  content: string;
}
export function SlideDescription({ content }: Props) {
  return <p className="description">{content}</p>;
}
