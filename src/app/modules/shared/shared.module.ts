import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SanitizedHtmlPipe } from "src/app/pipes/sanitized-html.pipe";
import { MaterialModule } from "../material/material.module";

const modules = [MaterialModule, CommonModule, RouterModule];
@NgModule({
  declarations: [SanitizedHtmlPipe],
  imports: modules,
  exports: [SanitizedHtmlPipe, ...modules],
})
export class SharedModule {}
