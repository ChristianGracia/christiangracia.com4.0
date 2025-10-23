import { NgModule, Optional, SkipSelf } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { EnsureModuleLoadedOnceGuard } from "./ensure-module-loaded-once.guard";
import { SharedModule } from "src/app/modules/shared/shared.module";
// let modules = [SharedModule];

@NgModule({
  imports: [],
  exports: [],
  providers: [provideHttpClient()]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
