import { Injectable } from "@angular/core";

import { EmailMessage } from "../models/email-message.model";
import { LocationData } from "../models/location-data.model";
import { UtilService } from "./util.service";
@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private utilService: UtilService) {}

  public sendContactEmail(emailMessage: EmailMessage) {
    return this.utilService.postObservable("/email/send-email", emailMessage);
  }

  public sendSiteVisitEmail(locationData: LocationData) {
    return this.utilService.postObservable("/email/site-visit", locationData);
  }
}
