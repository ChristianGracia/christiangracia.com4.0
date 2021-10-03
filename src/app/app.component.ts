import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/linkedin.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/twitter.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/github.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/images/search.svg'
      )
    );
  }
  public isDarkTheme: boolean = true;

  public changeTheme(event: any): void {
    this.isDarkTheme = event.checked;
    if (!this.isDarkTheme) {
      window.localStorage.setItem('lightTheme', 'true');
    } else {
      localStorage.removeItem('lightTheme');
    }
  }

  ngOnInit() {
    const theme = window.localStorage.getItem('lightTheme');
    if (theme) {
      this.isDarkTheme = false;
    }
  }
}
