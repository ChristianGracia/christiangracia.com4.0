import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/models/site.model';

const ON_A_BEAT_SITE: Site = new Site(
  'On a Beat!',
  'A MERN stack site I wrote while learning to code, React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in, add/delete videos, songs, pics, and gifs to front page, and more.',
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
  "React front-end + NodeJS back-end site I made for Nature's Frontier Landscaping. Will be rewritten soon since I made this while just learning React. Live at nflandscaping.com.",
  'https://www.nflandscaping.com',
  [
    'https://i.imgur.com/TTgeW7Y.jpeg',
    'https://i.imgur.com/dufsNaC.png',
    'https://i.imgur.com/TIkU3jl.png',
  ]
);

const CHRISTIAN_GRACIA_API: Site = new Site(
  'Christian Gracia API',
  'TypeScript Node.js API back-end that serves my website content, sends me emails, and more.',
  'https://christiangracia-api.herokuapp.com',
  [
    'https://imgur.com/1upVQ9n.png',
    'https://imgur.com/9z9e44E.png',
    'https://imgur.com/t2tX6mv.png',
  ]
);

const MARKETFEELS: Site = new Site(
  'MarketFeels',
  'Work in progress server side rendered React + Redux finance site written in TypeScript.',
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
