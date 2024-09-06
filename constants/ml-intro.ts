import { Slide } from "@/types/main";

export const ml_slides: Slide[] = [
  {
    title: "Welcome to Introduction to Machine Learning",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Get ready to dive into the exciting world of Machine Learning! In this class, you'll discover how machines can learn from data and make predictions on their own.",
      },

      {
        type: "image",
        order: 2,
        url: "/ml/ml_intro.webp",
        alt: "Introduction to Machine Learning Image",
      },
    ],
  },
  {
    title: "What You'll Learn Today",
    items: [
      {
        type: "list",
        order: 1,
        itemsType: "bullet",
        items: [
          "What is Machine Learning?",
          "How does Machine Learning work?",
          "AI vs. ML vs. Data Science",
          "Types of Machine Learning (Supervised, Unsupervised, Reinforcement)",
          "Hands-on coding example: Predicting weight based on height",
        ],
      },
    ],
  },
  {
    title: "Introduction to Machine Learning",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Machine learning enables computers to learn from data without being explicitly programmed for each task.",
      },
      {
        type: "description",
        order: 2,
        content:
          "Imagine Netflix recommendations: initially, developers hard-coded suggestions, but now Machine Learning models learn from user preferences.",
      },
      {
        type: "list",
        order: 3,
        itemsType: "bullet",
        items: [
          "Early: Hard-coded logic",
          "Now: Machine Learning based on patterns in user behavior",
        ],
      },
    ],
  },
  {
    title: "How Does Machine Learning Learn?",
    items: [
      {
        type: "description",
        order: 1,
        content: "Machine Learning models go through these key steps to learn:",
      },
      {
        type: "list",
        order: 2,
        itemsType: "number",
        items: [
          "Data Collection: Gathering data (e.g., images of cats and dogs).",
          "Model Training: Teaching the model to identify patterns.",
          "Prediction: Model predicts new outcomes (e.g., 'cat' or 'dog').",
          "Evaluation: Adjust model to improve accuracy.",
        ],
      },
      {
        type: "description",
        order: 3,
        content:
          "Example: A robot learns to identify cats and dogs by analyzing labeled images and improving over time.",
      },
    ],
  },
  {
    title: "AI vs. ML vs. Data Science",
    items: [
      {
        type: "description",
        order: 1,
        content: "These fields are closely related but have different focuses:",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "AI: The broader field enabling computers to perform tasks that usually require human intelligence.",
          "ML: A subset of AI that teaches computers to make predictions based on data.",
          "Data Science: Field focused on analyzing data to find patterns (often uses ML as a tool).",
        ],
      },
    ],
  },
  {
    title: "Types of Machine Learning",
    items: [
      {
        type: "description",
        order: 1,
        content: "There are three main types of machine learning:",
      },
      {
        type: "list",
        order: 2,
        itemsType: "bullet",
        items: [
          "Supervised Learning: Learns from labeled data (e.g., email spam filtering).",
          "Unsupervised Learning: Identifies patterns in unlabeled data (e.g., customer segmentation).",
          "Reinforcement Learning: Learns by trial and error, receiving feedback from its environment (e.g., self-driving cars).",
        ],
      },
    ],
  },
  {
    title: "Practical Example: Predicting Weight Based on Height",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Now, let's put our knowledge into action and create a simple ML model that predicts a student's weight based on their height.",
      },
      {
        type: "code",
        lang: "python",
        order: 2,
        content: `
# Import libraries
from sklearn.linear_model import LinearRegression

# Example data: heights (input) and weights (output)
heights = [[150], [160], [170], [180], [190]]
weights = [50, 60, 70, 80, 90]

# Create and train the model
model = LinearRegression()
model.fit(heights, weights)

# Make a prediction based on a new height
new_height = [[175]]
predicted_weight = model.predict(new_height)
print(f"Predicted weight for height {new_height[0][0]} cm: {predicted_weight[0]:.2f} kg")
        `,
      },
    ],
  },
  {
    title: "Wrap-Up and Q&A",
    items: [
      {
        type: "description",
        order: 1,
        content:
          "Today, we learned the basics of machine learning, explored its different types, and built our first predictive model!",
      },
      {
        type: "description",
        order: 2,
        content:
          "Feel free to ask any questions or share your thoughts on what we covered today.",
      },
    ],
  },
];

//   [
//   {
//     title: "Welcome to Machine Learning!",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "Ready to dive into the world of machine learning? 🚀 Let's explore how computers learn and make predictions from data. This lesson will be fun and engaging, with hands-on activities!",
//       },
//       {
//         type: "image",
//         order: 2,
//         url: "/ml/ml_intro.webp",
//         alt: "Introduction to Machine Learning Image",
//       },
//     ],
//   },
//   {
//     title: "What You'll Learn Today",
//     items: [
//       {
//         type: "list",
//         order: 1,
//         itemsType: "bullet",
//         items: [
//           "What is Machine Learning?",
//           "Types of Machine Learning: Supervised, Unsupervised, Reinforcement",
//           "Basic Concepts of Machine Learning Models",
//           "Introduction to Popular Python Libraries",
//         ],
//       },
//     ],
//   },
//   {
//     title: "What is Machine Learning?",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "Machine learning is a field of computer science that gives computers the ability to learn from data without being explicitly programmed. It's like teaching computers to make decisions from experience!",
//       },
//       {
//         type: "list",
//         order: 2,
//         itemsType: "bullet",
//         items: [
//           "Netflix recommending shows",
//           "Email spam filtering",
//           "Social media feed optimization",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Types of Machine Learning",
//     items: [
//       {
//         type: "list",
//         order: 1,
//         itemsType: "bullet",
//         items: [
//           "Supervised Learning: Learning from labeled data",
//           "Unsupervised Learning: Learning from unlabeled data",
//           "Reinforcement Learning: Learning by interacting with the environment",
//         ],
//       },
//       {
//         type: "image",
//         order: 2,
//         url: "/ml/types_of_learning.webp",
//         alt: "Types of Machine Learning Visualization",
//       },
//     ],
//   },
//   {
//     title: "Supervised Learning Example",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "Imagine trying to predict house prices. You train a model with previous house prices and features like size, location, and number of rooms. The model learns from these examples and predicts future house prices.",
//       },
//       {
//         type: "code",
//         lang: "python",
//         order: 2,
//         content: `
// # Example code for Supervised Learning
// from sklearn.linear_model import LinearRegression
// model = LinearRegression()
// model.fit(X_train, y_train)
// predictions = model.predict(X_test)
//         `,
//       },
//     ],
//   },
//   {
//     title: "Basic Concepts of Machine Learning Models",
//     items: [
//       {
//         type: "list",
//         order: 1,
//         itemsType: "bullet",
//         items: [
//           "Features: The inputs to the model (e.g., house size, location)",
//           "Labels: The outputs the model is trying to predict (e.g., house prices)",
//           "Training and Testing Data: Training the model with data, then testing its performance on unseen data",
//         ],
//       },
//     ],
//   },
//   {
//     title: "Popular Machine Learning Libraries in Python",
//     items: [
//       {
//         type: "list",
//         order: 1,
//         itemsType: "bullet",
//         items: [
//           "Scikit-Learn: For basic machine learning models",
//           "TensorFlow & Keras: For deep learning",
//           "Pandas & NumPy: For data manipulation",
//         ],
//       },
//       {
//         type: "code",
//         lang: "python",
//         order: 2,
//         content: `
// # Example of loading and splitting data in Python
// import pandas as pd
// from sklearn.model_selection import train_test_split
//
// # Load the dataset
// data = pd.read_csv('data.csv')
// X = data[['feature1', 'feature2']]
// y = data['label']
//
// # Split the data
// X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
//         `,
//       },
//     ],
//   },
//   {
//     title: "Hands-On: Building Your First Model",
//     items: [
//       {
//         type: "description",
//         order: 1,
//         content:
//           "Let’s try building a simple classification model using the Iris dataset and Scikit-Learn. We’ll see how the model learns from data and makes predictions.",
//       },
//       {
//         type: "code",
//         lang: "python",
//         order: 2,
//         content: `
// from sklearn.datasets import load_iris
// from sklearn.model_selection import train_test_split
// from sklearn.ensemble import RandomForestClassifier
// from sklearn.metrics import accuracy_score
//
// # Load the dataset
// iris = load_iris()
// X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.2)
//
// # Train the model
// clf = RandomForestClassifier()
// clf.fit(X_train, y_train)
//
// # Make predictions and check accuracy
// predictions = clf.predict(X_test)
// print(f"Accuracy: {accuracy_score(y_test, predictions)}")
//         `,
//       },
//     ],
//   },
//   {
//     title: "Recap & What's Next",
//     items: [
//       {
//         type: "list",
//         order: 1,
//         itemsType: "bullet",
//         items: [
//           "Machine learning helps computers learn from data.",
//           "Supervised, Unsupervised, and Reinforcement Learning are key types.",
//           "We explored popular Python libraries and built a basic model!",
//         ],
//       },
//       {
//         type: "link",
//         order: 2,
//         url: "https://scikit-learn.org/",
//         title: "Learn more about Scikit-Learn",
//       },
//     ],
//   },
// ];
