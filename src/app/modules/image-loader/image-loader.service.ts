import { Injectable } from "@angular/core";

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
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

  public initializeImages(icons: string[]) {
    Promise.all(
      icons.map((icon) => {
        return new Promise((resolve, reject) => {
          this.matIconRegistry.addSvgIconInNamespace(
            "assets",
            icon.toString(),
            this.domSanitizer.bypassSecurityTrustResourceUrl(
              `assets/images/${icon}.svg`
            )
          );
          resolve(true);
        });
      })
    );
  }
}
