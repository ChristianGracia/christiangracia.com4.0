import {
  Component,
  // ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  // ViewChild,
  // ViewContainerRef,
} from "@angular/core";
import { LocationData } from "src/app/models/location-data.model";
import { EmailService } from "src/app/services/email.service";
import { LocationService } from "src/app/services/location.service";
import { RoutingService } from "../../services/routing.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  // @ViewChild("currentSongComponent", { read: ViewContainerRef })
  // currentSongComponent!: ViewContainerRef;
  constructor(
    private routingService: RoutingService,
    private locationService: LocationService,
    private emailService: EmailService // private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    // this.lazyLoadSpotifyComponent();
  }

  ngOnDestroy(): void {
    this.sendSiteVisit();
  }

  public goToAboutPage(): void {
    this.sendSiteVisit();
    this.routingService.navigateToAbout();
  }
  private sendSiteVisit() {
    if (window.location && window.location.hostname !== "localhost") {
      this.locationService
        .getLocationJSON()
        .subscribe((locationData: LocationData) => {
          this.emailService
            .sendSiteVisitEmail(locationData)
            .subscribe(() => {});
        });
    }
  }

  // private async lazyLoadSpotifyComponent() {
  //   const { CurrentSongComponent } = await import(
  //     "./current-song/current-song.component"
  //   );

  //   const componentFactory =
  //     this.componentFactoryResolver.resolveComponentFactory(
  //       CurrentSongComponent
  //     );
  //   this.currentSongComponent.clear();
  //   this.currentSongComponent.createComponent(componentFactory);
  // }
}
