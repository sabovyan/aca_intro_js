"use client";

import { useState } from "react";
import { TestItem } from "../constants/questions";

interface Props {
  questions: TestItem[];
}

export function TestYourKnowledgeForm({ questions }: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(event.currentTarget);

    let newScore = 0;
    questions.forEach((q) => {
      const answer = formData.get(q.question);

      if (answer === q.correctAnswer) {
        newScore += 1;
      }
    });

    setScore(newScore);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setScore(null);
  };

  return (
    <form
      method="dialog"
      onSubmit={handleSubmit}
      onReset={handleReset}
      className={`${isSubmitted ? "submitted" : ""}`}
    >
      <section className="mb-20">
        {questions.map((qs, index) => (
          <fieldset key={qs.question} className="mb-8 p-4 rounded-lg">
            <span>
              <legend className="text-lg">
                * {index + 1} {qs.question}
              </legend>
            </span>
            {qs.options.map((opt) => {
              const isCorrectAnswer = opt.value === qs.correctAnswer;

              const classForCorrect =
                isSubmitted && isCorrectAnswer ? "correct" : "";

              return (
                <label
                  htmlFor={opt.value + opt.label}
                  className={`mt-4 p-2 block rounded-lg ${classForCorrect} border border-stone-400`}
                  key={opt.value}
                >
                  <input
                    type="radio"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.stopPropagation();
                        e.preventDefault();
                      }
                    }}
                    name={qs.question}
                    id={opt.value + opt.label}
                    value={opt.value}
                    className="m-2"
                    required
                  />

                  {opt.label}
                </label>
              );
            })}
          </fieldset>
        ))}
      </section>
      <footer className="p-4 text-xl flex justify-between items-center fixed bottom-0 left-0 bg-stone-800 w-full rounded-lg">
        <div>
          {typeof score === "number" ? (
            <strong className="text-stone-400">{`${score} / ${questions.length}`}</strong>
          ) : null}
        </div>
        <div className="flex gap-8 justify-end">
          <button
            type="reset"
            className="border border-black px-8 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-700 hover:dark:bg-stone-600"
          >
            Reset
          </button>
          <button className="border border-black px-8 py-1 rounded-xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-700 hover:dark:bg-stone-600">
            Submit
          </button>
        </div>
      </footer>
    </form>
  );
}
