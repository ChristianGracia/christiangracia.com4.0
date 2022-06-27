import { Injectable } from "@angular/core";

import { EmailMessage } from "src/app/types/email-message";
import { LocationData } from "src/app/types/location-data";
import { UtilService } from "src/app/services/util.service";
@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private utilService: UtilService) {}

  public sendContactEmail(emailMessage: EmailMessage) {
    return this.utilService.createObservable(
      "post",
      "/email/send-email",
      emailMessage
    );
  }
}
