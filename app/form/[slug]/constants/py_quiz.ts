import { CourseTopics, TestItem } from "@/types/questions";

export const py_quiz: TestItem[] = [
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What is the correct way to print 'Hello, World!' in Python? / Ինչպե՞ս ճիշտ տպել 'Hello, World!' Python-ում:",
    options: [
      { value: "a", label: "echo 'Hello, World!'" },
      { value: "b", label: "print('Hello, World!')" },
      { value: "c", label: "console.log('Hello, World!')" },
      { value: "d", label: "printf('Hello, World!')" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which of the following is a valid Python variable name? / Նշվածներից ո՞րն Է Python-ի ճիշտ փոփոխական:",
    options: [
      { value: "a", label: "1st_variable" },
      { value: "b", label: "variable_name" },
      { value: "c", label: "variable-name" },
      { value: "d", label: "variable name" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which Python keyword is used for defining a function? / Python-ի Ո՞ր բանալի բառն է օգտագործվում ֆունկցիա սահմանելու համար:",
    options: [
      { value: "a", label: "func" },
      { value: "b", label: "define" },
      { value: "c", label: "def" },
      { value: "d", label: "function" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What is the output of the following code: print(2 + 3 * 4)? / Ինչպիսի՞ն է հետևյալ կոդի արդյունքը՝ print(2 + 3 * 4).",
    options: [
      { value: "a", label: "14" },
      { value: "b", label: "20" },
      { value: "c", label: "24" },
      { value: "d", label: "10" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "How do you start a for loop in Python? / Ինչպե՞ս եք Python-ում սկսում 'for' ցիկլը.",
    options: [
      { value: "a", label: "for i in range(10):" },
      { value: "b", label: "for (i = 0; i < 10; i++)" },
      { value: "c", label: "for i to 10:" },
      { value: "d", label: "foreach i in range(10):" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What is the correct syntax to create a class in Python? / Ո՞րն է Python-ում դաս ստեղծելու ճիշտ շարահյուսությունը.",
    options: [
      { value: "a", label: "class MyClass {}" },
      { value: "b", label: "class MyClass:" },
      { value: "c", label: "def MyClass:" },
      { value: "d", label: "class MyClass()" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which of the following is a valid if statement in Python? / Նշվածներից որը՞ է ճիշտ 'if' հայտարարությունը Python-ում.",
    options: [
      { value: "a", label: "if x == 10 then:" },
      { value: "b", label: "if (x == 10):" },
      { value: "c", label: "if x = 10:" },
      { value: "d", label: "if x == 10:" },
    ],
    correctAnswer: "d",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "How do you handle exceptions in Python? / Ինչպե՞ս եք Python-ում մշակում բացառությունները.",
    options: [
      { value: "a", label: "try/except" },
      { value: "b", label: "try/catch" },
      { value: "c", label: "attempt/except" },
      { value: "d", label: "try/error" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which keyword is used to create an object in Python? / Ո՞ր բանալի բառն է օգտագործվում Python-ում օբյեկտ ստեղծելու համար.",
    options: [
      { value: "a", label: "new" },
      { value: "b", label: "create" },
      { value: "c", label: "object" },
      { value: "d", label: "None of the above" },
    ],
    correctAnswer: "d",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What does the len() function do in Python? / Ի՞նչ է անում len() ֆունկցիան Python-ում.",
    options: [
      { value: "a", label: "Returns the length of an object" },
      { value: "b", label: "Returns the length of a list" },
      { value: "c", label: "Returns the length of a string" },
      { value: "d", label: "All of the above" },
    ],
    correctAnswer: "d",
  },
];
