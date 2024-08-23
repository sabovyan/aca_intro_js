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
};

const nameToSlugMapForTests: { [k in SlugValus]: string } = {
  "devops-intro": "DevOps",
  "django-intro": "Django",
  "uiux-intro": "UI/UX",
  "py-intro": "Python",
  "js-intro": "JavaScript",
  "db-intro": "Databases",
  "qa-intro": "Quality Assurance",
};

export const SLIDES_LINKS: TLink<"slides">[] = Object.values(SLUGS).map(
  (slug) => ({
    type: "slides",
    name: nameToSlugMapForSlides[slug],
    href: `${SLIDES_PREFIX}${slug}`,
  }),
);

export const TESTS_LINKS: TLink<"form">[] = Object.values(SLUGS).map(
  (slug) => ({
    type: "form",
    name: nameToSlugMapForTests[slug],
    href: `${FORM_PAGE_PREFIX}${slug}`,
  }),
);

export const notReadyTestLinks = [
  "/form/js-intro",
  "/form/py-intro",
  "/form/db-intro",
  "/form/uiux-intro",
  "/form/django-intro",
  "",
];
