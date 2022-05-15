import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { RoutingService } from "src/app/services/routing.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild("socialMediaLinksComponent", { read: ViewContainerRef })
  socialMediaLinksComponent!: ViewContainerRef;
  @Output()
  public sidenavToggle = new EventEmitter<void>();
  @Output()
  public changeTheme = new EventEmitter<boolean>();
  @Input() public isDarkTheme: boolean = false;
  public links: string[] = ["about", "projects", "contact"];
  @Input() public currentUrl: string = "";
  constructor(
    private routingService: RoutingService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    setTimeout(async () => {
      await this.lazyLoadSocialMediaComponent();
    }, 3000);
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

  private async lazyLoadSocialMediaComponent() {
    const { SocialMediaLinksComponent } = await import(
      "../social-media-links/social-media-links.component"
    );

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        SocialMediaLinksComponent
      );
    this.socialMediaLinksComponent.clear();
    this.socialMediaLinksComponent.createComponent(componentFactory);
  }
}
