import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class RoutingService {
  constructor(private router: Router) {}

  public navigateToProjects() {
    this.router.navigate(["/projects"]);
  }

  public navigateToAbout() {
    this.router.navigate(["/about"]);
  }

  public navigateToHomePage() {
    this.router.navigate(["/"]);
  }
  public navigateToPage(page: string) {
    this.router.navigate([page]);
  }
}
