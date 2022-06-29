import { NgModule } from "@angular/core";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SharedModule } from "../modules/shared/shared.module";

@NgModule({
  declarations: [SideBarComponent, HeaderComponent, FooterComponent],
  imports: [MatToolbarModule, MatSlideToggleModule, SharedModule],
  exports: [SideBarComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
