import { Slide } from "@/types/main";

export const QA_INTRO: Slide[] = [
  {
    title: "Introduction to Quality Assurance",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Quality Assurance (QA) is a process that ensures the quality of a product by identifying and fixing bugs before the product is released. It is a crucial step in software development to guarantee a smooth user experience and maintain product integrity.",
      },
      {
        type: "image",
        order: 2,
        url: "/qa_intro/intro.webp",
        alt: "Illustration of QA process",
      },
    ],
  },

  {
    title: "Lesson Content Overview",
    items: [
      {
        type: "list",
        order: 1,
        itemsType: "bullet",
        items: [
          "Introduction to Quality Assurance",
          "The QA Process",
          "Manual QA",
          "Automation QA",
          "Comparison of Manual and Automation QA",
          "The Role of QA in the Development Process",
        ],
      },
    ],
  },

  {
    title: "What is Quality Assurance?",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Quality Assurance (QA) is the practice of monitoring the software development process to ensure the quality of the product. QA involves the entire software development lifecycle and focuses on preventing defects.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Ensures product meets required quality standards",
          "Prevents bugs and issues before release",
          "Crucial for user satisfaction",
        ],
      },
    ],
  },

  {
    title: "The QA Process",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "The QA process consists of several key stages that ensure the software functions as intended and meets all quality requirements.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "number",
        items: [
          "Planning: Identifying testing needs and criteria",
          "Designing Tests: Creating test cases",
          "Execution: Running the tests",
          "Reporting: Documenting any issues found",
        ],
      },
    ],
  },

  {
    title: "Manual QA",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Manual QA involves human testers manually executing test cases to identify bugs. It is often used when the user experience needs to be evaluated or during exploratory testing.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Performed by human testers",
          "Used for exploratory testing",
          "Essential for user experience testing",
        ],
      },
    ],
  },

  {
    title: "Automation QA",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Automation QA uses tools and scripts to automatically run tests on the software. It is particularly useful for repetitive tasks and testing large datasets.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Uses tools and scripts to automate testing",
          "Ideal for repetitive tasks",
          "Useful for large datasets",
        ],
      },
    ],
  },

  {
    title: "Manual vs. Automation QA",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Both Manual and Automation QA have their pros and cons. The choice between them depends on the specific needs of the project.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Manual QA: Flexible, but time-consuming",
          "Automation QA: Fast, but requires initial setup",
          "Best results often come from a combination of both methods",
        ],
      },
    ],
  },

  {
    title: "QA in the Development Process",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "QA is integrated into every step of the development process. It involves collaboration between developers, product managers, and other stakeholders to ensure the final product is of the highest quality.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Integrated with DevOps",
          "Continuous testing throughout development",
          "Collaboration across teams",
        ],
      },
    ],
  },

  {
    title: "Conclusion",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Quality Assurance is a vital component of software development. Understanding both Manual and Automation QA will help ensure that the software not only functions as expected but also provides a positive user experience.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "QA ensures high-quality software",
          "Manual and Automation QA serve different purposes",
          "Effective QA requires collaboration and continuous testing",
        ],
      },
    ],
  },
];
