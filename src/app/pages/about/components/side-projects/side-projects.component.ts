import { Component, OnInit } from '@angular/core';
import { Site } from '../../../../models/site.model';

const CG: Site = new Site(
  'Christiangracia.com',
  'Rewrote this site for the 4th time and there are still some unfinished things on this rewrite',
  'www.github.com/ChristianGracia/christiangracia.com4.0'
);

const ALGORITHMS: Site = new Site(
  'Algorithms',
  'Doing review of Data Structures and Algorithms and work done on this will be seen here',
  'www.github.com/ChristianGracia/Algorithms'
);

const NFL_SITE: Site = new Site(
  "NF Landscaping",
  'Rewritting this site in TypeScript + adding server side rendering. I made this site when I first started learning React and want to redo + redesign',
  'www.nflandscaping.com'
);

const MARKETFEELS: Site = new Site(
  'MarketFeels',
  'Working on the ability to view finance info, post on social medias using bots (hype), add machine learning models, etc',
  'www.marketfeels.com'
);

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss'],
})
export class SideProjectsComponent implements OnInit {
  public sites: Site[] = [CG, ALGORITHMS, MARKETFEELS, NFL_SITE];

  constructor() {}

  ngOnInit() {}
}
