import { CourseTopics, TestItem } from "@/types/questions";

export const ecosystemTestQuestions: TestItem[] = [
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which of the following is an example of an operating system? / Ո՞րն է օպերացիոն համակարգի օրինակ:",
    options: [
      { value: "a", label: "Windows 10" },
      { value: "b", label: "Microsoft Word" },
      { value: "c", label: "Google Chrome" },
      { value: "d", label: "Adobe Photoshop" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which of the following is NOT a software application? / Ո՞րը ծրագրային հավելված չէ:",
    options: [
      { value: "a", label: "Ubuntu Linux" },
      { value: "b", label: "Slack" },
      { value: "c", label: "Microsoft Excel" },
      { value: "d", label: "Spotify" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which of these is a software component commonly used in backend development? / Սրանցից որն է ծրագրային բաղադրիչ, որը սովորաբար օգտագործվում է backend ծրագրային ապահովման մշակման մեջ:",
    options: [
      { value: "a", label: "Node.js" },
      { value: "b", label: "Google Chrome" },
      { value: "c", label: "Microsoft PowerPoint" },
      { value: "d", label: "macOS" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which of the following is an example of a software application used for database management? / Ո՞րը ծրագրային հավելվածի օրինակ է, որն օգտագործվում է տվյալների բազայի կառավարման համար:",
    options: [
      { value: "a", label: "MySQL" },
      { value: "b", label: "Windows 11" },
      { value: "c", label: "Notepad++" },
      { value: "d", label: "Android" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which of the following is NOT a component of a typical software ecosystem? / Սրանցից ո՞րը ծրագրային էկոհամակարգի բնորոշ բաղադրիչ չէ:",
    options: [
      { value: "a", label: "Frontend application / Ֆրոնտենդ հավելված" },
      { value: "b", label: "Backend application / Բեքենդ հավելված" },
      { value: "c", label: "Database / Տվյալների բազա" },
      {
        value: "d",
        label: "Operating system kernel / Օպերացիոն համակարգի միջուկ",
      },
    ],
    correctAnswer: "d",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "How does the frontend interact with the backend in a software ecosystem? / Ինչպե՞ս է ֆրոնտենդը փոխազդում բեքենդի հետ ծրագրային էկոհամակարգում:",
    options: [
      {
        value: "a",
        label:
          "Through direct access to the database / Տվյալների բազային ուղղակի հասանելիության միջոցով",
      },
      {
        value: "b",
        label:
          "Via APIs (Application Programming Interfaces) / API-ների (հավելվածների ծրագրավորման միջերեսներ) միջոցով",
      },
      {
        value: "c",
        label: "By making system calls / Համակարգային զանգերի միջոցով",
      },
      {
        value: "d",
        label: "Through manual data entry / Տվյալների մուտքագրում ձեռքով",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which of the following best describes the role of a database in a software ecosystem? / Սրանցից ո՞րն է լավագույնս նկարագրում տվյալների բազայի դերը ծրագրային էկոհամակարգում:",
    options: [
      {
        value: "a",
        label:
          "It provides a user interface for data entry. / Այն տրամադրում է օգտագործողի միջերես տվյալների մուտքագրման համար:",
      },
      {
        value: "b",
        label:
          "It stores, retrieves, and manages data for applications. / Այն պահպանում, որոնում և կառավարում է տվյալներ հավելվածների համար:",
      },
      {
        value: "c",
        label:
          "It serves as the backend logic for applications. / Այն ծառայում է որպես բեքենդ տրամաբանություն հավելվածների համար:",
      },
      {
        value: "d",
        label:
          "It processes requests and returns web pages. / Այն մշակում է հարցումներ և վերադարձնում վեբ էջեր:",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which specialization should you consider if you enjoy designing how users interact with software? / Ո՞ր մասնագիտացումը պետք է հաշվի առնել, եթե ձեզ դուր է գալիս նախագծել, թե ինչպես են օգտատերերը շփվում ծրագրային ապահովման հետ:",
    options: [
      { value: "a", label: "Backend Development / Բեքենդ զարգացում" },
      { value: "b", label: "Frontend Development / Ֆրոնտենդ զարգացում" },
      { value: "c", label: "DevOps / ԴևՕպս" },
      { value: "d", label: "Quality Assurance / Որակի ապահովում" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "What is the first phase of the Software Development Lifecycle (SDLC)? / Ո՞րն է ծրագրային ապահովման կյանքի ցիկլի (SDLC) առաջին փուլը:",
    options: [
      { value: "a", label: "Design / Նախագծում" },
      { value: "b", label: "Testing / Թեստավորում" },
      { value: "c", label: "Planning / Պլանավորում" },
      { value: "d", label: "Implementation / Իրականացում" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "Which SDLC phase focuses on converting design documents into actual code? / SDLC-ի ո՞ր փուլը կենտրոնանում է նախագծային փաստաթղթերը իրական կոդի վերածելու վրա:",
    options: [
      { value: "a", label: "Implementation / Իրականացում" },
      { value: "b", label: "Design / Նախագծում" },
      { value: "c", label: "Testing / Թեստավորում" },
      { value: "d", label: "Deployment / Օգտագործում" },
    ],
    correctAnswer: "a",
  },
  {
    field: CourseTopics.Ecosystem,
    question:
      "How can one choose a specialization within the software ecosystem? / Ինչպե՞ս կարելի է ընտրել մասնագիտացում ծրագրային էկոհամակարգում:",
    options: [
      {
        value: "a",
        label:
          "By considering personal interests and strengths / Հաշվի առնելով անձնական հետաքրքրություններն ու ուժեղ կողմերը",
      },
      {
        value: "b",
        label:
          "By selecting the highest-paying role / Ընտրելով ամենաբարձր վարձատրվող դերը",
      },
      {
        value: "c",
        label:
          "By choosing based on random selection / Ընտրելով պատահական ընտրության հիման վրա",
      },
      {
        value: "d",
        label:
          "By following the most popular trend / Հետևելով ամենահայտնի միտումին",
      },
    ],
    correctAnswer: "a",
  },
];
