import { Component, OnInit } from "@angular/core";

const LANGUAGES: string[] = [
  "JavaScript",
  "Java",
  "Python",
  "TypeScript",
  "C#",
  "C",
  "Ruby",
  "Rust",
  "Kotlin",
  "Swift",
  "Obj-C",
  "Bash",
  "HTML/CSS + Sass",
];

const FRONTEND_SKILLS: string[] = [
  "React",
  "Angular",
  "React Native",
  "Next.js",
  "Mobile iOS/Android",
  "Material Design",
  "Bootstrap",
  "MUI",
  // "Emotion.js",
  "Vue.js",
  "Tailwind CSS",
];

const BACKEND_SKILLS: string[] = [
  "REST APIs",
  "NodeJS",
  "GraphQL",
  "Spring Boot",
  "Ruby on Rails",
  "Flask",
  "Django",
  "AWS",
  "GCP",
  "Heroku",
  "Salesforce",
  "SSR",
];

const SKILLS: {
  label: string;
  value: string;
}[] = [
  {
    label: "languages",
    value: LANGUAGES.join(", "),
  },
  {
    label: "front-end",
    value: FRONTEND_SKILLS.join(", "),
  },
  {
    label: "back-end",
    value: BACKEND_SKILLS.join(", "),
  },
];

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  public skills = SKILLS;
  constructor() {}

  ngOnInit() {}
}
