import { Component, Input, OnInit } from "@angular/core";
import { Job } from "../../../models/job.model";
import { formatRepoLanguage } from "src/app/modules/lazy-shared/util/util";
@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  @Input() public job: Job;
  constructor() {}

  ngOnInit(): void {}
  public formatRepoLanguage(language: string) {
    return formatRepoLanguage(language);
  }
}
