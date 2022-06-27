import { Injectable } from "@angular/core";
import { UtilService } from "src/app/services/util.service";

@Injectable({
  providedIn: "root",
})
export class FileService {
  constructor(private utilService: UtilService) {}
  public getSpotifyCode() {
    return this.utilService.getObservable(
      "/util/show-file?file=spotify.ts&cssFile=code-snippet.css",
      { responseType: "text" as "json" }
    );
  }
}
