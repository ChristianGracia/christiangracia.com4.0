import { Component, OnInit } from '@angular/core';

interface Section {
  title: string;
  description: string[];
  image: string[];
}

const sections = [{}];
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
