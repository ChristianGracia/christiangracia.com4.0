import { AfterViewInit, Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { OverlayContainer } from "@angular/cdk/overlay";
import { ImageService } from "./services/image-loader.service";
import { MODE } from "./enums";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  public loaded: Boolean = false;
  public currentUrl: string = "";
  public isDarkTheme: boolean = false;
  constructor(
    private overlayContainer: OverlayContainer,
    private router: Router,
    private imageService: ImageService
  ) {
    this.imageService.initializeImages();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        const path = window.location.pathname;
        this.currentUrl = path === "/" ? "" : path.slice(1);
      }
    });
  }

  public changeTheme(event: any): void {
    this.isDarkTheme = event.checked;
    if (this.isDarkTheme) {
      localStorage.setItem(MODE.DARK, "true");
    } else {
      localStorage.removeItem(MODE.DARK);
    }

    this.setTheme();
  }

  private setTheme(): void {
    this.addCssClass(this.isDarkTheme ? MODE.DARK : MODE.LIGHT);
  }

  ngAfterViewInit(): void {
    this.isDarkTheme = !!localStorage.getItem(MODE.DARK);
    this.setTheme();
    this.addCssClass("full-screen-modal");
    this.loaded = true;
  }

  private addCssClass(className: string): void {
    this.overlayContainer.getContainerElement().classList.add(className);
  }
}
