import { Slide } from "@/types/main";

export const DJANGO_INTRO: Slide[] = [
  {
    title: "Introduction to Django REST API (Without DRF)",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In this lesson, we will build a simple REST API for a To-Do application using only Django’s built-in features, without relying on Django REST Framework.",
      },
      {
        type: "description",
        order: 2,
        content:
          "We will manually handle HTTP requests and responses, giving you a deeper understanding of how APIs work under the hood.",
      },
    ],
  },
  {
    title: "Setting Up Django",
    items: [
      {
        type: "code",
        order: 1,
        content: "pip install django",
        lang: "bash",
      },
      {
        type: "description",
        order: 2,
        content:
          "After installing Django, you can start by setting up a new Django project.",
      },
      {
        type: "code",
        lang: "bash",
        order: 3,
        content: "django-admin startproject myproject",
      },
    ],
  },
  {
    title: "Creating the To-Do App",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Next, create a new app within your Django project to handle the To-Do functionality.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content:
          "# This will create a new directory called 'todo' with the necessary files to start building your application.\npython manage.py startapp todo",
      },
    ],
  },
  {
    title: "Defining the Task Model",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "The first step is to define the Task model that will store our to-do items.",
      },
      {
        type: "code",
        order: 2,
        lang: "python",
        content:
          "from django.db import models\n\nclass Task(models.Model):\n    title = models.CharField(max_length=100)\n    description = models.TextField()\n    completed = models.BooleanField(default=False)\n\n    def __str__(self):\n        return self.title",
      },
      {
        type: "description",
        order: 3,
        content:
          "This model has fields for a title, description, and a boolean field to track whether the task is completed.",
      },
    ],
  },
  {
    title: "Creating Views for the REST API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "In Django, views handle the logic for your web application. We’ll write views that handle different HTTP methods (GET, POST, PUT, DELETE) to interact with our Task model.",
      },
      {
        type: "code",
        order: 2,
        lang: "python",
        content:
          "# This view handles GET requests to list all tasks and POST requests to create a new task.\nfrom django.http import JsonResponse\nfrom django.views.decorators.csrf import csrf_exempt\nfrom .models import Task\nimport json\n\n@csrf_exempt\n\ndef task_list(request):\n    if request.method == 'GET':\n        tasks = Task.objects.all()\n        tasks_list = list(tasks.values())\n        return JsonResponse(tasks_list, safe=False)\n    elif request.method == 'POST':\n        data = json.loads(request.body)\n        task = Task.objects.create(title=data['title'], description=data['description'])\n        return JsonResponse({'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed})",
      },
    ],
  },
  {
    title: "Handling Individual Task Operations",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Next, we’ll write views to handle GET, PUT, and DELETE operations for individual tasks.",
      },
      {
        type: "code",
        order: 2,
        lang: "python",
        content:
          "# This view handles GET, PUT, and DELETE requests for a specific task, identified by its ID.\nfrom django.shortcuts import get_object_or_404\n\n@csrf_exempt\n\ndef task_detail(request, task_id):\n    task = get_object_or_404(Task, id=task_id)\n    if request.method == 'GET':\n        return JsonResponse({'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed})\n    elif request.method == 'PUT':\n        data = json.loads(request.body)\n        task.title = data['title']\n        task.description = data['description']\n        task.completed = data['completed']\n        task.save()\n        return JsonResponse({'id': task.id, 'title': task.title, 'description': task.description, 'completed': task.completed})\n    elif request.method == 'DELETE':\n        task.delete()\n        return JsonResponse({'message': 'Task deleted'})",
      },
    ],
  },
  {
    title: "Configuring URLs for the API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Finally, we need to configure the URLs to map HTTP requests to the appropriate views.",
      },
      {
        type: "code",
        order: 2,
        lang: "python",
        content:
          "# This URL configuration sets up routes for listing tasks, creating new tasks, and performing operations on individual tasks.\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('tasks/', views.task_list, name='task_list'),\n    path('tasks/<int:task_id>/', views.task_detail, name='task_detail'),\n]",
      },
    ],
  },
  {
    title: "Testing the API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "You can test your API using tools like Postman or Curl by sending GET, POST, PUT, and DELETE requests to the appropriate endpoints.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content:
          "# Use this URL to interact with your To-Do API. \n# You can list, create, update, and delete tasks.\nhttp://127.0.0.1:8000/tasks/",
      },
    ],
  },
  {
    title: "Conclusion",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Congratulations! You’ve built a simple REST API for a To-Do application using Django, without relying on Django REST Framework.",
      },
      {
        type: "link",
        order: 2,
        url: "https://docs.djangoproject.com/en/stable/topics/http/urls/",
        title: "Django URL Dispatcher",
        description:
          "Learn more about Django’s URL dispatcher and how to manage URL patterns in your project.",
      },
    ],
  },
];
