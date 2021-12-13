import { Component, OnInit } from '@angular/core';

const LANGUAGES = [
  'JavaScript',
  'Java',
  'Python',
  'C#',
  'Ruby',
  'Swift',
  'C',
  'Objective-C',
  'TypeScript',
  'HTML/CSS + Sass',
];

const FRONTEND_SKILLS = [
  'React',
  'Angular',
  'React Native',
  'Mobile iOS/Android',
  'Bootstrap',
  'Material Design',
  'Vue.js',
  'Tailwind CSS',
  'ASP.NET',
  'Java Web Apps',
];

const BACKEND_SKILLS = [
  'RESTful APIs',
  'NodeJS',
  'Spring Boot',
  'Ruby on Rails',
  'GraphQL',
  'Flask',
  'Django',
  'AWS',
  'GCP',
];

const SKILLS: { [key: string]: any } = [
  { languages: [LANGUAGES.join(', ')] },
  { 'front-end': [FRONTEND_SKILLS.join(', ')] },
  { 'back-end': [BACKEND_SKILLS.join(', ')] },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills = SKILLS;
  public skillKeys: string[] = ['languages', 'front-end', 'back-end'];

  constructor() {}

  ngOnInit() {}
}
