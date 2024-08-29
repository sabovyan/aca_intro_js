import { CourseTopics, TestItem } from "@/types/questions";

export const UIUX_QUESTIONS: TestItem[] = [
  {
    field: CourseTopics.UIUXDesign,
    question:
      "What is the primary focus of User Interface (UI) design? / Ո՞րն է Օգտագործողի միջերեսի (UI) ձևավորման հիմնական նպատակը:",
    options: [
      {
        value: "a",
        label:
          "The overall experience of using a product / Ապրանքի օգտագործման ընդհանուր փորձը",
      },
      {
        value: "b",
        label:
          "The visual and interactive elements of a product / Ապրանքի վիզուալ և ինտերակտիվ տարրերը",
      },
      {
        value: "c",
        label: "The backend logic of a product / Ապրանքի backend լոգիկան",
      },
      {
        value: "d",
        label:
          "The marketing strategy for the product / Ապրանքի մարքեթինգային ռազմավարությունը",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "Which design principle involves grouping related elements together to create a relationship between them? / Ո՞ր դիզայնի սկզբունքն է վերաբերում կապակցված տարրերը խմբավորելուն՝ նրանց միջև կապ ստեղծելու համար։",
    options: [
      { value: "a", label: "Alignment / համակարգում" },
      { value: "b", label: "Contrast / Կոնտրաստ" },
      { value: "c", label: "Proximity / Մերձավորություն" },
      { value: "d", label: "Repetition / Կրկնում" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "Which tool is commonly used for UI/UX design? / Ո՞ր գործիքն է սովորաբար օգտագործվում UI/UX դիզայնի համար։",
    options: [
      { value: "a", label: "Microsoft Word" },
      { value: "b", label: "Figma" },
      { value: "c", label: "GitHub" },
      { value: "d", label: "MySQL" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "What does the term 'contrast' in design refer to? / Ի՞նչ է ենթադրում «կոնտրաստ» տերմինը դիզայնում։",
    options: [
      {
        value: "a",
        label:
          "Balancing elements evenly in a design / Տարրերի հավասարաչափ հավասարակշռումը դիզայնում",
      },
      {
        value: "b",
        label:
          "Using differences to make elements stand out / Տարբերությունների օգտագործումը տարրերն առանձնանալու համար",
      },
      {
        value: "c",
        label:
          "Ensuring all elements are the same size / Ապահովել, որ բոլոր տարրերը նույն չափի են",
      },
      {
        value: "d",
        label:
          "Reusing elements throughout the design / Տարրերի կրկնակի օգտագործումը դիզայնի ամբողջ ընթացքում",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "What is a wireframe in UI/UX design? / Ի՞նչ է wireframe-ը UI/UX դիզայնում։",
    options: [
      {
        value: "a",
        label:
          "A high-fidelity, polished design mockup / Բարձր որակի, հղկված դիզայնի մոդել",
      },
      {
        value: "b",
        label:
          "A basic layout that outlines the structure of a design / Հիմնական դասավորություն, որը ուրվագծում է դիզայնի կառուցվածքը",
      },
      {
        value: "c",
        label:
          "A prototype with interactive elements / Ինտերակտիվ տարրերով նախատիպ",
      },
      {
        value: "d",
        label:
          "A finalized version of a design ready for development / Ամբողջական դիզայնի վերջնական տարբերակը, պատրաստ զարգացման",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "Which principle helps guide a viewer’s eye through a design by emphasizing the most important elements first? / Ո՞ր սկզբունքը օգնում է դիզայնի միջոցով ուղղորդել դիտողի աչքը՝ նախ կարեւոր տարրերը ընդգծելով։",
    options: [
      { value: "a", label: "Repetition / Կրկնում" },
      { value: "b", label: "Hierarchy / Հիերարխիա" },
      { value: "c", label: "Alignment / համակարգում" },
      { value: "d", label: "Contrast / Կոնտրաստ" },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "What is the main benefit of using Figma for UI/UX design? / Ի՞նչն է հանդիսանում Figma-ի հիմնական առավելությունը UI/UX դիզայնում օգտագործելու համար։",
    options: [
      {
        value: "a",
        label:
          "It’s a code editor for backend development / Սա backend զարգացման համար կոդերի խմբագրիչ է",
      },
      {
        value: "b",
        label:
          "It allows for real-time collaboration on design projects / Այն թույլ է տալիս իրական ժամանակում համագործակցել դիզայնի նախագծերի վրա",
      },
      {
        value: "c",
        label:
          "It’s primarily used for video editing / Այն հիմնականում օգտագործվում է տեսանյութերի խմբագրման համար",
      },
      {
        value: "d",
        label:
          "It’s an advanced tool for data analysis / Սա տվյալների վերլուծության առաջադեմ գործիք է",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "Which design principle involves repeating visual elements to create consistency and unity in a design? / Ո՞ր դիզայնի սկզբունքն է վերաբերում վիզուալ տարրերի կրկնմանը՝ դիզայնում հետեւողականություն եւ միասնություն ստեղծելու համար։",
    options: [
      { value: "a", label: "Contrast / Կոնտրաստ" },
      { value: "b", label: "Hierarchy / Հիերարխիա" },
      { value: "c", label: "Repetition / Կրկնում" },
      { value: "d", label: "Proximity / Մերձավորություն" },
    ],
    correctAnswer: "c",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "Why is alignment important in UI design? / Ինչու՞ է համակարգումը կարեւոր UI դիզայնում։",
    options: [
      {
        value: "a",
        label:
          "It ensures that all elements have the same color / Այն ապահովում է, որ բոլոր տարրերը ունեն նույն գույնը",
      },
      {
        value: "b",
        label:
          "It creates a visual connection between elements, making the design more organized and easier to navigate / Այն ստեղծում է վիզուալ կապ տարրերի միջեւ՝ դիզայնը դարձնելով ավելի կազմակերպված եւ հեշտ ուղղորդելի",
      },
      {
        value: "c",
        label:
          "It allows for random placement of elements to create a chaotic effect / Այն թույլ է տալիս տարրերը պատահական տեղադրել՝ քաոսային էֆեկտ ստեղծելու համար",
      },
      {
        value: "d",
        label:
          "It only matters for text, not other elements / Դա վերաբերում է միայն տեքստին, ոչ այլ տարրերին",
      },
    ],
    correctAnswer: "b",
  },
  {
    field: CourseTopics.UIUXDesign,
    question:
      "Which of the following is a key aspect of User Experience (UX) design? / Նշվածներից ո՞րն է UX դիզայնի հիմնական ասպեկտը։",
    options: [
      {
        value: "a",
        label:
          "Focusing on the visual aesthetics of the interface / Ինտերֆեյսի վիզուալ գեղագիտականի վրա կենտրոնանալը",
      },
      {
        value: "b",
        label:
          "Ensuring the product is easy and satisfying to use / Ապահովել, որ արտադրանքը հեշտ է և գոհացուցիչ օգտագործման համար",
      },
      {
        value: "c",
        label:
          "Writing code for server-side applications / Server-side ծրագրերի համար կոդեր գրել",
      },
      {
        value: "d",
        label:
          "Managing the product’s database / Արտադրանքի տվյալների բազայի կառավարումը",
      },
    ],
    correctAnswer: "b",
  },
];
