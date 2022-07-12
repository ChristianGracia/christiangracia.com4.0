import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";
import { SanitizedHtmlPipe } from "./pipes/sanitized-html.pipe";

const modules = [MaterialModule, CommonModule, RouterModule];
@NgModule({
  declarations: [SanitizedHtmlPipe],
  imports: modules,
  exports: [SanitizedHtmlPipe, ...modules],
})
export class SharedModule {}
