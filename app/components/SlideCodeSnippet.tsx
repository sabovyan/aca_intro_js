import { codeToHtml } from "shiki";
import { Copybutton } from "./CopyButton";

interface Props {
  content: string;
  lang: string;
}

export async function SlideCodeSnippet({ content, lang }: Props) {
  const code = await codeToHtml(content, {
    lang,
    theme: "catppuccin-mocha",
  });
  return (
    <div className="relative">
      <div className="code min-h-48 flex align-center rounded-lg bg-gray-950">
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
      <Copybutton />
    </div>
  );
}
