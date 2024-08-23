import { CourseTopics, TestItem } from "@/types/questions";

export const qualityAssuranceQuestion: TestItem[] = [
  {
    field: CourseTopics.QualityAssurance,
    question: "Ո՞րն է որակի ապահովման (QA) հիմնական նպատակը:",
    options: [
      { value: "A", label: "Ստեղծել նոր ծրագրակազմ" },
      { value: "B", label: "Սխալները շտկել ծրագրի թողարկումից առաջ" },
      { value: "C", label: "Ծրագրի օգտատերերի ինտերֆեյսի ձևավորումը" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.QualityAssurance,
    question: "Նշվածներից որը չի հանդիսանում QA գործընթացի մաս:",
    options: [
      { value: "A", label: "Թեստերի պլանավորում" },
      { value: "B", label: "Թեստերի իրականացում" },
      { value: "C", label: "Ծրագրի ստեղծում" },
    ],
    correctAnswer: "C",
  },
  {
    field: CourseTopics.QualityAssurance,
    question: "Ի՞նչ  է ենթադրում Manual QA-ի աշխատանքը",
    options: [
      { value: "A", label: "Ծրագրի ավտոմատ թեստավորում սցենարների միջոցով" },
      { value: "B", label: "Մարդկանց կողմից ձեռքով ծրագրի ստուգում" },
      { value: "C", label: "Սխալները և խնդիրները անտեսում" },
    ],
    correctAnswer: "B",
  },
  {
    field: CourseTopics.QualityAssurance,
    question: "Ե՞րբ է Automation QA-ն ամենաարդյունավետը:",
    options: [
      { value: "A", label: "Կրկնվող առաջադրանքների թեստավորելու համար" },
      { value: "B", label: "Երբ օգտատերերի փորձը պետք է գնահատել" },
      { value: "C", label: "Նոր ֆունկցիաներ նախագծելու համար" },
    ],
    correctAnswer: "A",
  },
  {
    field: CourseTopics.QualityAssurance,
    question: "Ո՞րն է Automation QA-ի առավելություններից մեկը:",
    options: [
      { value: "A", label: "Արագ թեստավորումը հնարավորություն է տալիս" },
      { value: "B", label: "Ավելի ճկուն է, քան Manual QA-ն" },
      { value: "C", label: "Սա միակ եղանակն է սխալները հայտնաբերելու համար" },
    ],
    correctAnswer: "A",
  },
  {
    field: CourseTopics.QualityAssurance,
    question: "Ինչու՞ է QA-ն կարևոր ծրագրային մշակման մեջ:",
    options: [
      { value: "A", label: "Այն ապահովում է ծրագրի բարձր որակը" },
      { value: "B", label: "Օգնում է ստեղծել ծրագրի դիզայնը" },
      { value: "C", label: "Նվազեցնում է թիմային աշխատանքի կարիքը" },
    ],
    correctAnswer: "A",
  },
];
