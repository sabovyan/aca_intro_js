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
