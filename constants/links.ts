import { TLink } from "@/types/link";
import { SLUGS } from "./slugs";

const SLIDES = "/slides/";

type SlugValus = (typeof SLUGS)[keyof typeof SLUGS];

const nameToSlugMapForSlides: { [k in SlugValus]: string } = {
  "db-intro": "Intro To Databases",
  "js-intro": "Intro To JavaScript",
  "py-intro": "Intro To Python",
  "uiux-intro": "Intro to UI/UX",
  "devops-intro": "Intro To Devops",
  "django-intro": "Intro To Django",
};

export const SLIDES_LINKS: TLink<"slide">[] = Object.values(SLUGS).map(
  (slug) => ({
    type: "slide",
    name: nameToSlugMapForSlides[slug],
    href: `${SLIDES}${slug}`,
  }),
);

// export const SLIDES_LINKS: TLink<"slide">[] = [
//   {
//     type: "slide",
//     name: "Intro To JavaScript",
//     href: `${SLIDES}/js-intro`,
//   },
//   {
//     type: "slide",
//     name: "Intro To Python",
//     href: `${SLIDES}/py-intro`,
//   },
//   {
//     type: "slide",
//     name: "Intro To Django",
//     href: `${SLIDES}/django-intro`,
//   },
//   {
//     type: "slide",
//     name: "Intro To Databases",
//     href: `${SLIDES}/db-intro`,
//   },
//   {
//     type: "slide",
//     name: "Intro to UI/UX",
//     href: `${SLIDES}/uiux-intro`,
//   },
//   {
//     type: "slide",
//     name: "Intro To Devops",
//     href: `${SLIDES}/devops-intro`,
//   },
// ];
