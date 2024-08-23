import { CourseTopics, TestItem } from "@/types/questions";

export const devopsQuestions: TestItem[] = [
  {
    field: CourseTopics.DevOpsCulture,
    question: "Ո՞րն է DevOps-ի հիմնական նպատակը:",
    options: [
      { value: "A", label: "Ստեղծել բարդ ծրագրային ճարտարապետություններ" },
      {
        value: "B",
        label:
          "Բարելավել համագործակցությունը ծրագրավորման և Օպերացիոն թիմերի միջև",
      },
      { value: "C", label: "Ավելի քիչ ժամանակում ավելի շատ կոդ գրել" },
      { value: "D", label: "Ծրագրային ապահովման ձեռքով տեղադրում" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.DevOpsCulture,
    question: "Ո՞ր հրամանով է նոր Git պահոցը (repository) սկսվում:",
    options: [
      { value: "A", label: "git start" },
      { value: "B", label: "git init" },
      { value: "C", label: "git new" },
      { value: "D", label: "git create" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.DevOpsCulture,
    question:
      "Ինչի՞ համար է DNS-ն (Domain Name System) օգտագործվում ցանցային աշխատանքում:",
    options: [
      { value: "A", label: "Դոմեյնային անվանման համակարգ" },
      { value: "B", label: "Տվյալների ցանցային ծառայություն" },
      { value: "C", label: "Թվային անունների սերվեր" },
      { value: "D", label: "Դինամիկ ցանցային համակարգ" },
    ],
    correctAnswer: "A",
  },
  {
    field: CourseTopics.DevOpsCulture,
    question: "Ի՞նչ է Հաճախական Ինտեգրումը (Continuous Integration, CI):",
    options: [
      {
        value: "A",
        label: "Ծրագրային կոդի տեղադրման գործընթացի ձեռքով իրականացում",
      },
      {
        value: "B",
        label:
          "Կոդի փոփոխությունների ավտոմատ ինտեգրման պրակտիկա ընդհանուր պահոցում",
      },
      {
        value: "C",
        label: "Յուրաքանչյուր կոդի համար թեստերի գրելու գործընթացը",
      },
      { value: "D", label: "Կոդի կոնտեյներացման գործընթացը" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.DevOpsCulture,
    question: "Ո՞րն է Version Control System-ի (VCS) հիմնական առավելությունը:",
    options: [
      {
        value: "A",
        label:
          "Հեշտացնում է ծածկագրի փոփոխությունների հետևումը և խմբակային աշխատանքը",
      },
      { value: "B", label: "Ավտոմատացնում է ծրագրային ապահովման տեղադրումը" },
      {
        value: "C",
        label: "Օգտագործվում է միայն անվտանգության ապահովման համար",
      },
      { value: "D", label: "Նվազեցնում է ծրագրի ծախսերը" },
    ],
    correctAnswer: "A",
  },
  {
    field: CourseTopics.DevOpsCulture,
    question: "CI/CD-ում ի՞նչ դեր ունի Թեստավորումը:",
    options: [
      {
        value: "A",
        label:
          "Թեստավորումը ապահովում է, որ բոլոր կոդային փոփոխությունները ճիշտ են աշխատում մինչև արտադրության տեղադրումը",
      },
      {
        value: "B",
        label:
          "Թեստավորումը օգտագործվում է միայն վերջնական արտադրանքում սխալներ գտնելու համար",
      },
      { value: "C", label: "Թեստավորումը ոչ կարևոր է CI/CD գործընթացում" },
      {
        value: "D",
        label:
          "Թեստավորումը օգտագործվում է միայն կատարման ցուցանիշների գնահատման համար",
      },
    ],
    correctAnswer: "A",
  },
];
