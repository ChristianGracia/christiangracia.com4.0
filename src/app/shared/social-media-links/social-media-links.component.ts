import { Component, OnInit, OnDestroy } from '@angular/core';

const SOCIAL_MEDIA_LINKS = ['github', 'twitter', 'linkedin'];

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss'],
})
export class SocialMediaLinksComponent implements OnInit, OnDestroy {
  public activeIconArray: boolean[] = [false, false, false];
  public socialMediaLinks: string[] = SOCIAL_MEDIA_LINKS;
  private timer!: number;

  constructor() {}

  ngOnInit() {
    setTimeout(() => this.renderActiveLinkHighlight(), 2000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
  public openLink(socialMedia: string) {
    let url = '';
    switch (socialMedia) {
      case 'github':
        url = 'https://github.com/ChristianGracia';
        break;
      case 'twitter':
        url = 'http://www.twitter.com/CG_CODING';
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com/in/christiangracia';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  }

  private renderActiveLinkHighlight() {
    let counter = 0;
    this.timer = window.setInterval(() => {
      let index = counter % 3;
      let nextIndex = (index + 1) % 3;

      this.activeIconArray[index] = false;
      this.activeIconArray[nextIndex] = true;
      counter++;
    }, 2500);
  }
}
