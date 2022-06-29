import { Component } from "@angular/core";
import { HEADPHONES_ICON } from "src/app/constants/icons";

@Component({
  selector: "app-lazy-animated-icon",
  templateUrl: "./lazy-animated-icon.component.html",
  styleUrls: ["./lazy-animated-icon.component.scss"],
})
export class AnimatedIconComponent {
  public headphonesIcon = HEADPHONES_ICON;
}
