import { codeToHtml } from "shiki";
import { Copybutton } from "./CopyButton";

interface Props {
  codeSnippet: string;
  lang: string;
}

export async function SlideCodeSnippet({ codeSnippet, lang }: Props) {
  const code = await codeToHtml(codeSnippet, {
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
