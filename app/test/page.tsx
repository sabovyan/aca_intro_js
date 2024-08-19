import { JS_INTRO } from "@/constants/js-intro";
import { Slide } from "../components/V2";
import { SlideContentItem } from "@/types/main";

const widgets: SlideContentItem[] = [
  {
    type: "description",
    order: 1,
    content:
      "JavaScript is a versatile programming language used for web development. This section covers the basics of JavaScript, including types and variables, conditional statements, loops, functions, and classes.",
  },
  {
    order: 2,
    type: "image",
    url: "/intro_to_js/intro_to_js_slide_1.webp",
  },
];

const groups: { id: string; widgets: SlideContentItem[] }[] = [
  {
    id: "11",
    widgets: [
      {
        type: "title",
        content: "Introduction to JavaScript",
        order: 1,
      },
    ],
  },
  {
    id: "12",
    widgets: widgets,
  },
  {
    id: "13",
    widgets: [widgets[1]],
  },
];

const slide = {
  groups: groups,
};
export default function test() {
  return <Slide groups={slide.groups} />;
}
