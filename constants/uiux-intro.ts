import { Slide } from "@/types/main";

export const UI_UX_SLIDES: Slide[] = [
  {
    title: "Introduction to UI/UX",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "UI (User Interface) refers to the visual elements through which users interact with a product. UX (User Experience) refers to the overall experience a user has with a product, including usability, accessibility, and pleasure.",
      },
      {
        type: "image",
        order: 3,
        url: "/ui_ux/ui_ux_first.webp",
        alt: "Illustration of the difference between UI and UX.",
      },
    ],
  },
  {
    title: "Understanding Users",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Understanding user needs, goals, and pain points is crucial in creating user-centered designs.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "number",
        items: [
          "Identify user needs.",
          "Create user personas.",
          "Map user journeys.",
        ],
      },
      {
        type: "link",
        order: 3,
        url: "https://www.nngroup.com/articles/user-research-methods/",
        title: "User Research Methods",
        description: "Learn more about various user research methods.",
      },
    ],
  },
  {
    title: "UI Design Basics",
    items: [
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Color Theory: Use colors to create visual harmony.",
          "Typography: Choose fonts that enhance readability.",
          "Spacing: Ensure sufficient spacing between elements.",
        ],
      },
      {
        type: "image",
        order: 3,
        url: "/ui_ux/ui_design_basics.webp",
        alt: "Example of a color theory chart.",
      },
    ],
  },
  {
    title: "UX Design Fundamentals",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "UX design focuses on ensuring a product is useful, easy to use, and enjoyable. It involves user research, information architecture, and interaction design.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "User Research: Understand user needs and behaviors.",
          "Information Architecture: Organize content logically.",
          "Interaction Design: Define how users interact with the interface.",
        ],
      },
      {
        type: "link",
        order: 3,
        url: "https://www.usability.gov/what-and-why/user-experience.html",
        title: "What is User Experience?",
        description: "An in-depth look at the components of UX design.",
      },
    ],
  },
  {
    title: "Prototyping and Testing",
    items: [
      // {
      //   type: "description",
      //   order: 1,
      //   content:
      //     "Prototyping is the process of creating a preliminary model of a product. Testing involves evaluating the prototype with real users to identify issues.",
      // },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Use tools like Figma or Adobe XD for prototyping.",
          "Test with a small group of users.",
          "Iterate based on feedback.",
        ],
      },
      {
        type: "image",
        order: 3,
        url: "/ui_ux/prototyping_tool.webp",
        alt: "Screenshot of a prototyping tool.",
      },
    ],
  },
  {
    title: "Design Systems and Consistency",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "A design system is a collection of reusable components and guidelines that ensure consistency across a product.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "number",
        items: [
          "Build a library of reusable UI components.",
          "Document design guidelines.",
          "Maintain consistency across all platforms.",
        ],
      },
      {
        type: "link",
        order: 3,
        url: "https://material.io/design",
        title: "Google Material Design",
        description: "Explore Google's design system.",
      },
    ],
  },
  {
    title: "Accessibility in Design",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Accessibility ensures that products are usable by people with a wide range of abilities and disabilities.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Follow WCAG guidelines.",
          "Ensure sufficient contrast between text and background.",
          "Use semantic HTML for better screen reader support.",
        ],
      },
      {
        type: "link",
        order: 3,
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        title: "WCAG Guidelines",
        description: "Learn about the Web Content Accessibility Guidelines.",
      },
    ],
  },
  {
    title: "The Future of UI/UX",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "The field of UI/UX is constantly evolving with new technologies like AI, AR/VR, and voice interfaces.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "AI-driven design: Automate design processes.",
          "AR/VR: Create immersive experiences.",
          "Voice Interfaces: Design for voice interactions.",
        ],
      },
      {
        type: "link",
        order: 3,
        url: "https://uxdesign.cc/future-of-ux-design-trends-2021-89cd42d493a6",
        title: "The Future of UX Design",
        description: "Explore emerging trends in UI/UX.",
      },
    ],
  },
];
