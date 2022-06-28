import { Injectable } from "@angular/core";

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { ICONS } from "src/util/constants";
const prefix = "assets/images/";
const type = ".svg";
@Injectable({
  providedIn: "root",
})
export class ImageService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    console.log("created");
  }

  private addIcon(icon) {
    this.matIconRegistry.addSvgIconInNamespace(
      "assets",
      icon,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${prefix}${icon}${type}`
      )
    );
    return true;
  }

  public async initializeImages() {
    await Promise.all(
      ICONS.map(
        (icon: string) =>
          new Promise((resolve, reject) => resolve(this.addIcon(icon)))
      )
    );
  }
}
