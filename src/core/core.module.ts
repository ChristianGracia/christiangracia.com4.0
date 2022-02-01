import { NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from "../app/material/material.module";
import { RouterModule } from "@angular/router";
import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";

let modules = [
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
