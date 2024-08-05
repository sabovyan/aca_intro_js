import type { Slide } from "@/types/main";

export const PY_SLIDES: Slide[] = [
  {
    title: "Introduction to Python",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Welcome to the Introduction to Python! In this lesson, we will cover the basics of Python programming, including setup, basic syntax, and foundational concepts.",
      },
      {
        type: "image",
        order: 2,
        url: "/py_intro/welcome_image.webp",
        alt: "Python Logo",
      },
    ],
  },
  {
    title: "Setting Up Python",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "To start coding in Python, you'll need to install Python on your computer. Visit the official Python website and download the latest version for your operating system.",
      },
      // {
      //   type: 'link',
      //   order: 2,
      //
      // },
      // {
      //   type: "image",
      //   order: 2,
      //   url: "https://www.python.org/static/img/python-logo.png",
      //   alt: "Python Website",
      // },
    ],
  },
  {
    title: "Hello, World!",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Let's start with a classic first program: printing 'Hello, World!' to the console. This simple program will help you understand how to write and run Python code.",
      },
      {
        type: "code",
        order: 2,
        content: "print('Hello, World!')",
      },
    ],
  },
  {
    title: "Variables and Types",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In Python, variables are used to store data. Let's learn how to create variables and explore different data types such as strings, integers, and floats.",
      },
      {
        type: "code",
        order: 2,
        content: "name = 'Alice'\nage = 25\nheight = 5.6",
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
          "Conditional statements allow you to execute different code blocks based on certain conditions. Let's see how to use if, elif, and else statements in Python.",
      },
      {
        type: "code",
        order: 2,
        content:
          "if age > 18:\n    print('You are an adult.')\nelse:\n    print('You are a minor.')",
      },
    ],
  },
  {
    title: "Loops",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Loops are used to repeat a block of code multiple times. Python provides two types of loops: for loops and while loops. Let's look at examples of each.",
      },
      {
        type: "code",
        order: 2,
        content:
          "for i in range(5):\n    print(i)\n\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1",
      },
    ],
  },
  {
    title: "Functions",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Functions allow you to encapsulate code into reusable blocks. Let's learn how to define and call functions in Python.",
      },
      {
        type: "code",
        order: 2,
        content:
          "def greet(name):\n    print('Hello, ' + name)\n\ngreet('Alice')",
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
          "Classes and objects are the foundation of object-oriented programming in Python. Let's create a simple class and see how it works.",
      },
      {
        type: "code",
        order: 2,
        content:
          "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def introduce(self):\n        print(f'My name is {self.name} and I am {self.age} years old.')\n\nperson = Person('Alice', 25)\nperson.introduce()",
      },
    ],
  },
];
