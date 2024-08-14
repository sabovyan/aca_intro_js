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
        type: "list",
        order: 1,
        itemsType: "bullet",
        items: [
          "we'll set up our development environment",
          "create a simple 'Hello, World!' application using Django.",
          "we'll build a RESTful API using Django",
        ],
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
  {
    title: "Creating a To-Do API: Project Setup",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In this section, we will create a simple To-Do API using Django and Django REST Framework. Let's start by setting up the project and the necessary apps.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content:
          "django-admin startproject todo_api\ncd todo_api\ndjango-admin startapp tasks\npip install djangorestframework",
      },
    ],
  },
  {
    title: "Defining the To-Do Model",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "We need to define a model to represent a to-do item. This model will include fields like task name, description, and completion status.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from django.db import models\n\nclass Task(models.Model):\n    title = models.CharField(max_length=100)\n    description = models.TextField(blank=True)\n    completed = models.BooleanField(default=False)\n\n    def __str__(self):\n        return self.title",
      },
    ],
  },
  {
    title: "Creating a Serializer for the To-Do Model",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Serializers in Django REST Framework are used to convert complex data types, such as querysets, into native Python datatypes that can then be easily rendered into JSON or other content types.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from rest_framework import serializers\nfrom .models import Task\n\nclass TaskSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Task\n        fields = '__all__'",
      },
    ],
  },
  {
    title: "Creating Views for the To-Do API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Next, we create views to handle the API endpoints for listing, creating, updating, and deleting tasks.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from rest_framework import viewsets\nfrom .models import Task\nfrom .serializers import TaskSerializer\n\nclass TaskViewSet(viewsets.ModelViewSet):\n    queryset = Task.objects.all()\n    serializer_class = TaskSerializer",
      },
    ],
  },
  {
    title: "Configuring URLs for the To-Do API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "To expose our API, we need to configure the URL routing. We'll use Django's `router` to automatically generate routes for our API views.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from django.urls import path, include\nfrom rest_framework.routers import DefaultRouter\nfrom .views import TaskViewSet\n\nrouter = DefaultRouter()\nrouter.register(r'tasks', TaskViewSet)\n\nurlpatterns = [\n    path('', include(router.urls)),\n]",
      },
    ],
  },
  {
    title: "Testing the To-Do API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "With everything set up, we can now test our API. You can use tools like Postman or the Django REST Framework's built-in API browser.",
      },
      {
        type: "description",
        order: 2,
        content:
          "Test the endpoints for creating, retrieving, updating, and deleting tasks. Ensure everything works as expected.",
      },
    ],
  },
];
