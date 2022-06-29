import { Component, OnInit } from "@angular/core";
import { openLink } from "src/app/util";
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
        description:
          "Live lending application that is used all around the world to manage loans, properties, markets, collaterals, tenants, borrowers, and much more.",
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
        description:
          "Full stack application that received and sent heart data from implanted CCM devices. Users (doctors, clinic staff, and admins) could manage the settings of the implanted CCM device, view data, and print reports as well as CRUD trials, patients, clinics, and more.",
      },
      {
        name: "Android Bluetooth Data Tester",
        languages: ["Kotlin", "Python", "JavaScript"],
        description:
          "Android app served by a Kotlin Websocket Server uses python to tests device Bluetooth connections and communication",
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
        name: "RoR API",
        languages: ["Ruby", "Ruby on Rails"],
        description:
          "Ruby on rails back-end that used PostgreSQL to CRUD salesforce objects and serve data to multiple web apps and a mobile app.",
      },
      {
        name: "RN Mobile App",
        languages: ["React Native", "Redux", "TypeScript"],
        description:
          "Customer facing mobile app where users could book, manage, and pay their private jet flights, set up pickup and drop off with external car services, and order food to be waiting for them on the plane.",
      },
      {
        name: "Angular Customer Web App",
        languages: ["Angular", "TypeScript"],
        description:
          "Customer facing web app with same features as mobile app mentioned above but did not require an iOS device.",
      },
      {
        name: "Angular Employee Web App",
        languages: ["Angular", "TypeScript"],
        description:
          "I made this application solo that is still used today. Employees are able to CRUD trips, manage their accounts, calculate pricing, and much more.",
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
    openLink(url);
  }
  public viewMoreJob(job: Job) {
    job.viewMoreOpen = !job.viewMoreOpen;
  }
}
