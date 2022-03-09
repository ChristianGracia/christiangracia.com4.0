import { Component, OnInit } from "@angular/core";
import { Job } from "../../models/job.model";

const JOBS: Job[] = [
  {
    company: "CoStar Group",
    range: "Mar 2022 - Present",
    website: "https://www.costargroup.com/",
    description:
      "TBD",
  },
  {
    company: "Velentium",
    range: "Mar 2021 - Mar 2022",
    website: "https://www.velentium.com",
    description:
      "Here I built full stack medical web and mobile applications with React, NodeJS, React Native, Python, Kotlin, and Java.",
  },
  {
    company: "Magellan Jets",
    range: "Jan 2020 - Mar 2021",
    website: "https://www.magellanjets.com/magellan-jets-apps",
    description:
      "I built Salesforce integrated web and mobile applications with Angular, React Native, and Java as well as back-end APIs with Ruby/RoR and NodeJs.",
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
}
