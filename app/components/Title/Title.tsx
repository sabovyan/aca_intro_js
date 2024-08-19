import { TTitle } from "@/types/main";
import "./Title.css";

export function Title({ data }: { data: TTitle }) {
  return (
    <header className="header">
      <h1 className="heading-1">{data.content}</h1>
    </header>
  );
}
