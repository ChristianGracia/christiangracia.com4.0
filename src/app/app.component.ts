import { OverlayContainer } from "@angular/cdk/overlay";
import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Component, Inject, PLATFORM_ID } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  public loaded: Boolean = false;
  public currentUrl: string = "";

  private icons: string[] = [
    "github",
    "twitter",
    "linkedin",
    "fast_forward",
    "fast_rewind",
    "light_mode",
    "dark_mode",
    "headphones",
    "play_circle",
    "pause_circle",
    "menu",
    "close",
  ];
  constructor(
    public overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const path = window.location.pathname;
        this.currentUrl = path !== "/" ? path.slice(1) : "";
      }
    });
  }
  public isDarkTheme: boolean = false;

  public changeTheme(event: any): void {
    this.isDarkTheme = event.checked;
    if (this.isDarkTheme) {
      window.localStorage.setItem("darkTheme", "true");
    } else {
      localStorage.removeItem("darkTheme");
    }

    this.setTheme();
  }

  private setTheme(): void {
    this.overlayContainer
      .getContainerElement()
      .classList.add(this.isDarkTheme ? "dark-theme" : "light-theme");
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkTheme = !!window.localStorage.getItem("darkTheme");

      this.setTheme();
      this.overlayContainer
        .getContainerElement()
        .classList.add("full-screen-modal");
      this.initializeImages();
      this.loaded = true;
    }
  }
  private initializeImages() {
    this.icons.forEach((icon) => {
      this.matIconRegistry.addSvgIconInNamespace(
        "assets",
        icon.toString(),
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `assets/images/${icon}.svg`
        )
      );
    });
  }
}
