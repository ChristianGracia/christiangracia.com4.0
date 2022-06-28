import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { SOCIAL_MEDIA_KEYS, SOCIAL_MEDIA_LINKS } from "src/util/constants";

@Component({
  selector: "app-social-media-links",
  templateUrl: "./social-media-links.component.html",
  styleUrls: ["./social-media-links.component.scss"],
})
export class SocialMediaLinksComponent implements OnDestroy, AfterViewInit {
  public activeIconArray: boolean[] = [false, false, false];
  public socialMediaLinks: string[] = SOCIAL_MEDIA_KEYS;
  private timer!: number;

  ngAfterViewInit() {
    this.renderActiveLinkHighlight();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  public openLink(socialMedia: string) {
    const SocialMedia = SOCIAL_MEDIA_LINKS;

    window.open(SocialMedia[socialMedia as keyof typeof SocialMedia], "_blank");
  }

  private renderActiveLinkHighlight() {
    let counter = 0;
    this.timer = window.setInterval(() => {
      let index = counter % 3;
      let nextIndex = (index + 1) % 3;

      this.activeIconArray[index] = false;
      this.activeIconArray[nextIndex] = true;
      counter++;
    }, 1800);
  }
}
