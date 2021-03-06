import { Component, OnInit } from "@angular/core";
import { Site } from "src/app/modules/lazy-shared/models/site.model";

const ON_A_BEAT_SITE: Site = new Site(
  "On a Beat!",
  "A MERN stack site I wrote in 2019 while learning to code, React/Redux front-end + Node Js back-end + MongoDB. Users can make accounts, sign in, add/delete videos, songs, pics, and gifs to front page, and more.",
  "https://onabeat.herokuapp.com/",
  [
    "https://i.imgur.com/h9Bm4yj.jpeg",
    "https://i.imgur.com/7zTCFnk.png",
    "https://i.imgur.com/4eXhLGA.png",
    "https://i.imgur.com/c68FKLo.jpeg",
  ]
);

const NFL_SITE: Site = new Site(
  "Nature's Frontier Landscaping",
  "Dockerized Typescript React site live at nflandscaping.com with SSR, MUI 5, Emotion.js, and Next.js",
  "https://www.nflandscaping.com",
  [
    "https://i.imgur.com/TTgeW7Y.jpeg",
    "https://i.imgur.com/dufsNaC.png",
    "https://i.imgur.com/TIkU3jl.png",
  ]
);

const CHRISTIAN_GRACIA_API: Site = new Site(
  "Christiangracia API",
  "Dockerized TypeScript Node.js API back-end that serves my website content, sends me and site's I manage emails, auths with spotify, runs scripts, and more.",
  "https://christiangracia-api.herokuapp.com",
  [
    "https://imgur.com/1upVQ9n.png",
    "https://imgur.com/9z9e44E.png",
    "https://imgur.com/t2tX6mv.png",
  ]
);

const MARKETFEELS: Site = new Site(
  "MarketFeels",
  "Work in progress server side rendered React + Redux Financial site written in TypeScript. Working on this when I have more time",
  "https://marketfeels.com",
  ["https://i.imgur.com/D1ualvH.jpeg"]
);

const BASH_SCRIPT_GEN: Site = new Site(
  "Bash Script Generator",
  "NPM package I built that parses Python and JavaScript/TypeScript installation files to create and manage long Bash scripts for installing dependencies.",
  "https://www.npmjs.com/package/bash-script-dependency-generator",
  [
    "https://i.imgur.com/cKVykHp.png",
    "https://i.imgur.com/WckQ1EP.png",
    "https://i.imgur.com/h2d5yud.png",
    "https://i.imgur.com/x2R60Vd.png",
    "https://i.imgur.com/EWN046J.png",
  ]
);

@Component({
  selector: "app-websites",
  templateUrl: "./websites.component.html",
  styleUrls: ["./websites.component.scss"],
})
export class WebsitesComponent implements OnInit {
  public sites: Site[] = [
    NFL_SITE,
    CHRISTIAN_GRACIA_API,
    BASH_SCRIPT_GEN,
    MARKETFEELS,
    ON_A_BEAT_SITE,
  ];

  constructor() {}

  ngOnInit(): void {}
}
