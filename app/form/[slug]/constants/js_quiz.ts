import { CourseTopics, TestItem } from "@/types/questions";

export const js_quiz: TestItem[] = [
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "What is the correct syntax to output 'Hello World' in JavaScript? / Ո՞րն է ճիշտ սինտաքսը 'Hello World' արտածելու համար JavaScript-ում:",
    options: [
      { value: "a", label: "echo 'Hello World';" },
      { value: "b", label: "print('Hello World');" },
      { value: "c", label: "console.log('Hello World');" },
      { value: "d", label: "system.out.println('Hello World');" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "Which of the following is a JavaScript data type? / Սրանցից ո՞րն է JavaScript-ի տվյալների տիպ:",
    options: [
      { value: "a", label: "String / Տող" },
      { value: "b", label: "Boolean / Բուլյան" },
      { value: "c", label: "Number / Թիվ" },
      { value: "d", label: "All of the above / Բոլորը վերոհիշյալից" },
    ],
    correctAnswer: "d",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "Which of the following is a correct way to declare a variable with a string value in JavaScript? / Սրանցից ո՞րն է ճիշտ տարբերակ` տողի արժեքով փոփոխական հայտարարելու համար JavaScript-ում:",
    options: [
      { value: "a", label: "let name = 'John';" },
      { value: "b", label: "var name = 42;" },
      { value: "c", label: "const name = true;" },
      { value: "d", label: "name = 'John';" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "Which statement correctly uses an if/else control flow? / Ո՞ր արտահայտությունն է ճիշտ օգտագործում if/else հոսքի կառավարումը:",
    options: [
      { value: "a", label: "if (x == 5) { x++; }" },
      { value: "b", label: "if x = 5 then { x++; } else { x--; }" },
      { value: "c", label: "if (x == 5) { x++; } else { x--; }" },
      { value: "d", label: "if x == 5 { x++; } else x--;" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "Which of the following loops will correctly iterate 5 times in JavaScript? / Սրանցից ո՞ր ցիկլը ճիշտ կկրկնվի 5 անգամ JavaScript-ում:",
    options: [
      { value: "a", label: "for (let i = 0; i < 5; i++) { console.log(i); }" },
      { value: "b", label: "while (i < 5) { console.log(i); i++; }" },
      { value: "c", label: "do { console.log(i); } while (i < 5);" },
      { value: "d", label: "for (let i = 1; i < 5; i++) { console.log(i); }" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.ProgrammingLanguages,
    question:
      "How do you define a function in JavaScript? / Ինչպե՞ս է սահմանվում ֆունկցիան JavaScript-ում:",
    options: [
      { value: "a", label: "function myFunction() { /* code */ }" },
      { value: "b", label: "def myFunction() { /* code */ }" },
      { value: "c", label: "fn myFunction() => { /* code */ }" },
      { value: "d", label: "myFunction = function() { /* code */ }" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which method would you use to select an element with the ID 'header' in JavaScript? / Ո՞ր մեթոդն եք օգտագործում՝ ընտրելու 'header' ID-ով տարրը JavaScript-ում:",
    options: [
      { value: "a", label: "document.querySelector('#header')" },
      { value: "b", label: "document.querySelector('.header')" },
      { value: "c", label: "document.getElementById('header')" },
      { value: "d", label: "document.getElementsByClassName('header')[0]" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "How can you add a new list item to an unordered list with the ID 'myList'? / Ինչպե՞ս կարող եք ավելացնել նոր ցուցակ տարր 'myList' ID-ով չհերթավորված ցուցակում:",
    options: [
      {
        value: "a",
        label: "document.getElementById('myList').append(newElement);",
      },
      {
        value: "b",
        label: "document.querySelector('#myList').addItem(newElement);",
      },
      { value: "c", label: "document.createElement('li').addTo('#myList');" },
      { value: "d", label: "document.appendChild('#myList', 'li');" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.FrontendDevelopment,
    question:
      "Which event triggers when a user clicks on an HTML element? / Ո՞ր իրադարձությունն է գործարկվում, երբ օգտատերը սեղմում է HTML տարրի վրա:",
    options: [
      { value: "a", label: "onload" },
      { value: "b", label: "onchange" },
      { value: "c", label: "onclick" },
      { value: "d", label: "onmouseover" },
    ],
    correctAnswer: "c",
  },
];
