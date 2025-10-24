import { Component } from "@angular/core";
import { CLOSE_ICON } from "src/app/constants/icons";

@Component({
    selector: "app-close-button",
    templateUrl: "./close-button.component.html",
    styleUrls: ["./close-button.component.scss"],
    standalone: false
})
export class CloseButtonComponent {
  // @Input() public title: string = "";
  // @Input() public subHeader: string = "";
  public closeButton = CLOSE_ICON;
}
