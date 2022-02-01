import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { RoutingService } from "src/app/services/routing.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Output()
  public sidenavToggle = new EventEmitter<void>();
  @Output()
  public changeTheme = new EventEmitter<boolean>();
  @Input() public isDarkTheme: boolean = false;
  public links: string[] = ["about", "projects", "contact"];
  @Input() public currentUrl: string = "";
  constructor(private routingService: RoutingService) {}

  ngOnInit() {}
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
