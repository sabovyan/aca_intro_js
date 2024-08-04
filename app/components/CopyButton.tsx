"use client";

import { useRef } from "react";

const buttonSymbols = {
  success: "✓",
  fail: "✗",
  main: "⎘",
};

export function Copybutton() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = async () => {
    const button = buttonRef.current;

    if (button) {
      const textContainer = button.previousElementSibling;
      const content = textContainer?.textContent;

      try {
        if (!content) {
          throw new Error("content not found");
        }

        await navigator.clipboard.writeText(content);

        button.textContent = "✓";

        setTimeout(() => {
          button.textContent = "⎘";
        }, 800);
      } catch {
        button.textContent = "✓";

        setTimeout(() => {
          button.textContent = "⎘";
        }, 800);
      }
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="absolute top-2 right-2 text-xl hover:scale-125 px-2 rounded"
      aria-label="copy content in code block"
      title={"copy"}
    >
      ⎘
    </button>
  );
}
