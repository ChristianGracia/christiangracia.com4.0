import { Injectable } from "@angular/core";
import { UtilService } from "./util.service";

@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private utilService: UtilService) {}
  public getCurrentSong() {
    return this.utilService.getObservable("/spotify/currently-playing");
  }
  public getRecentlyPlayed(amount: number = 50) {
    return this.utilService.getObservable(
      "/spotify/recently-played?amount=" + amount
    );
  }
}
