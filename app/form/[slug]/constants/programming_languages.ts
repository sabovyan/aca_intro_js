import { CourseTopics, TestItem } from "@/types/questions";

export const programming_languages_quiz: TestItem[] = [
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "Which of the following is a type of programming language? / Սրանցից ո՞րն է ծրագրավորման լեզվի տիպ:",
    options: [
      { value: "a", label: "Procedural / Գործողությունների" },
      { value: "b", label: "Object-Oriented / Օբյեկտային կողմնորոշում" },
      { value: "c", label: "Functional / Ֆունկցիոնալ" },
      { value: "d", label: "All of the above / Բոլորը վերոհիշյալից" },
    ],
    correctAnswer: "d",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is the primary purpose of a program in a computer system? / Ո՞րն է ծրագրի հիմնական նպատակը համակարգչային համակարգում:",
    options: [
      {
        value: "a",
        label: "To perform a specific task / Կատարելու համար հատուկ առաջադրանք",
      },
      {
        value: "b",
        label: "To store data permanently / Տվյալների մշտական պահպանում",
      },
      {
        value: "c",
        label: "To manage network connections / Ցանցային կապերի կառավարում",
      },
      {
        value: "d",
        label:
          "To provide hardware support / Ապահովելու համար սարքավորման աջակցություն",
      },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is a variable in the context of programming? / Ինչ է փոփոխականը ծրագրավորման համատեքստում:",
    options: [
      {
        value: "a",
        label:
          "A storage location for data / Տվյալների պահպանման տեղադրություն",
      },
      {
        value: "b",
        label:
          "A function that performs operations / Ֆունկցիա, որը կատարում է գործողություններ",
      },
      {
        value: "c",
        label: "A type of programming language / Ծրագրավորման լեզվի տեսակ",
      },
      { value: "d", label: "A piece of hardware / Սարքավորման մաս" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is the purpose of a conditional statement in programming? / Ո՞րն է պայմանական արտահայտության նպատակը ծրագրավորման մեջ:",
    options: [
      {
        value: "a",
        label:
          "To execute code based on certain conditions / Գործարկել կոդը որոշ պայմանների հիման վրա",
      },
      {
        value: "b",
        label:
          "To repeat a block of code multiple times / Կրկնել կոդի բլոկը մի քանի անգամ",
      },
      {
        value: "c",
        label:
          "To store multiple values in a single variable / Միայն փոփոխականի մեջ պահել բազմաթիվ արժեքներ",
      },
      {
        value: "d",
        label: "To define reusable code blocks / Սահմանել կրկնվող կոդի բլոկներ",
      },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is the main characteristic of a loop in programming? / Ո՞րն է ցիկլի հիմնական հատկանիշը ծրագրավորման մեջ:",
    options: [
      {
        value: "a",
        label:
          "It repeats a block of code multiple times / Այն կրկնում է կոդի բլոկը մի քանի անգամ",
      },
      {
        value: "b",
        label:
          "It stores a sequence of values / Այն պահում է արժեքների հերթականությունը",
      },
      {
        value: "c",
        label:
          "It defines the structure of a program / Այն սահմանում է ծրագրի կառուցվածքը",
      },
      {
        value: "d",
        label:
          "It determines the data type of a variable / Այն որոշում է փոփոխականի տվյալների տիպը",
      },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is a method or function in programming? / Ինչ է մեթոդը կամ ֆունկցիան ծրագրավորման մեջ:",
    options: [
      {
        value: "a",
        label:
          "A block of code that performs a specific task / Կոդի բլոկ, որը կատարում է հատուկ առաջադրանք",
      },
      {
        value: "b",
        label:
          "A variable that stores data / Փոփոխական, որը պահպանում է տվյալներ",
      },
      { value: "c", label: "A type of loop / Ցիկլի տեսակ" },
      { value: "d", label: "A programming language / Ծրագրավորման լեզու" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is a class in the context of object-oriented programming? / Ինչ է դասը օբյեկտային կողմնորոշման ծրագրավորման համատեքստում:",
    options: [
      {
        value: "a",
        label: "A blueprint for creating objects / Օբյեկտներ ստեղծելու պլան",
      },
      {
        value: "b",
        label:
          "A loop that iterates through data / Ցիկլ, որը անցնում է տվյալների միջով",
      },
      {
        value: "c",
        label:
          "A function that returns a value / Ֆունկցիա, որը վերադարձնում է արժեք",
      },
      { value: "d", label: "A type of variable / Փոփոխականի տեսակ" },
    ],
    correctAnswer: "a",
  },
];
