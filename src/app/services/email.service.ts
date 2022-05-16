import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { EmailMessage } from "../models/email-message.model";
import { LocationData } from "../models/location-data.model";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public sendContactEmail(emailMessage: EmailMessage) {
    return this.http.post(
      environment.apiUrl + "/email/send-email",
      emailMessage
    );
  }

  public sendSiteVisitEmail(locationData: LocationData) {
    return this.http.post(
      environment.apiUrl + "/email/site-visit",
      locationData
    );
  }
}
