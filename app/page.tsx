import { codeToHtml } from "shiki";

import { SlideController } from "./components/SlideController";

import "./page.css";
import Image from "next/image";

const slides = [
  {
    title: "Introduction to JavaScript",
    content: {
      description:
        "JavaScript is a versatile programming language used for web development. This section covers the basics of JavaScript, including types and variables, conditional statements, loops, functions, and classes.",
      codeSnippet: "",
      image: "/intro_to_js/intro_to_js_slide_1.webp",
    },
  },
  {
    title: "Types and Variables",
    content: {
      description:
        "JavaScript has various data types such as Number, String, Boolean, Object, Undefined, and Null. Variables can be declared using var, let, and const.",
      codeSnippet:
        "let number = 5;\nconst name = 'John';\nvar isActive = true;",
      image: "",
    },
  },
  {
    title: "Conditional Statements",
    content: {
      description:
        "Conditional statements control the flow of the program based on certain conditions using if, else if, and else.",
      codeSnippet:
        "if (number > 0) {\n  console.log('Positive number');\n} else {\n  console.log('Non-positive number');\n}",
      image: "",
    },
  },
  {
    title: "Loops",
    content: {
      description:
        "Loops are used to execute a block of code repeatedly. Common loops in JavaScript include for, while, and do...while.",
      codeSnippet:
        "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\nlet j = 0;\nwhile (j < 5) {\n  console.log(j);\n  j++;\n}",
      image: "",
    },
  },
  {
    title: "Functions",
    content: {
      description:
        "Functions are reusable blocks of code designed to perform a particular task. They can be defined using function declarations or arrow functions.",
      codeSnippet:
        "function greet(name) {\n  return 'Hello, ' + name;\n}\n\nconst greet = (name) => 'Hello, ' + name;",
      image: "",
    },
  },
  {
    title: "Classes",
    content: {
      description:
        "Classes are a template for creating objects. They encapsulate data and functions that operate on that data.",
      codeSnippet:
        "class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  greet() {\n    return `Hello, my name is ${this.name}`;\n  }\n}\n\nconst john = new Person('John', 30);\nconsole.log(john.greet());",
      image: "",
    },
  },
  {
    title: "DOM Manipulation Overview",
    content: {
      description:
        "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.",
      codeSnippet: "",
      image: "/intro_to_js/dom_manipulation.webp",
    },
  },
  {
    title: "Selecting DOM Elements",
    content: {
      description:
        "You can select DOM elements using methods like getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll.",
      codeSnippet:
        "const element = \n\tdocument.getElementById('myElement');\nconst elements = \n\tdocument.querySelectorAll('.myClass');",
      image: "",
    },
  },
  {
    title: "Manipulating DOM Elements",
    content: {
      description:
        "Once selected, you can manipulate DOM elements by changing their content, style, and attributes.",
      codeSnippet:
        "element.textContent = 'New Content';\nelement.style.color = 'red';\nelement\n\t.setAttribute('data-custom', 'value');",
      image: "",
    },
  },
  {
    title: "Adding and Removing Elements",
    content: {
      description:
        "You can dynamically add and remove elements using methods like appendChild, removeChild, insertBefore, and replaceChild.",
      codeSnippet:
        "const newElement = \n\tdocument.createElement('div');\n\nparentElement.appendChild(newElement);\nparentElement.removeChild(childElement);",
      image: "",
    },
  },
  {
    title: "Event Handling",
    content: {
      description:
        "Event handling allows you to execute code in response to user actions like clicks, key presses, and form submissions.",
      codeSnippet:
        "element.addEventListener('click', \nfunction() {\n  console.log('Element clicked');\n});",
      image: "",
    },
  },
  {
    title: "Practical Example: To-Do List",
    content: {
      description:
        "In this practical example, we will create a simple to-do list application that allows users to add, remove, and mark tasks as complete.",
      codeSnippet: "// TODO",
      image: "",
    },
  },
];

export default function Home() {
  return (
    <main>
      <article className={"scroller"}>
        {slides.map(async (slide) => {
          const code = await codeToHtml(slide.content.codeSnippet, {
            lang: "javascript",
            theme: "catppuccin-mocha",
          });
          return (
            <section key={slide.title}>
              <header className="header">
                <h1>{slide.title}</h1>
              </header>
              <div className="body">
                <p className="description">{slide.content.description}</p>
                {slide.content.codeSnippet && (
                  <div
                    className="code min-h-48 flex align-center rounded-lg bg-gray-950"
                    dangerouslySetInnerHTML={{ __html: code }}
                  />
                )}

                {slide.content.image && (
                  <Image
                    loading="eager"
                    src={slide.content.image}
                    alt={`${slide.title} image`}
                    width="500"
                    height="500"
                    className="object-contain"
                  />
                )}
              </div>
            </section>
          );
        })}
        {/* <SlideController /> */}
      </article>
    </main>
  );
}
