import { CourseTopics, TestItem } from "@/types/questions";

export const db_quiz: TestItem[] = [
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which SQL statement is used to insert new data into a table? / Ո՞ր SQL հրահանգն է օգտագործվում աղյուսակում նոր տվյալներ ավելացնելու համար:",
    options: [
      { value: "A", label: "UPDATE" },
      { value: "B", label: "INSERT INTO" },
      { value: "C", label: "SELECT" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What is Django's ORM used for? / Django-ի ORM-ը ինչի՞ համար է օգտագործվում:",
    options: [
      {
        value: "A",
        label: "To create REST APIs / REST API-ներ ստեղծելու համար",
      },
      {
        value: "B",
        label:
          "To map database tables to Python classes / Տվյալների բազայի աղյուսակները Python դասերին քարտեզելու համար",
      },
      {
        value: "C",
        label:
          "To design frontend interfaces / Ճակատային ինտերֆեյսեր նախագծելու համար",
      },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which SQL statement is used to remove data from a table? / Ո՞ր SQL հրահանգն է օգտագործվում տվյալները աղյուսակից հեռացնելու համար:",
    options: [
      { value: "A", label: "DELETE" },
      { value: "B", label: "INSERT" },
      { value: "C", label: "CREATE" },
    ],
    correctAnswer: "A",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What does the SELECT statement do in SQL? / Ի՞նչ է SELECT հրահանգն անում SQL-ում:",
    options: [
      { value: "A", label: "Inserts new data / Նոր տվյալներ ավելացնում է" },
      {
        value: "B",
        label: "Updates existing data / Թարմացնում է առկա տվյալները",
      },
      {
        value: "C",
        label:
          "Retrieves data from a database / Վերցնում է տվյալներ տվյալների բազայից",
      },
    ],
    correctAnswer: "C",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which HTTP method is typically used to update a resource? / Ո՞ր HTTP մեթոդն է սովորաբար օգտագործվում ռեսուրսի թարմացման համար:",
    options: [
      { value: "A", label: "POST" },
      { value: "B", label: "GET" },
      { value: "C", label: "PUT" },
    ],
    correctAnswer: "C",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "Which SQL statement is used to modify existing data in a table? / Ո՞ր SQL հրահանգն է օգտագործվում աղյուսակում առկա տվյալները փոփոխելու համար:",
    options: [
      { value: "A", label: "INSERT INTO" },
      { value: "B", label: "UPDATE" },
      { value: "C", label: "DELETE" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.BackendDevelopment,
    question:
      "What is the purpose of the Primary Key in a database? / Ի՞նչ է առաջնային բանալու նպատակը տվյալների բազայում:",
    options: [
      {
        value: "A",
        label:
          "To uniquely identify each record in a table / Յուրաքանչյուր գրառում յուրահատուկ նույնականացնելու համար աղյուսակում",
      },
      {
        value: "B",
        label: "To link tables together / Աղյուսակները կապելու համար",
      },
      {
        value: "C",
        label:
          "To store large amounts of text / Մեծ քանակությամբ տեքստ պահելու համար",
      },
    ],
    correctAnswer: "A",
  },
];
