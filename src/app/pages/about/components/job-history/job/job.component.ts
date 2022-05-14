import { Component, Input, OnInit } from "@angular/core";
import { Job } from "../../../models/job.model";

@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  @Input() public job: Job;
  constructor() {}

  ngOnInit(): void {}
}
