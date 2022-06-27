import { isPlatformBrowser } from "@angular/common";
import { AfterViewInit, Component, Inject, PLATFORM_ID } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { OverlayContainer } from "@angular/cdk/overlay";
import { ImageService } from "./modules/image-loader/image-loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [ImageService],
})
export class AppComponent implements AfterViewInit {
  public loaded: Boolean = false;
  public currentUrl: string = "";

  private icons: string[] = [
    "fast_forward",
    "headphones",
    "play_circle",
    "pause_circle",
    "close",
  ];
  public isDarkTheme: boolean = false;
  constructor(
    public overlayContainer: OverlayContainer,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private imageService: ImageService
  ) {
    this.imageService.initializeImages(this.icons);
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const path = window.location.pathname;
        const onHomePage = path === "/";
        this.currentUrl = onHomePage ? "" : path.slice(1);
      }
    });
  }

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

      this.setTheme();
      this.overlayContainer
        .getContainerElement()
        .classList.add("full-screen-modal");
    }
  }
}
