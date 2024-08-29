import { Slide } from "@/types/main";

export const UI_UX_SLIDES: Slide[] = [
  {
    title: "Welcome to Intro to UI/UX Design",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Welcome! Get ready to dive into the world of User Interface (UI) and User Experience (UX) design. In this session, we'll explore the basics of design and get hands-on with popular tools.",
      },
      {
        type: "image",
        order: 2,
        url: "/ui_ux/ui_ux_first.webp",
        alt: "An inspiring UI/UX design image",
      },
    ],
  },
  {
    title: "What We'll Learn Today",
    items: [
      {
        type: "list",
        order: 1,
        itemsType: "bullet",
        items: [
          "Introduction to UI/UX Design",
          "Overview Figma",
          "Key Design Principles",
          "Hands-on Practice with a Design Tool",
          "Q&A and Recap",
        ],
      },
    ],
  },
  {
    title: "Introduction to UI/UX Design",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "UI (User Interface) and UX (User Experience) are crucial aspects of any digital product. UI focuses on the look and feel, while UX is all about the overall experience of the user.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "UI: How the product looks.",
          "UX: How the product feels and works.",
          "Importance: Good design leads to better user satisfaction and engagement.",
        ],
      },
    ],
  },
  {
    title: "Introduction to Design Tools",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In this section, we’ll explore Figma. You’ll learn the basics and how to start creating simple designs.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Figma: A web-based tool for UI/UX design and collaboration.",
          "Basic Features: Layers, shapes, text, color palettes, etc.",
        ],
      },
    ],
  },
  {
    title: "Hands-on Practice",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Now, let’s dive into a hands-on practice session. We’ll create a simple wireframe or mockup using the chosen design tool.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "number",
        items: [
          "Open your design tool (Figma).",
          "Create a new project.",
          "Use shapes and text tools to create a basic layout.",
          "Experiment with layers and colors.",
          "Save your work and share with a partner for feedback.",
        ],
      },
    ],
  },
  {
    title: "Design Principles",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Understanding and applying design principles is key to creating effective and visually appealing designs. Let’s review the core principles:",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Alignment: Organizing elements in a way that creates a visual connection.",
          "Balance: Distributing elements evenly to create a sense of stability.",
          "Contrast: Using differences to make elements stand out.",
          "Hierarchy: Guiding the viewer’s eye through the design.",
          "Repetition: Creating consistency and unity by reusing elements.",
          "Proximity: Grouping related elements to create a relationship between them.",
        ],
      },
    ],
  },
  {
    title: "Design Critique & Application",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Let’s put the design principles into practice. We’ll review some designs together and identify the principles applied or violated.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "number",
        items: [
          "Review the provided designs.",
          "Identify the design principles in each.",
          "Discuss the impact of these principles on the overall user experience.",
          "Apply these principles to improve your wireframe/mockup.",
        ],
      },
    ],
  },
  {
    title: "Recap & Q&A",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "We’ve covered a lot today! Let’s recap the key points and answer any questions you may have.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "UI/UX Basics: What they are and why they matter.",
          "Design Tools: Getting started with Photoshop or Figma.",
          "Design Principles: Core concepts to guide your designs.",
          "Practice: Applying what you’ve learned in hands-on activities.",
        ],
      },
      {
        type: "description",
        order: 3,
        content:
          "Thank you for your participation! Feel free to ask any questions or share your designs.",
      },
    ],
  },
];

//   [
//
//   {
//     title: "Introduction to UI/UX",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "UI (User Interface) refers to the visual elements through which users interact with a product. UX (User Experience) refers to the overall experience a user has with a product, including usability, accessibility, and pleasure.",
//       },
//       {
//         type: "image",
//         order: 3,
//         url: "/ui_ux/ui_ux_first.webp",
//         alt: "Illustration of the difference between UI and UX.",
//       },
//     ],
//   },
//   {
//     title: "Understanding Users",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "Understanding user needs, goals, and pain points is crucial in creating user-centered designs.",
//       },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "number",
//         items: [
//           "Identify user needs.",
//           "Create user personas.",
//           "Map user journeys.",
//         ],
//       },
//       {
//         type: "link",
//         order: 3,
//         url: "https://www.nngroup.com/articles/user-research-methods/",
//         title: "User Research Methods",
//         description: "Learn more about various user research methods.",
//       },
//     ],
//   },
//   {
//     title: "UI Design Basics",
//     items: [
//       {
//         type: "list",
//         order: 2,
//         itemsType: "bullet",
//         items: [
//           "Color Theory: Use colors to create visual harmony.",
//           "Typography: Choose fonts that enhance readability.",
//           "Spacing: Ensure sufficient spacing between elements.",
//         ],
//       },
//       {
//         type: "image",
//         order: 3,
//         url: "/ui_ux/ui_design_basics.webp",
//         alt: "Example of a color theory chart.",
//       },
//     ],
//   },
//   {
//     title: "UX Design Fundamentals",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "UX design focuses on ensuring a product is useful, easy to use, and enjoyable. It involves user research, information architecture, and interaction design.",
//       },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "bullet",
//         items: [
//           "User Research: Understand user needs and behaviors.",
//           "Information Architecture: Organize content logically.",
//           "Interaction Design: Define how users interact with the interface.",
//         ],
//       },
//       {
//         type: "link",
//         order: 3,
//         url: "https://www.usability.gov/what-and-why/user-experience.html",
//         title: "What is User Experience?",
//         description: "An in-depth look at the components of UX design.",
//       },
//     ],
//   },
//   {
//     title: "Prototyping and Testing",
//     items: [
//       // {
//       //   type: "description",
//       //   order: 1,
//       //   content:
//       //     "Prototyping is the process of creating a preliminary model of a product. Testing involves evaluating the prototype with real users to identify issues.",
//       // },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "bullet",
//         items: [
//           "Test with a small group of users.",
//           "Iterate based on feedback.",
//         ],
//       },
//       {
//         type: "image",
//         order: 3,
//         url: "/ui_ux/prototyping_tool.webp",
//         alt: "Screenshot of a prototyping tool.",
//       },
//     ],
//   },
//   {
//     title: "Design Systems and Consistency",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "A design system is a collection of reusable components and guidelines that ensure consistency across a product.",
//       },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "number",
//         items: [
//           "Build a library of reusable UI components.",
//           "Document design guidelines.",
//           "Maintain consistency across all platforms.",
//         ],
//       },
//       {
//         type: "link",
//         order: 3,
//         url: "https://material.io/design",
//         title: "Google Material Design",
//         description: "Explore Google's design system.",
//       },
//     ],
//   },
//   {
//     title: "Accessibility in Design",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "Accessibility ensures that products are usable by people with a wide range of abilities and disabilities.",
//       },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "bullet",
//         items: [
//           "Follow WCAG guidelines.",
//           "Ensure sufficient contrast between text and background.",
//           "Use semantic HTML for better screen reader support.",
//         ],
//       },
//       {
//         type: "link",
//         order: 3,
//         url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
//         title: "WCAG Guidelines",
//         description: "Learn about the Web Content Accessibility Guidelines.",
//       },
//     ],
//   },
//   {
//     title: "The Future of UI/UX",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "The field of UI/UX is constantly evolving with new technologies like AI, AR/VR, and voice interfaces.",
//       },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "bullet",
//         items: [
//           "AI-driven design: Automate design processes.",
//           "AR/VR: Create immersive experiences.",
//           "Voice Interfaces: Design for voice interactions.",
//         ],
//       },
//       {
//         type: "link",
//         order: 3,
//         url: "https://uxdesign.cc/future-of-ux-design-trends-2021-89cd42d493a6",
//         title: "The Future of UX Design",
//         description: "Explore emerging trends in UI/UX.",
//       },
//     ],
//   },
// ];
