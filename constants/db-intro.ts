import { Slide } from "@/types/main";

export const DB_SLIDES: Slide[] = [
  {
    title: "Introduction to Databases",
    items: [
      {
        type: "image",
        order: 1,
        url: "/db_intro/db_intro.webp",
        alt: "Illustration representing databases",
      },
      {
        type: "description",
        order: 2,
        content:
          "In this section, we will cover the basics of databases, their importance, and how they are used in everyday applications.",
      },
    ],
  },
  {
    title: "Lesson Overview",
    items: [
      {
        type: "list",
        order: 1,
        itemsType: "bullet",
        items: [
          "Definition and importance of databases",
          "Structure of relational databases",
          "Basic SQL operations",
          "Introduction to Django and ORM",
          "Creating a REST API with Django REST Framework",
          "Implementing a ToDo app with API endpoints",
        ],
      },
    ],
  },
  {
    title: "Structure of Relational Databases",
    items: [
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Tables: Organize data into rows and columns",
          "Primary Key: Unique identifier for each record",
          "Foreign Key: Establishes relationships between tables",
        ],
      },
      {
        type: "image",
        order: 3,
        url: "/db_intro/entity_relationship_diagram.webp",
        alt: "Example of an Entity-Relationship Diagram (ERD)",
      },
    ],
  },
  {
    title: "SQL Operation: SELECT",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "The SELECT statement is used to retrieve data from a database.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "SELECT * FROM Students WHERE age > 18;",
      },
      {
        type: "list",
        order: 3,
        itemsType: "bullet",
        items: [
          "SELECT retrieves specific columns or all columns (*)",
          "WHERE clause filters rows based on a condition",
          "Results can be sorted using ORDER BY",
        ],
      },
    ],
  },
  {
    title: "SQL Operation: INSERT",
    items: [
      {
        type: "description",
        order: 1,
        content: "The INSERT statement is used to add new rows to a table.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "INSERT INTO Students (name, age) VALUES ('John Doe', 20);",
      },
      {
        type: "list",
        order: 3,
        itemsType: "bullet",
        items: [
          "INSERT INTO specifies the table and columns",
          "VALUES provides the data for the new row",
          "Can insert multiple rows with one INSERT statement",
        ],
      },
    ],
  },
  {
    title: "SQL Operation: UPDATE",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "The UPDATE statement is used to modify existing data in a table.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "UPDATE Students SET age = 21 WHERE name = 'John Doe';",
      },
      {
        type: "list",
        order: 3,
        itemsType: "bullet",
        items: [
          "UPDATE modifies existing rows based on a condition",
          "SET specifies the column to be updated and the new value",
          "WHERE clause targets specific rows",
        ],
      },
    ],
  },
  {
    title: "SQL Operation: DELETE",
    items: [
      {
        type: "description",
        order: 1,
        content: "The DELETE statement is used to remove rows from a table.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "DELETE FROM Students WHERE name = 'John Doe';",
      },
      {
        type: "list",
        order: 3,
        itemsType: "bullet",
        items: [
          "DELETE removes rows that match the condition",
          "WHERE clause specifies which rows to delete",
          "Be cautious: DELETE without WHERE removes all rows",
        ],
      },
    ],
  },
  {
    title: "Introduction to Django and its ORM",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Django is a web framework that includes an ORM (Object-Relational Mapping) to interact with databases.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "ORM abstracts SQL into Python code",
          "Models represent database tables",
          "Migrations apply changes to the database schema",
        ],
      },
      {
        type: "code",
        lang: "python",
        order: 3,
        content:
          "class Task(models.Model):\n    title = models.CharField(max_length=100)\n    description = models.TextField(blank=True)\n    completed = models.BooleanField(default=False)\n    created_at = models.DateTimeField(auto_now_add=True)",
      },
    ],
  },
  {
    title: "Setting Up Django with a Database",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Let's set up a new Django project and configure the database settings.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "django-admin startproject todoapp",
      },
      {
        type: "code",
        lang: "python",
        order: 3,
        content:
          "# settings.py\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.sqlite3',\n        'NAME': BASE_DIR / 'db.sqlite3',\n    }\n}",
      },
    ],
  },
  {
    title: "Creating REST API with Django REST Framework",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "We'll implement a REST API for a ToDo app in Django using Django REST Framework (DRF).",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Install Django REST Framework",
          "Define serializers to convert model instances to JSON",
          "Create API views to handle CRUD operations",
          "Use routers to map URLs to API views",
        ],
      },
      {
        type: "code",
        lang: "bash",
        order: 3,
        content: "pip install djangorestframework",
      },
    ],
  },
  {
    title: "Defining Serializers with Validation",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Serializers in DRF help to convert complex data types like Django models into JSON. We will also add validation to the title field.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from rest_framework import serializers\nfrom .models import Task\n\n\nclass TaskSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Task\n        fields = ['id', 'title', 'description', 'completed', 'created_at']\n\n    def validate_title(self, value):\n        if len(value) < 3:\n            raise serializers.ValidationError('Title must be at least 3 characters long.')\n        return value",
      },
    ],
  },
  {
    title: "Creating API Views",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "We will use Django REST Framework's APIView to handle the HTTP methods (GET, POST, PUT, DELETE) for our REST API.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from rest_framework.views import APIView\nfrom rest_framework.response import Response\nfrom rest_framework import status\nfrom .models import Task\nfrom .serializers import TaskSerializer\n\nclass TaskList(APIView):\n    def get(self, request):\n        tasks = Task.objects.all()\n        serializer = TaskSerializer(tasks, many=True)\n        return Response(serializer.data)\n\n    def post(self, request):\n        serializer = TaskSerializer(data=request.data)\n        if serializer.is_valid():\n            serializer.save()\n            return Response(serializer.data, status=status.HTTP_201_CREATED)\n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)",
      },
    ],
  },
  {
    title: "Updating and Deleting Tasks",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Adding the capability to update and delete tasks in the ToDo API.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "class TaskDetail(APIView):\n    def get_object(self, pk):\n        try:\n            return Task.objects.get(pk=pk)\n        except Task.DoesNotExist:\n            raise Http404\n\n    def get(self, request, pk):\n        task = self.get_object(pk)\n        serializer = TaskSerializer(task)\n        return Response(serializer.data)\n\n    def put(self, request, pk):\n        task = self.get_object(pk)\n        serializer = TaskSerializer(task, data=request.data)\n        if serializer.is_valid():\n            serializer.save()\n            return Response(serializer.data)\n        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)\n\n    def delete(self, request, pk):\n        task = self.get_object(pk)\n        task.delete()\n        return Response(status=status.HTTP_204_NO_CONTENT)",
      },
    ],
  },
  {
    title: "Routing the API Endpoints",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "We'll use Django's URL routing to map our API views to specific endpoints.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content:
          "from django.urls import path\nfrom .views import TaskList, TaskDetail\n\nurlpatterns = [\n    path('tasks/', TaskList.as_view(), name='task-list'),\n    path('tasks/<int:pk>/', TaskDetail.as_view(), name='task-detail'),\n]",
      },
    ],
  },
  {
    title: "Testing the REST API",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Finally, we will test our REST API using tools like Postman or cURL.",
      },
      {
        type: "code",
        lang: "bash",
        order: 2,
        content: "curl -X GET http://127.0.0.1:8000/tasks/",
      },
      {
        type: "list",
        order: 3,
        itemsType: "bullet",
        items: [
          "Test GET request to retrieve tasks",
          "Test POST request to create a new task",
          "Test PUT request to update a task",
          "Test DELETE request to remove a task",
        ],
      },
    ],
  },
  {
    title: "Recap and Q&A",
    items: [
      {
        type: "description",
        order: 1,
        content: "Let's review what we've learned and address any questions.",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Introduction to databases and SQL",
          "Setting up and configuring a Django project",
          "Creating a REST API using Django REST Framework",
          "Testing the API with various HTTP methods",
        ],
      },
    ],
  },
];
