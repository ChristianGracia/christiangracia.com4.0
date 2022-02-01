import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocationData } from "../models/location-data.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private http: HttpClient) {}

  public getLocationJSON() {
    return this.http.get<LocationData>("https://json.geoiplookup.io/").pipe(
      map((data: LocationData) => {
        return LocationData.fromJSON(data);
      })
    );
  }
}
