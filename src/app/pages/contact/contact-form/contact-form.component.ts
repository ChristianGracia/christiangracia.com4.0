import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactService } from "../services/contact.service";
import { RoutingService } from "src/app/services/routing.service";

import { LocationService } from "../../../services/location.service";
import { EmailService } from "src/app/services/email.service";
import { LocationData } from "src/app/types/location-data";
import { formatLocationData } from "src/util/formatMethods";
import { EmailMessage } from "src/app/types/email-message";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  @Output() private emailReceivedEvent = new EventEmitter<boolean>();
  public emailReceived: boolean = false;
  constructor(
    private contactService: ContactService,
    private routingService: RoutingService,
    private locationService: LocationService,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {}
  public submit(form: NgForm): void {
    const { name, email, message } = form.value;
    const messageParams: EmailMessage = {
      name,
      email,
      message,
    };
    this.locationService
      .getLocationData()
      .subscribe((locationData: LocationData) => {
        this.emailService
          .sendSiteVisitEmail(formatLocationData(locationData))
          .subscribe(() => {});
      });
    this.contactService
      .sendContactEmail(messageParams)
      .subscribe((data: any) => {
        if (data.name) {
          this.emailReceived = true;
          this.emailReceivedEvent.emit(true);
        }
      });
  }

  public goToSite(): void {
    this.routingService.navigateToPage("/");
  }
}
