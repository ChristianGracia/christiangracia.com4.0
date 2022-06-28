import { Component, OnDestroy } from "@angular/core";
import { EmailService } from "src/app/services/email.service";
import { LocationService } from "src/app/services/location.service";
import { LocationData } from "src/app/types/location-data";
import { formatLocationData } from "src/util/formatMethods";
import { RoutingService } from "../../services/routing.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnDestroy {
  constructor(
    private routingService: RoutingService,
    private locationService: LocationService,
    private emailService: EmailService
  ) {}

  ngOnDestroy(): void {
    this.sendSiteVisit();
  }

  public goToAboutPage(): void {
    this.routingService.navigateToPage("/about");
  }
  private sendSiteVisit() {
    const { hostname } = window.location;
    if (hostname !== "localhost") {
      this.locationService
        .getLocationData()
        .subscribe((locationData: LocationData) => {
          this.emailService
            .sendSiteVisitEmail(formatLocationData(locationData))
            .subscribe(() => {});
        });
    }
  }
}
