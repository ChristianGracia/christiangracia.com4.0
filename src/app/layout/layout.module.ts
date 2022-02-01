import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './footer/footer.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    SocialMediaLinksComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [SideBarComponent, HeaderComponent, FooterComponent, CommonModule],
})
export class LayoutModule {}
