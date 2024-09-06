import { CourseTopics, TestItem } from "@/types/questions";

export const ml_quiz: TestItem[] = [
  {
    field: CourseTopics.MachineLearning,
    question: "What is Machine Learning? / Ի՞նչ է Machine Learning-ը:",
    options: [
      {
        value: "a",
        label:
          "A way to write hard-coded rules for a task / Կարծեց թե կարող ես առաջադրել որոշակի կանոններ:",
      },
      {
        value: "b",
        label:
          "A field of AI that teaches computers to learn from data / Արհեստական բանականության ոլորտ, որն ուսուցանում է համակարգիչներին տվյալների հիման վրա սովորել:",
      },
      { value: "c", label: "A programming language / Ծրագրավորման լեզու:" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.MachineLearning,
    question:
      "Which of the following is an example of supervised learning? / Ո՞րն է Supervised learning-ի օրինակը:",
    options: [
      {
        value: "a",
        label: "Classifying spam emails / Սպամ էլփոստերի դասակարգում:",
      },
      {
        value: "b",
        label: "Clustering customer data / Հաճախորդների տվյալների խմբավորում:",
      },
      { value: "c", label: "Self-driving cars / Ինքնագնաց մեքենաներ:" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.MachineLearning,
    question:
      "What does a model do in Machine Learning? / Ի՞նչ է անում մոդելը Machine Learning-ում:",
    options: [
      {
        value: "a",
        label:
          "It learns patterns from data / Այն սովորում է տվյալների մեջ եղած օրինաչափությունները:",
      },
      { value: "b", label: "It writes new code / Այն գրում է նոր կոդ:" },
      { value: "c", label: "It collects data / Այն հավաքում է տվյալներ:" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.MachineLearning,
    question:
      "What is the main difference between supervised and unsupervised learning? / Որն է հիմնական տարբերությունը Supervised եւ Unsupervised learning-ի միջև:",
    options: [
      {
        value: "a",
        label:
          "Supervised learning uses labeled data, unsupervised learning does not / Supervised learning-ը օգտագործում է պիտակավորված տվյալներ, իսկ Unsupervised learning-ը՝ ոչ:",
      },
      {
        value: "b",
        label:
          "Unsupervised learning uses more data / Unsupervised learning-ը օգտագործում է ավելի շատ տվյալներ:",
      },
      {
        value: "c",
        label:
          "Supervised learning works without feedback / Supervised learning-ը աշխատում է առանց հետադարձ կապի:",
      },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.MachineLearning,
    question:
      "What is the purpose of Linear Regression in Machine Learning? / Ի՞նչ է Linear Regression-ի նպատակը Machine Learning-ում:",
    options: [
      {
        value: "a",
        label:
          "To classify data into categories / Տվյալները բաժանելու է կատեգորիաների:",
      },
      {
        value: "b",
        label:
          "To predict a continuous value based on input data / Մուտքային տվյալների հիման վրա կանխատեսելու է շարունակական արժեք:",
      },
      {
        value: "c",
        label:
          "To group similar data points together / Տվյալների կետերը խմբավորելու է նմանությունների հիման վրա:",
      },
    ],
    correctAnswer: "b",
  },
];
