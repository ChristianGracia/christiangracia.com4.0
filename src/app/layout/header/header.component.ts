import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { RoutingService } from "src/app/services/routing.service";
import {
  DARK_ICON,
  LIGHT_ICON,
  MENU_ICON,
  SOCIAL_MEDIA,
} from "src/app/constants/icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  @Output()
  public sidenavToggle = new EventEmitter<void>();
  @Output()
  public changeTheme = new EventEmitter<boolean>();
  @Input() public isDarkTheme: boolean = false;
  public links: string[] = ["about", "projects", "contact"];
  @Input() public currentUrl: string = "";
  public activeIconArray: boolean[] = [false, false, false];
  public socialMediaLinks = SOCIAL_MEDIA;
  public lightIcon = LIGHT_ICON;
  public darkIcon = DARK_ICON;
  public menuIcon = MENU_ICON;
  private timer!: number;
  constructor(private routingService: RoutingService) {}

  ngAfterViewInit() {
    this.renderActiveLinkHighlight();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  public openLink(url: string) {
    window.open(url, "_blank");
  }

  private renderActiveLinkHighlight() {
    let counter = 0;
    this.timer = window.setInterval(() => {
      let index = counter % 3;
      let nextIndex = (index + 1) % 3;

      this.activeIconArray[index] = false;
      this.activeIconArray[nextIndex] = true;
      counter++;
    }, 1800);
  }
  public onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
  public toggleTheme(event: any): void {
    this.changeTheme.emit(event);
  }
  public goToLink(page: string): void {
    this.routingService.navigateToPage(page);
  }
}
