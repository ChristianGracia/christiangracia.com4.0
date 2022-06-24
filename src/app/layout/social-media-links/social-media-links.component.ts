import { Component, OnInit, OnDestroy } from "@angular/core";

const SOCIAL_MEDIA_LINKS = ["github", "twitter", "linkedin"];

@Component({
  selector: "app-social-media-links",
  templateUrl: "./social-media-links.component.html",
  styleUrls: ["./social-media-links.component.scss"],
})
export class SocialMediaLinksComponent implements OnInit, OnDestroy {
  public activeIconArray: boolean[] = [false, false, false];
  public socialMediaLinks: string[] = SOCIAL_MEDIA_LINKS;
  private timer!: number;

  ngOnInit() {
    this.renderActiveLinkHighlight();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
  public openLink(socialMedia: string) {
    const SocialMedia = {
      github: "https://github.com/ChristianGracia",
      twitter: "http://www.twitter.com/CG_CODING",
      linkedin: "https://www.linkedin.com/in/christiangracia",
    };

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
