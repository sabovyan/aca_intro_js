import { codeToHtml } from "shiki";
import { Copybutton } from "./CopyButton";

interface Props {
  codeSnippet: string;
}

export async function SlideCodeSnippet({ codeSnippet }: Props) {
  const code = await codeToHtml(codeSnippet, {
    lang: "javascript",
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
