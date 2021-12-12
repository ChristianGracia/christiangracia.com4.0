import { Component, OnInit } from '@angular/core';
import { Site } from '../../../../models/site.model';

const NFL_SITE: Site = new Site(
  "Nature's Frontier Landscaping",
  'Rewritting this site in TypeScript + adding server side rendering. I made this site when I first started learning React and want to redo + redesign',
  'https://www.nflandscaping.com'
);

const MARKETFEELS: Site = new Site(
  'MarketFeels',
  'Working on the ability to view finance info, post on social medias using bots (hype), add machine learning models, etc',
  'https://marketfeels.com'
);

const CG4: Site = new Site(
  'Christiangracia.com4.0',
  'My new site I am writing that will replace this one soon. Featuring Angular12, complete server side rendering, minimal css, full use of Material themes, all around better',
  'https://cg-playground.herokuapp.com/'
);
@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss'],
})
export class SideProjectsComponent implements OnInit {
  public sites: Site[] = [CG4, MARKETFEELS, NFL_SITE];

  constructor() {}

  ngOnInit() {}
}
