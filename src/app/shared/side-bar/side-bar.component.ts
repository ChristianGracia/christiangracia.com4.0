import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  themeColor: 'primary' | 'accent' | 'warn' = 'primary';
  isDark = false;
  constructor() {}
  ngOnInit(): void {}
}
