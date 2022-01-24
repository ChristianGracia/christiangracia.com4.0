import { OverlayContainer } from '@angular/cdk/overlay';
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public loaded: Boolean = false;
  public currentUrl: string = '';
  constructor(
    public overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private router: Router
  ) {
    this.initializeImages();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const path = window.location.pathname;
        this.currentUrl = path !== '/' ? path.slice(1) : '';
      }
    });
  }
  public isDarkTheme: boolean = true;

  public changeTheme(event: any): void {
    this.isDarkTheme = event.checked;
    if (!this.isDarkTheme) {
      window.localStorage.setItem('lightTheme', 'true');
    } else {
      localStorage.removeItem('lightTheme');
    }

    if (this.isDarkTheme) {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('light-theme');
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('light-theme');
    }
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const theme = window.localStorage.getItem('lightTheme');
      if (theme) {
        this.isDarkTheme = false;
      }

      if (this.isDarkTheme) {
        this.overlayContainer.getContainerElement().classList.add('dark-theme');
      } else {
        this.overlayContainer
          .getContainerElement()
          .classList.add('light-theme');
      }
      this.overlayContainer
        .getContainerElement()
        .classList.add('full-screen-modal');

      this.loaded = true;
      let loader = this.renderer.selectRootElement('.app-loader-container');
      if (loader.style.display != 'none') loader.style.display = 'none';
    }
  }
  private initializeImages() {
    this.matIconRegistry.addSvgIconInNamespace(
      'assets',
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/linkedin.svg'
      )
    );

    this.matIconRegistry.addSvgIconInNamespace(
      'assets',
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/twitter.svg'
      )
    );

    this.matIconRegistry.addSvgIconInNamespace(
      'assets',
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/images/github.svg'
      )
    );
  }
}
