import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { openLink } from "src/app/util";
import { FileService } from "../../services/file.service";
@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  public code: any = "";
  constructor(
    private fileService: FileService,
    private domSanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.fileService.getSpotifyCode().subscribe((data: string) => {
      this.code = this.domSanitizer.bypassSecurityTrustHtml(data);
    });
  }
  public openSite(url: string) {
    openLink(url);
  }
}
