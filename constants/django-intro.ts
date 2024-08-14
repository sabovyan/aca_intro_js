import { Slide } from "@/types/main";

export const DJANGO_INTRO: Slide[] = [
  {
    title: "Introduction to Django and Backend Development",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Backend development focuses on server-side logic, databases, and application architecture. Django is a high-level Python web framework that enables rapid development.",
      },
      {
        type: "image",
        order: 2,
        url: "/django_intro/django_intro.png",
        alt: "Django Logo",
      },
    ],
  },
  {
    title: "Content",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In this lesson, \n - we'll set up our development environment - create a simple 'Hello, World!' application using Django.",
      },
    ],
  },
  {
    title: "Setting Up Django",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "To start with Django, we first need to install it using pip. Then, we can create a new Django project using the `django-admin` command.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "pip install django\n\ndjango-admin startproject mysite",
      },
    ],
  },
  {
    title: "Understanding Django’s MVC (MTV) Architecture",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Django follows the Model-Template-View (MTV) architecture (aka MVC pattern). In MTV, the View receives a web request, interacts with the Model, and returns a Template (HTML) response.",
      },
      {
        type: "image",
        order: 3,
        url: "/django_intro/mtv_architecture.webp",
        alt: "MTV Architecture Diagram",
      },
    ],
  },
  {
    title: "Creating a Simple View in Django",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Let's create a simple Django view that returns a 'Hello, World!' response. This is your first step into dynamic web content with Django.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from django.http import HttpResponse\n\n def hello_world(request):\n     return HttpResponse('Hello, World!')",
      },
    ],
  },
  {
    title: "Building RESTful APIs with Django",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "RESTful APIs allow different software applications to communicate with each other. Django REST Framework (DRF) is a powerful tool to build APIs in Django.",
      },
      {
        type: "image",
        order: 2,
        url: "/django_intro/resful_apis_with_django.webp",
        alt: "REST API Example",
      },
    ],
  },
  {
    title: "Creating an API Endpoint",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Let's create a simple API endpoint to handle HTTP GET requests using Django REST Framework.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from rest_framework.views import APIView\nfrom rest_framework.response import Response\n\nclass HelloWorld(APIView):\n    def get(self, request):\n        return Response({'message': 'Hello, World!'})",
      },
    ],
  },
];
