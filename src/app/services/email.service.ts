import { Injectable } from "@angular/core";
import { LocationData } from "../types/location-data";
import { UtilService } from "./util.service";
@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private utilService: UtilService) {}

  public sendSiteVisitEmail(locationData: LocationData) {
    return this.utilService.createObservable(
      "post",
      "/email/site-visit",
      locationData
    );
  }
}
