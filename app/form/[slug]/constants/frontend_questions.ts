import { CourseTopics, TestItem } from "@/types/questions";

export const FRONTEND_QUESTIONS: TestItem[] = [
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "What is the role of frontend development? / Ի՞նչ է frontend ծրագրավորման դերը։",
    options: [
      {
        value: "a",
        label: "Managing databases / Տվյալների բազաների կառավարում",
      },
      {
        value: "b",
        label: "Creating user interfaces / Օգտագործողի միջերեսների ստեղծում",
      },
      { value: "c", label: "Setting up servers / Սերվերների կարգավորում" },
      { value: "d", label: "Writing backend code / Հետևի կոդի գրառում" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which language is used to structure a webpage? / Ո՞ր լեզուն է օգտագործվում վեբ էջի կառուցվածքի համար։",
    options: [
      { value: "a", label: "CSS" },
      { value: "b", label: "JavaScript" },
      { value: "c", label: "HTML" },
      { value: "d", label: "Python" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which property is used in CSS to change the text color of an element? / Ո՞ր հատկությունն է օգտագործվում CSS-ում տարրի տեքստի գույնը փոխելու համար։",
    options: [
      { value: "a", label: "color" },
      { value: "b", label: "font-color" },
      { value: "c", label: "text-color" },
      { value: "d", label: "background-color" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which of these is a CSS property? / Նշվածներից ո՞րն է CSS հատկություն։",
    options: [
      { value: "a", label: "font-size" },
      { value: "b", label: "getElementById" },
      { value: "c", label: "alert" },
      { value: "d", label: "console.log" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "What is the purpose of HTML? / Ի՞նչ նպատակով է օգտագործվում HTML-ը։",
    options: [
      { value: "a", label: "To style web pages / Վեբ էջերը ձևավորելու համար" },
      {
        value: "b",
        label:
          "To create the structure of web pages / Վեբ էջերի կառուցվածքը ստեղծելու համար",
      },
      {
        value: "c",
        label:
          "To add interactivity to web pages / Վեբ էջերին ինտերակտիվություն ավելացնելու համար",
      },
      {
        value: "d",
        label: "To manage databases / Տվյալների բազաները կառավարելու համար",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which HTML tag is used for the largest heading? / Ո՞ր HTML պիտակն (tag) է օգտագործվում ամենամեծ վերնագրի համար։",
    options: [
      { value: "a", label: "<h1>" },
      { value: "b", label: "<h6>" },
      { value: "c", label: "<header>" },
      { value: "d", label: "<head>" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "How do you add a background color in CSS? / Ինչպե՞ս եք ավելացնում հետին պլանի գույն CSS-ում։",
    options: [
      { value: "a", label: "background-color" },
      { value: "b", label: "color" },
      { value: "c", label: "bgcolor" },
      { value: "d", label: "background-image" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which HTML tag is used for creating a hyperlink? / Ո՞ր HTML պիտակն է օգտագործվում հիպերհղում ստեղծելու համար։",
    options: [
      { value: "a", label: "<a>" },
      { value: "b", label: "<link>" },
      { value: "c", label: "<href>" },
      { value: "d", label: "<img>" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "What is the correct HTML tag for inserting an image? / Ո՞րն է ճիշտ HTML պիտակը պատկեր տեղադրելու համար։",
    options: [
      { value: "a", label: "<img>" },
      { value: "b", label: "<image>" },
      { value: "c", label: "<picture>" },
      { value: "d", label: "<src>" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "What does the 'id' attribute do in HTML? / Ի՞նչ է անում 'id' ատրիբուտը HTML-ում։",
    options: [
      {
        value: "a",
        label:
          "Specifies a unique ID for an element / Նշում է տարրի յուրահատուկ ID",
      },
      {
        value: "b",
        label: "Defines the style of an element / Սահմանում է տարրի ոճը",
      },
      { value: "c", label: "Links a CSS file / Կապում է CSS ֆայլ" },
      {
        value: "d",
        label: "Creates a link to another page / Ստեղծում է հղում դեպի այլ էջ",
      },
    ],
    correctAnswer: "a",
  },
];
