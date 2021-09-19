import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public overlayContainer: OverlayContainer) {}
  public isLightTheme: boolean = false;

  public changeTheme(event: any): void {
    this.isLightTheme = event.checked;
    if (this.isLightTheme) {
      window.localStorage.setItem('lightTheme', 'true');
    } else {
      localStorage.removeItem('lightTheme');
    }
  }

  ngOnInit() {
    const theme = window.localStorage.getItem('lightTheme');
    if (theme) {
      this.isLightTheme = true;
    }
  }
}
