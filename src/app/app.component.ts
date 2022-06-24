import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Component, Inject, PLATFORM_ID } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { ImageService } from "./services/image.service";
import { OverlayContainer } from "@angular/cdk/overlay";
import { SpotifyService } from "./services/spotify.service";
import { EmailService } from "./services/email.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [SpotifyService, EmailService],
})
export class AppComponent implements AfterViewInit {
  public loaded: Boolean = false;
  public currentUrl: string = "";

  private icons: string[] = [
    "github",
    "twitter",
    "linkedin",
    "fast_forward",
    "light_mode",
    "dark_mode",
    "headphones",
    "play_circle",
    "pause_circle",
    "menu",
    "close",
  ];

  private lazyIcons: string[] = ["close"];
  constructor(
    public overlayContainer: OverlayContainer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private imageService: ImageService
  ) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const path = window.location.pathname;
        const onHomePage = path === "/";
        this.currentUrl = onHomePage ? "" : path.slice(1);
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
      this.loaded = true;
      this.imageService.initializeImages(this.icons);
      this.setTheme();
      this.overlayContainer
        .getContainerElement()
        .classList.add("full-screen-modal");
    }
  }
}
