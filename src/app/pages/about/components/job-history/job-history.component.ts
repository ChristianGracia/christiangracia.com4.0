import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job.model';

const JOBS: Job[] = [
  {
    company: 'Velentium',
    range: 'Mar 2021 - Present',
    description:
      'Here I build full stack medical web and mobile applications with React, NodeJS, React Native, and Python.',
  },
  {
    company: 'Magellan Jets',
    range: 'Jan 2020 - Mar 2021',
    description:
      'I built Salesforce integrated web and mobile applications with Angular, React Native, and Java as well as back-end APIs with Ruby/RoR and NodeJs.',
  },
];

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss'],
})
export class JobHistoryComponent implements OnInit {
  public jobs: Job[] = JOBS;
  constructor() {}

  ngOnInit() {}
}
