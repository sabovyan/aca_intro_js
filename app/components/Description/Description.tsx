import { TDescription } from "@/types/main";
import "./Description.css";

interface Props {
  data: TDescription;
}
export function Description({ data }: Props) {
  return (
    <p className="description text-center lg:text-start">{data.content}</p>
  );
}
