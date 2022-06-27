import { Injectable } from "@angular/core";
import { UtilService } from "./util.service";
@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private utilService: UtilService) {}

  public getLocationData() {
    return this.utilService.getObservable("https://json.geoiplookup.io/");
  }
}
