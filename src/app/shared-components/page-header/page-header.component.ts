import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.scss"],
})
export class PageHeaderComponent implements OnInit {
  @Input() public title: string = "";
  @Input() public subHeader: string = "";

  constructor() {}

  ngOnInit(): void {}
}
