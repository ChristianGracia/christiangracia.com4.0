import { Component, OnInit } from "@angular/core";
import { RoutingService } from "src/app/services/routing.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {}

  public goToProjectsPage(): void {
    this.routingService.navigateToPage("/projects");
  }
}
