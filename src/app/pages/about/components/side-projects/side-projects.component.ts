import { Component, OnInit } from "@angular/core";
import { Site } from "src/app/modules/lazy-shared/models/site.model";

const CG: Site = new Site(
  "Christiangracia.com",
  "Every year I rewrite my website, still some things I'd like to do here like add more tests, content, and further site optimization",
  "www.github.com/ChristianGracia/christiangracia.com4.0"
);

const CG_API: Site = new Site(
  "Christiangracia API",
  "I've been working on this a lot recently, adding features, more tests with Jest, more automation, and refactoring existing code",
  "www.github.com/ChristianGracia/christiangracia-api"
);

const ALGORITHMS: Site = new Site(
  "Algorithms",
  "Doing review of Data Structures and Algorithms",
  "www.github.com/ChristianGracia/Algorithms"
);

const NFL_SITE: Site = new Site(
  "NF Landscaping",
  "Working with the owner of Nature's Frontier Landscaping on where to take the site next",
  "www.nflandscaping.com"
);

const MARKETFEELS: Site = new Site(
  "MarketFeels",
  "Working on the ability to view financial info, socia media sentiment/trends, post on stock forums/social media using bots (hype), add machine learning models, etc",
  "www.marketfeels.com"
);

const BASH_SCRIPT_GEN: Site = new Site(
  "Bash Script Generator ",
  "NPM package I created in a few hours that parses Python and JavaScript/TypeScript projects to create/manage long Bash scripts for installing dependencies, building this out to parse more languages",
  "www.npmjs.com/package/bash-script-dependency-generator"
);

@Component({
  selector: "app-side-projects",
  templateUrl: "./side-projects.component.html",
  styleUrls: ["./side-projects.component.scss"],
})
export class SideProjectsComponent implements OnInit {
  public sites: Site[] = [
    ALGORITHMS,
    NFL_SITE,
    CG_API,
    CG,
    BASH_SCRIPT_GEN,
    MARKETFEELS,
  ];

  constructor() {}

  ngOnInit() {}

  public openLink(url: string) {
    window.open(`https://${url}`, "_blank");
  }
}
