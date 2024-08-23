export type TestItem = {
  field: CourseTopics;
  question: string;
  options: { value: string; label: string }[];
  correctAnswer: string;
};

export enum CourseTopics {
  Ecosystem = 1,
  ProgrammingLanguages,
  FrontendDevelopment,
  BackendDevelopment,
  DevOpsCulture,
  QualityAssurance,
  UIUXDesign,
  MachineLearning,
  AdditionalTopics,
}
