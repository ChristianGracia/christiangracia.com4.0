import { Injectable } from "@angular/core";
import { UtilService } from "./util.service";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private utilService: UtilService) {}
  public getCurrentSong() {
    return this.utilService.createObservable(
      "get",
      "/spotify/currently-playing"
    );
  }
  public getRecentlyPlayed(amount: number = 50) {
    return this.utilService.createObservable(
      "get",
      "/spotify/recently-played?amount=" + amount
    );
  }
}
