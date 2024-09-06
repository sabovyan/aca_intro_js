import { TLink } from "@/types/link";
import { SLUGS } from "./slugs";

const SLIDES_PREFIX = "/slides/";
const FORM_PAGE_PREFIX = "/form/";

type SlugValus = (typeof SLUGS)[keyof typeof SLUGS];

const nameToSlugMapForSlides: { [k in SlugValus]: string } = {
  "db-intro": "Intro To Databases",
  "js-intro": "Intro To JavaScript",
  "py-intro": "Intro To Python",
  "uiux-intro": "Intro to UI/UX",
  "devops-intro": "Intro To Devops",
  "django-intro": "Intro To Django",
  "qa-intro": "Intro To Quality Assurance",
  "ecosystem-intro": "Intro To The Ecosystem",
  "programming-languages-intro": "intro to Programming Languages",
  "frontend-intro": "Basics of frontend development",
  "ml-intro": "Intro to ML",
};

const nameToSlugMapForTests: { [k in SlugValus]: string } = {
  "devops-intro": "DevOps",
  "django-intro": "Django",
  "uiux-intro": "UI/UX",
  "py-intro": "Python",
  "js-intro": "JavaScript",
  "db-intro": "Databases",
  "qa-intro": "Quality Assurance",
  "ecosystem-intro": "Ecosystem",
  "programming-languages-intro": "Programming Languages",
  "frontend-intro": "Basics of frontend development",
  "ml-intro": "intro to ML",
};

const SlugOrder: { [k in SlugValus]: number } = {
  "ecosystem-intro": 1,
  "programming-languages-intro": 2,
  "frontend-intro": 3,
  "js-intro": 4,
  "py-intro": 5,
  "django-intro": 6,
  "db-intro": 7,
  "devops-intro": 8,
  "qa-intro": 9,
  "uiux-intro": 10,
  "ml-intro": 11,
};

export const SLIDES_LINKS: TLink<"slides">[] = Object.values(SLUGS).map(
  (slug) => ({
    type: "slides",
    order: SlugOrder[slug],
    name: nameToSlugMapForSlides[slug],
    href: `${SLIDES_PREFIX}${slug}`,
  }),
);

export const quiz_links: TLink<"form">[] = Object.values(SLUGS).map((slug) => ({
  type: "form",
  order: SlugOrder[slug],
  name: nameToSlugMapForTests[slug],
  href: `${FORM_PAGE_PREFIX}${slug}`,
}));

export const notAvailableSlideLinks = [
  "/slides/ecosystem-intro",
  "/slides/frontend-intro",
  "/slides/programming-languages-intro",
];
