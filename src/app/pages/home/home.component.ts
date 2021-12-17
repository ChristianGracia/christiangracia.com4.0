import { Component, OnInit } from '@angular/core';
import { LocationData } from 'src/app/models/location-data.model';
import { EmailService } from 'src/app/services/email.service';
import { LocationService } from 'src/app/services/location.service';
import { RoutingService } from '../../services/routing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private routingService: RoutingService,
    private locationService: LocationService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.sendSiteVisit();
    }, 500);
  }

  public goToAboutPage(): void {
    this.sendSiteVisit();
    this.routingService.navigateToAbout();
  }
  private sendSiteVisit() {
    if (window.location && window.location.hostname !== 'localhost') {
      this.locationService
      .getLocationJSON()
      .subscribe((locationData: LocationData) => {
        this.emailService.sendSiteVisitEmail(locationData).subscribe(() => {});
      });
    }
  }
}
