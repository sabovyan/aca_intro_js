import { SLUGS } from "@/constants/slugs";
import { H1 } from "./components/H1";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import "./page.css";

type SlugValus = (typeof SLUGS)[keyof typeof SLUGS];

type Topic = {
  title: string;
  order: number;
  key: string;
  status: "draft" | "disabled" | "enabled";
  linkToSlide:
    | {
        url: `/slides/${SlugValus}`;
        type: "internal";
      }
    | {
        type: "external";
        url: `https://${string}`;
      }
    | null;
  linkToQuiz: `/form/${SlugValus}`;
};

const topics: Topic[] = [
  {
    title: "Ecosystem",
    order: 1,
    key: "Ecosystem",
    status: "enabled",
    linkToSlide: {
      type: "external",
      url: "https://docs.google.com/presentation/d/1EjCigXk4D4twBmjjLklCgfcdK02EmDmzVn2Vbn0KXl8/edit#slide=id.p",
    },
    linkToQuiz: "/form/ecosystem-intro",
  },
  {
    title: "Programming languages",
    order: 2,
    key: "Programming_languages",
    status: "enabled",
    linkToSlide: null,
    linkToQuiz: "/form/programming-languages-intro",
  },
  {
    title: "Frontend",
    order: 3,
    key: "Frontend",
    status: "enabled",
    linkToSlide: {
      type: "external",
      url: "https://docs.google.com/presentation/d/1skXNgJp7npGPOyZlIUAs6BjMt3ig_q7KH8Xkftr6IQg/edit#slide=id.ge8c1253736_0_59",
    },
    linkToQuiz: "/form/frontend-intro",
  },
  {
    title: "JavaScript",
    order: 4,
    key: "Js",
    status: "enabled",
    linkToSlide: { type: "internal", url: "/slides/js-intro" },
    linkToQuiz: "/form/js-intro",
  },
  {
    title: "Python",
    order: 5,
    key: "Py",
    status: "enabled",
    linkToSlide: { type: "internal", url: "/slides/py-intro" },
    linkToQuiz: "/form/py-intro",
  },
  {
    title: "Django",
    order: 6,
    key: "Django",
    status: "enabled",
    linkToSlide: { type: "internal", url: "/slides/django-intro" },
    linkToQuiz: "/form/django-intro",
  },
  {
    title: "Databases",
    order: 7,
    key: "Db",
    status: "enabled",
    linkToSlide: { type: "internal", url: "/slides/db-intro" },
    linkToQuiz: "/form/db-intro",
  },
  {
    title: "Devops",
    order: 8,
    key: "Devops",
    status: "enabled",
    linkToSlide: { type: "internal", url: "/slides/devops-intro" },
    linkToQuiz: "/form/devops-intro",
  },
  {
    title: "Quality Assurance",
    order: 9,
    key: "Qa",
    status: "enabled",
    linkToSlide: {
      type: "internal",

      url: "/slides/qa-intro",
    },
    linkToQuiz: "/form/qa-intro",
  },
  {
    title: "Ui/UX",
    order: 10,
    key: "Uiux",
    status: "draft",
    linkToSlide: {
      type: "internal",

      url: "/slides/uiux-intro",
    },
    linkToQuiz: "/form/uiux-intro",
  },
];

export default function Home() {
  return (
    <main className="p-8">
      <H1>HTI Regional Program</H1>
      <nav className="text-stone-600 main-nav">
        <h2 className="text-3xl mb-4 font-bold">Content</h2>
        <ol className="list-decimal ml-4">
          {topics.map((topic) => {
            return (
              <li key={topic.key}>
                <div className="flex gap-4 mb-2">
                  <span
                    title={topic.title}
                    className="w-3/4 lg:w-96 overflow-hidden text-nowrap text-ellipsis"
                  >
                    {topic.title}
                  </span>
                  <div className="flex gap-4">
                    <NavigationLink
                      url={topic.linkToSlide?.url}
                      type={topic.linkToSlide?.type}
                    />
                    <Link href={topic.linkToQuiz} title="Quiz">
                      <ButtonForLink>&#9997; Quiz</ButtonForLink>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </main>
  );
}

function NavigationLink({
  url,
  type,
}: {
  url?: string;
  type?: "internal" | "external";
}) {
  if (!url) {
    return (
      <ButtonForLink disabled title="Not Available">
        &#9998; Slide
      </ButtonForLink>
    );
  }

  if (type === "internal") {
    return (
      <Link href={url}>
        <ButtonForLink>&#9998; Slide</ButtonForLink>
      </Link>
    );
  }

  return (
    <a href={url} target="_blank">
      <ButtonForLink>&#9998; Slide</ButtonForLink>
    </a>
  );
}

function ButtonForLink(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="min-w-14 border border-stone-700 py-1 px-2 rounded-xl bor disabled:text-stone-400 disabled:border-stone-400 disabled:cursor-not-allowed text-nowrap"
    />
  );
}
