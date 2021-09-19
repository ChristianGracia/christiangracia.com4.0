import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site.model';

const CHRISTIAN_GRACIA_SITE: Site = new Site(
  'christiangracia.com v2',
  'My previous site that I wrote in TypeScript with only stateless functional components and React Hooks. React/Redux + Sass front-end.',
  'https://christiangracia-old.herokuapp.com/',
  [
    'https://imgur.com/571eBHE.jpg',
    'https://imgur.com/avITmTE.jpg',
    'https://imgur.com/mzRJGSM.jpg',
  ]
);

const ON_A_BEAT_SITE: Site = new Site(
  'On a Beat!',
  'A MERN stack site I wrote while learning to code, React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos, songs, pics, and gifs to front page, and more with a site dashboard I built',
  'https://onabeat.herokuapp.com/',
  [
    'https://i.imgur.com/h9Bm4yj.jpeg',
    'https://i.imgur.com/7zTCFnk.png',
    'https://i.imgur.com/4eXhLGA.png',
    'https://i.imgur.com/c68FKLo.jpeg',
  ]
);

const NFL_SITE: Site = new Site(
  "Nature's Frontier Landscaping",
  "React front-end + NodeJS back-end site I made for Nature's Frontier Landscaping. Live at nflandscaping.com. Will be rewritten soon, I made this while just learning React",
  'https://www.nflandscaping.com',
  [
    'https://i.imgur.com/TTgeW7Y.jpeg',
    'https://i.imgur.com/dufsNaC.png',
    'https://i.imgur.com/TIkU3jl.png',
  ]
);

const CHRISTIAN_GRACIA_API: Site = new Site(
  'Christian Gracia API',
  'TypeScript Node.js API back-end that serves my website content, sends me emails, and more',
  'https://christiangracia-api.herokuapp.com',
  [
    'https://imgur.com/1upVQ9n.png',
    'https://imgur.com/9z9e44E.png',
    'https://imgur.com/t2tX6mv.png',
  ]
);

const MARKETFEELS: Site = new Site(
  'MarketFeels',
  'Server side rendered React + Redux finance site written in TypeScript',
  'https://marketfeels.com',
  ['https://i.imgur.com/D1ualvH.jpeg']
);

@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss'],
})
export class WebsitesComponent implements OnInit {
  public sites: Site[] = [
    MARKETFEELS,
    CHRISTIAN_GRACIA_API,
    ON_A_BEAT_SITE,
    NFL_SITE,
    CHRISTIAN_GRACIA_SITE,
  ];

  constructor() {}

  ngOnInit(): void {}
}
