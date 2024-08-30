import { CourseTopics, TestItem } from "@/types/questions";

export const DJANGO_QUIZ: TestItem[] = [
  {
    field: CourseTopics.BackendDevelopment,
    question: "What is backend development? / Ի՞նչ է backend ծրագրավորումը:",
    options: [
      {
        value: "a",
        label:
          "Development of the user interface / Օգտատիրոջ միջերեսի մշակումը",
      },
      {
        value: "b",
        label: "Server-side development / Սերվերի հատվածի մշակում",
      },
      { value: "c", label: "Database design / Տվյալների բազայի դիզայն" },
      {
        value: "d",
        label: "Mobile app development / Բջջային հավելվածների մշակում",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which HTTP method is used to retrieve data? / Ո՞ր HTTP մեթոդն է օգտագործվում տվյալները ստանալու համար:",
    options: [
      { value: "a", label: "GET" },
      { value: "b", label: "POST" },
      { value: "c", label: "PUT" },
      { value: "d", label: "DELETE" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question: "What is the role of an API? / Ի՞նչ դեր է կատարում API-ն:",
    options: [
      {
        value: "a",
        label:
          "It defines the frontend layout / Այն սահմանում է ֆրոնտենդի դասավորությունը",
      },
      {
        value: "b",
        label:
          "It connects the frontend with the backend / Այն կապում է ֆրոնտենդը բեքենդի հետ",
      },
      {
        value: "c",
        label: "It manages the database / Այն կառավարում է տվյալների բազան",
      },
      {
        value: "d",
        label:
          "It handles user authentication / Այն ղեկավարում է օգտատիրոջ վավերացումը",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which part of Django handles URL routing? / Django-ի ո՞ր մասն է զբաղվում URL-ների երթուղավորմամբ:",
    options: [
      { value: "a", label: "Models / Մոդելներ" },
      { value: "b", label: "Templates / Կաղապարներ" },
      { value: "c", label: "Views / Դիտումներ" },
      { value: "d", label: "URLs / URL-ներ" },
    ],
    correctAnswer: "d",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "In Django, what is a view responsible for? / Django-ում ի՞նչ է անում դիտումը:",
    options: [
      {
        value: "a",
        label: "Handling HTTP requests / HTTP հարցումների կառավարում",
      },
      {
        value: "b",
        label: "Defining database schema / Տվյալների բազայի սխեմայի սահմանում",
      },
      {
        value: "c",
        label: "Rendering HTML templates / HTML կաղապարների ցուցադրում",
      },
      {
        value: "d",
        label: "Storing user data / Օգտատիրոջ տվյալների պահպանում",
      },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What does ORM stand for in Django? / Ի՞նչ է նշանակում ORM-ը Django-ում:",
    options: [
      {
        value: "a",
        label: "Object Rendering Model",
      },
      {
        value: "b",
        label: "Object Relational Mapping",
      },
      {
        value: "c",
        label: "Online Resource Management",
      },
      {
        value: "d",
        label: "Optimal Resource Model",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which method in Django is used to filter database records? / Django-ում ո՞ր մեթոդն է օգտագործվում տվյալների բազայի գրառումները ֆիլտրելու համար:",
    options: [
      { value: "a", label: "filter()" },
      { value: "b", label: "get()" },
      { value: "c", label: "exclude()" },
      { value: "d", label: "all()" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What is the primary purpose of Django's models? / Django-ի մոդելների հիմնական նպատակը ի՞նչ է:",
    options: [
      {
        value: "a",
        label: "To manage HTTP requests / HTTP հարցումների կառավարում",
      },
      {
        value: "b",
        label:
          "To interact with the database / Տվյալների բազայի հետ փոխգործակցում",
      },
      {
        value: "c",
        label: "To handle URL routing / URL երթուղարման կառավարում",
      },
      {
        value: "d",
        label: "To render HTML templates / HTML կաղապարների ցուցադրում",
      },
    ],
    correctAnswer: "b",
  },
];
