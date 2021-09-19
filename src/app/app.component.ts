import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  public isLightTheme: boolean = false;

  changeTheme(event: any): void {
    this.isLightTheme = event;
  }
  @HostListener('window:unload', ['$event'])
  unloadHandler(event: any) {
    if (this.isLightTheme) {
      window.localStorage.setItem('selectedTheme', 'true');
    }
  }

  ngOnInit() {
    var theme = window.localStorage.getItem('selectedTheme');
    if (theme) {
      this.isLightTheme = true;
    }
  }
}
