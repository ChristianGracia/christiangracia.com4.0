import { Component, OnInit } from "@angular/core";
import { Job } from "../../models/job.model";

const JOBS: Job[] = [
  {
    company: "CoStar Group",
    range: "Mar 2022 - Present",
    website: "https://www.costargroup.com/",
    description:
      "Currently I am working on an international real estate application with React and GraphQL.",
    viewMoreOpen: false,
    applications: [
      {
        name: "Lender",
        languages: ["React", "GraphQL", "TypeScript"],
        description: "Lending application",
      },
    ],
  },
  {
    company: "Velentium",
    range: "Mar 2021 - Mar 2022",
    website: "https://www.velentium.com",
    description:
      "Here I built full stack medical web and mobile applications with React, Node.js, React Native, Python, Kotlin, and Java.",
    viewMoreOpen: false,
    applications: [
      {
        name: "Heart ECG Data App",
        languages: ["React", "Node.js", "JavaScript"],
        description: "App that handled data",
      },
    ],
  },
  {
    company: "Magellan Jets",
    range: "Jan 2020 - Mar 2021",
    website: "https://www.magellanjets.com/magellan-jets-apps",
    description:
      "I built Salesforce integrated web and mobile applications with Angular, React Native, and Java as well as back-end APIs with Ruby/RoR and Node.js.",
    viewMoreOpen: false,
    applications: [
      {
        name: "API",
        languages: ["Ruby on Rails"],
        description: "App that handled data",
      },
      {
        name: "Mobile App",
        languages: ["React Native", "Redux", "TypeScript"],
        description: "Mobile App",
      },
      {
        name: "Web App",
        languages: ["Angular", "TypeScript"],
        description: "Web App",
      },
    ],
  },
];

@Component({
  selector: "app-job-history",
  templateUrl: "./job-history.component.html",
  styleUrls: ["./job-history.component.scss"],
})
export class JobHistoryComponent implements OnInit {
  public jobs: Job[] = JOBS;

  constructor() {}

  ngOnInit() {}
  public openSite(url: string) {
    window.open(url, "_blank");
  }
  public viewMoreJob(job: Job) {
    job.viewMoreOpen = !job.viewMoreOpen;
  }
}
