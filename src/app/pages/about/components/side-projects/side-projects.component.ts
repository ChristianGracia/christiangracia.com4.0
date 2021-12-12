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

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss'],
})
export class SideProjectsComponent implements OnInit {
  public sites: Site[] = [MARKETFEELS, NFL_SITE];

  constructor() {}

  ngOnInit() {}
}
