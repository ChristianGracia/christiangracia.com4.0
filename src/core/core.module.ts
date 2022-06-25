import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { MaterialModule } from "../app/material/material.module";
import { RouterModule } from "@angular/router";
import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "../app/layout/layout.module";
let modules = [
  BrowserAnimationsModule,
  HttpClientModule,
  MaterialModule,
  RouterModule,
  LayoutModule,
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
