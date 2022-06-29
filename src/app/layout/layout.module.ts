import { NgModule } from "@angular/core";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SharedModule } from "../modules/shared/shared.module";

const modules = [SideBarComponent, HeaderComponent, FooterComponent];

@NgModule({
  declarations: modules,
  imports: [MatToolbarModule, MatSlideToggleModule, SharedModule],
  exports: modules,
})
export class LayoutModule {}
