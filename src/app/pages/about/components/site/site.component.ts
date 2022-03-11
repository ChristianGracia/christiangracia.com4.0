import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { SpotifyService } from "src/app/services/spotify.service";

interface Section {
  title: string;
  description: string[];
  image: string[];
}

const sections = [{}];
@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  public code: any = "";
  constructor(
    private spotifyService: SpotifyService,
    private domSanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.spotifyService.getSpotifyCode().subscribe((data: string) => {
      this.code = this.domSanitizer.bypassSecurityTrustHtml(data);
    });
  }
  public openSite(url: string) {
    window.open(url, "_blank");
  }
}
