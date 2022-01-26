import { Component, OnInit } from '@angular/core';
import { Site } from '../../../../models/site.model';

const CG: Site = new Site(
  'Christiangracia.com',
  'Every year I rewrite my website, still some work left to do here',
  'www.github.com/ChristianGracia/christiangracia.com4.0'
);

const ALGORITHMS: Site = new Site(
  'Algorithms',
  'Doing review of Data Structures and Algorithms and work done on this will be seen here',
  'www.github.com/ChristianGracia/Algorithms'
);

const NFL_SITE: Site = new Site(
  'NF Landscaping',
  'Rewritting this site in TypeScript + adding server side rendering. I made this site when I first started learning React and want to redo + redesign',
  'www.nflandscaping.com'
);

const MARKETFEELS: Site = new Site(
  'MarketFeels',
  'Working on the ability to view finance info, post on social medias using bots (hype), add machine learning models, etc',
  'www.marketfeels.com'
);

const BASH_SCRIPT_GEN: Site = new Site(
  'Bash Scipt Generator ',
  'NPM package I created in a few hours that parses Python and JavaScript/TypeScript installation files to create and mange long Bash scripts for installing dependencies, building this out to parse for more languages',
  'www.npmjs.com/package/bash-script-dependency-generator'
);

@Component({
  selector: 'app-side-projects',
  templateUrl: './side-projects.component.html',
  styleUrls: ['./side-projects.component.scss'],
})
export class SideProjectsComponent implements OnInit {
  public sites: Site[] = [BASH_SCRIPT_GEN, ALGORITHMS, CG, MARKETFEELS, NFL_SITE];

  constructor() {}

  ngOnInit() {}

  public openLink(url: string) {
    window.open(`https://${url}`, '_blank');
  }
}
