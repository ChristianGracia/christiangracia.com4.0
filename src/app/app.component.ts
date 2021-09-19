import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  public isLightTheme: boolean = false;

  public changeTheme(event: any): void {
    this.isLightTheme = event.checked;
    if (this.isLightTheme) {
      window.localStorage.setItem('selectedTheme', 'true');
    } else {
      localStorage.removeItem('selectedTheme');
    }
  }

  ngOnInit() {
    const theme = window.localStorage.getItem('selectedTheme');
    if (theme) {
      this.isLightTheme = true;
    }
  }
}
