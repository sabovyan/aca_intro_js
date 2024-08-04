import { Slide } from "@/types/main";
import { SlideBody } from "../components/SlideBody";

import "./page.css";

const new_struct: Slide[] = [
  {
    title: "Introduction to JavaScript",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "JavaScript is a versatile programming language used for web development. This section covers the basics of JavaScript, including types and variables, conditional statements, loops, functions, and classes.",
      },
      {
        order: 2,
        type: "image",
        url: "/intro_to_js/intro_to_js_slide_1.webp",
      },
    ],
  },
  {
    title: "Types and Variables",
    items: [
      {
        type: "description",
        content:
          "JavaScript has various data types such as Number, String, Boolean, Object, Undefined, and Null. Variables can be declared using var, let, and const.",
        order: 1,
      },
      {
        type: "code",
        content: "let number = 5;\nconst name = 'John';\nvar isActive = true;",
        order: 2,
      },
    ],
  },
  {
    title: "Conditional Statements",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Conditional statements control the flow of the program based on certain conditions using if, else if, and else.",
      },
      {
        order: 2,
        type: "code",
        content:
          "if (number > 0) {\n  console.log('Positive number');\n} else {\n  console.log('Non-positive number');\n}",
      },
    ],
  },

  {
    title: "Loops",
    items: [
      {
        order: 1,
        type: "description",
        content:
          "Loops are used to execute a block of code repeatedly. Common loops in JavaScript include for, while, and do...while.",
      },
      {
        order: 2,
        type: "code",
        content:
          "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\nlet j = 0;\nwhile (j < 5) {\n  console.log(j);\n  j++;\n}",
      },
    ],
  },
  {
    title: "Functions",
    items: [
      {
        order: 1,
        type: "description",
        content:
          "Functions are reusable blocks of code designed to perform a particular task. They can be defined using function declarations or arrow functions.",
      },
      {
        order: 2,
        type: "code",
        content:
          "function greet(name) {\n  return 'Hello, ' + name;\n}\n\nconst greet = (name) => 'Hello, ' + name;",
      },
    ],
  },
  {
    title: "Classes",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Classes are a template for creating objects. They encapsulate data and functions that operate on that data.",
      },
      {
        type: "code",
        order: 2,
        content:
          "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n}\n\nconst john = new Person('John', 30);\nconsole.log(john.greet());",
      },
    ],
  },
  {
    title: "DOM Manipulation Overview",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.",
      },
      {
        type: "image",
        order: 2,
        url: "/intro_to_js/dom_manipulation.webp",
      },
    ],
  },
  {
    title: "Selecting DOM Elements",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "You can select DOM elements using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.",
      },
      {
        type: "code",
        order: 2,
        content:
          "const element = document.getElementById('myElement');\nconst elements = document.querySelectorAll('.myClass');",
      },
    ],
  },
  {
    title: "Manipulating DOM Elements",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Once selected, you can manipulate DOM elements by changing their content, style, and attributes.",
      },
      {
        type: "code",
        order: 2,
        content:
          "element.textContent = 'New Content';\nelement.style.color = 'red';\nelement.setAttribute('data-custom', 'value');",
      },
    ],
  },
  {
    title: "Adding and Removing Elements",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "You can dynamically add and remove elements using methods like appendChild, removeChild, insertBefore, and replaceChild.",
      },
      {
        type: "code",
        order: 2,
        content:
          "const newElement = document.createElement('div');\n\nparentElement.appendChild(newElement);\nparentElement.removeChild(childElement);",
      },
    ],
  },
  {
    title: "Event Handling",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Event handling allows you to execute code in response to user actions like clicks, key presses, and form submissions.",
      },
      {
        type: "code",
        order: 2,
        content:
          "element.addEventListener('click', \nfunction() {\n  console.log('Element clicked');\n});",
      },
    ],
  },
  {
    title: "Practical Example: To-Do List",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In this practical example, we will create a simple to-do list application that allows users to add, remove, and mark tasks as complete.",
      },
      {
        type: "code",
        order: 2,
        content: "// TODO",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <article className={"scroller"}>
        {new_struct.map(async (slide) => {
          return (
            <section key={slide.title}>
              <header className="header">
                <h1>{slide.title}</h1>
              </header>
              <SlideBody items={slide.items} title={slide.title} />
            </section>
          );
        })}
      </article>
    </main>
  );
}
